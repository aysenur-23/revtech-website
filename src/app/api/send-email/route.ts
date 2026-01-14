
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, name, email, phone, subject, message, product } = body;

        // Create a transporter using SMTP
        // Credentials should be in .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email Content Construction
        let emailSubject = '';
        let htmlContent = '';

        if (type === 'contact') {
            emailSubject = `Yeni İletişim Mesajı: ${subject || 'Konu Yok'}`;
            htmlContent = `
                <h2>Yeni İletişim Formu Mesajı</h2>
                <p><strong>İsim:</strong> ${name}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Konu:</strong> ${subject}</p>
                <p><strong>Mesaj:</strong></p>
                <p>${message}</p>
            `;
        } else if (type === 'quote') {
            emailSubject = `Fiyat Teklifi İsteği: ${name}`;
            htmlContent = `
                <h2>Yeni Fiyat Teklifi İsteği</h2>
                <p><strong>İsim:</strong> ${name}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                ${product ? `<p><strong>Ürün:</strong> ${product}</p>` : ''}
                <p><strong>Mesaj/Detaylar:</strong></p>
                <p>${message}</p>
            `;
        }

        // Send mail
        await transporter.sendMail({
            from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
            to: process.env.SMTP_TO_EMAIL || process.env.SMTP_USER, // Send to yourself
            subject: emailSubject,
            html: htmlContent,
            replyTo: email,
        });

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
