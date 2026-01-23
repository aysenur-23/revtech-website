# Email Configuration Instructions

The contact forms and quote request forms now use a backend API route to send emails via SMTP.
To make this work, you must configure your SMTP credentials.

1. Create a file named `.env.local` in the root of your project (`c:\Users\aslan\Downloads\web\revium-nextjs\.env.local`).
2. Add the following content to it, replacing the values with your actual SMTP server details:

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@yourdomain.com
SMTP_PASS=your_email_password
SMTP_FROM_EMAIL=info@yourdomain.com
SMTP_TO_EMAIL=info@reviumtech.com
```

3. Restart your development server (`npm run dev`) for the changes to take effect.

If you do not provide these credentials, the emails will fail to send and you will see "Failed to send email" errors in the browser console / network tab.
