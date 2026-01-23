import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppInfo() {
    return {
      name: 'Kurumsal Web Uygulaması API',
      version: '1.0.0',
      description: 'Modern web uygulaması için REST API',
      environment: process.env.NODE_ENV || 'development',
    };
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
