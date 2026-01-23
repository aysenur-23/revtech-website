import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  getNotifications(userId: string) {
    // Mock notifications - in a real app, these would come from a database
    return [
      {
        id: '1',
        title: 'Hoş geldiniz!',
        message: 'Uygulamaya başarıyla kaydoldunuz.',
        type: 'success',
        read: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Profilinizi tamamlayın',
        message: 'Profil bilgilerinizi güncelleyerek daha iyi bir deneyim yaşayın.',
        type: 'info',
        read: false,
        createdAt: new Date().toISOString(),
      },
    ];
  }
}
