import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}

  async uploadFile(userId: string, file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    // Generate unique key for the file
    const key = `${userId}/${uuidv4()}-${file.originalname}`;
    
    // In a real application, you would upload to S3 here
    // For now, we'll just store the file info in the database
    const fileObject = await this.prisma.fileObject.create({
      data: {
        ownerId: userId,
        key,
        url: `http://localhost:9000/uploads/${key}`, // Mock URL
        mime: file.mimetype,
        size: file.size,
      },
    });

    return {
      id: fileObject.id,
      url: fileObject.url,
      mime: fileObject.mime,
      size: fileObject.size,
      createdAt: fileObject.createdAt,
    };
  }
}
