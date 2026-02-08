import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { GithubStrategy } from './strategies/github.strategy';

@Module({})
export class AuthModule {
  static forRootAsync(): DynamicModule {
    const baseProviders = [AuthService, JwtStrategy, LocalStrategy];
    const oauthProviders: any[] = [];

    // Google OAuth provider'ı sadece environment değişkenleri varsa ekle
    if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
      oauthProviders.push(GoogleStrategy);
    }

    // Github OAuth provider'ı sadece environment değişkenleri varsa ekle
    if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
      oauthProviders.push(GithubStrategy);
    }

    return {
      module: AuthModule,
      imports: [
        PassportModule,
        JwtModule.registerAsync({
          useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('jwt.secret'),
            signOptions: {
              expiresIn: configService.get<string>('jwt.expiresIn'),
            },
          }),
          inject: [ConfigService],
        }),
      ],
      controllers: [AuthController],
      providers: [...baseProviders, ...oauthProviders],
      exports: [AuthService],
    };
  }
}
