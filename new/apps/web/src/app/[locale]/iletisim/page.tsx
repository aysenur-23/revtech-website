'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Iletisim() {
    const t = useTranslations('contact');
    const locale = useLocale();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setIsSubmitting(true);

        const formData = new FormData(form);
        const phone = formData.get('phone') as string;

        try {
            const contactData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: phone || null,
                subject: formData.get('subject'),
                message: formData.get('message'),
                locale: locale,
                createdAt: serverTimestamp(),
                status: 'new',
            };

            // Firebase Firestore'a kaydet
            await addDoc(collection(db, 'contact_messages'), contactData);

            // Firebase Extension "Trigger Email" için mail collection'a ekle
            await addDoc(collection(db, 'mail'), {
                to: ['info@reviumtech.com'],
                message: {
                    subject: `Yeni İletişim Formu: ${formData.get('subject')}`,
                    html: `
                        <h2>Yeni İletişim Formu Gönderimi</h2>
                        <p><strong>Ad Soyad:</strong> ${formData.get('name')}</p>
                        <p><strong>Email:</strong> ${formData.get('email')}</p>
                        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
                        <p><strong>Konu:</strong> ${formData.get('subject')}</p>
                        <p><strong>Mesaj:</strong></p>
                        <p>${formData.get('message')}</p>
                        <hr>
                        <p><small>Bu mesaj reviumtech.com iletişim formundan gönderildi.</small></p>
                    `,
                },
            });

            alert(t('successMessage') || 'Mesajınız başarıyla gönderildi!');
            form.reset();
        } catch (error: any) {
            console.error('Submission error:', error);
            alert(`Hata: ${error.message || 'Mesaj gönderilemedi.'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: Phone,
            title: t('phone'),
            value: locale === 'ar' ? '+٩٠ (٥٥١) ٨٢٩-١٦١٣' : '+90 (551) 829-1613',
            href: 'tel:+905518291613',
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            icon: Mail,
            title: t('email'),
            value: 'info@reviumtech.com',
            href: 'mailto:info@reviumtech.com',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            icon: MapPin,
            title: t('address'),
            value: locale === 'ar' ? 'حي فوزي تشاكماك، شارع الألفية رقم: 81، كاراتاي/قونية' : locale === 'en' ? 'Fevzi Cakmak District, Milenyum Street No:81 Karatay/KONYA' : 'Fevzi Çakmak Mahallesi Milenyum Caddesi No:81 Karatay/KONYA',
            href: 'https://maps.app.goo.gl/dEJViRBejc7dpB3WA',
            color: 'text-orange-600',
            bg: 'bg-orange-50'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Clean & Simple */}
            <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                                {locale === 'tr' ? 'İletişim' : locale === 'ar' ? 'اتصل بنا' : 'Contact'}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                            {t('title')}
                        </h1>
                        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-medium">
                            {t('description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left: Form */}
                    <div className="lg:col-span-7 space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('formTitle')}</h2>
                            <p className="text-slate-500 font-medium">
                                {locale === 'en' ? 'Get in touch with our expert team, and we will help you as soon as possible.'
                                    : locale === 'ar' ? 'تواصل مع فريق خبرائنا، وسنساعدك في أقرب وقت ممكن.'
                                        : 'Uzman ekibimizle iletişime geçin, size en kısa sürede yardımcı olalım.'}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('nameLabel')} <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('emailLabel')} <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('phoneLabel')}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={locale === 'ar' ? '+٩٠ ٥XX XXX XX XX' : '+90 5XX XXX XX XX'}
                                    className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900"
                                    dir="ltr"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('subjectLabel')} <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">{t('messageLabel')} <span className="text-red-500">*</span></label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center gap-3 h-14 px-10 bg-blue-600 text-white rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg shadow-blue-100 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>{t('sendButton')}</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right: Info Sidebar */}
                    <div className="lg:col-span-5 space-y-12">
                        {/* Visual Support Card */}
                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/contact/contact-visual.webp"
                                alt="Revium Support"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Contact Details List */}
                        <div className="space-y-6">
                            {contactMethods.map((method, idx) => (
                                <div key={idx} className="flex gap-5">
                                    <div className={cn("shrink-0 w-12 h-12 rounded-xl flex items-center justify-center", method.bg)}>
                                        <method.icon className={cn("w-5 h-5", method.color)} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{method.title}</h4>
                                        <a
                                            href={method.href}
                                            target={method.icon === MapPin ? "_blank" : undefined}
                                            rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                                            dir={method.icon === MapPin ? undefined : "ltr"}
                                            className="text-[17px] font-bold text-slate-900 hover:text-blue-600 transition-colors"
                                        >
                                            {method.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Map Column - Clean placement */}
                <div className="mt-20 rounded-3xl overflow-hidden shadow-inner border border-slate-200 lg:h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.8687834515566!2d32.553424!3d37.910189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08f4951475c43%3A0x8c7c107147814b8a!2sKaratay%20Sanayi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '400px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
