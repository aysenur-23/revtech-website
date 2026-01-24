'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import {
    Send, CheckCircle, Calculator, User, Mail,
    Phone, Building2, Package, Zap, Layout,
    TrendingUp, Calendar, MessageSquare, ArrowRight,
    Check, Settings, Shield, FileText, Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function QuotePage() {
    const t = useTranslations('quote');
    const locale = useLocale();
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = {
            type: 'quote',
            name: (form.elements[0] as HTMLInputElement).value,
            email: (form.elements[1] as HTMLInputElement).value,
            phone: (form.elements[2] as HTMLInputElement).value,
            company: (form.elements[3] as HTMLInputElement).value,
            category: (form.elements[4] as HTMLSelectElement).value,
            power: (form.elements[5] as HTMLSelectElement).value,
            area: (form.elements[6] as HTMLSelectElement).value,
            budget: (form.elements[7] as HTMLSelectElement).value,
            specs: (form.elements[8] as HTMLTextAreaElement).value,
            date: (form.elements[9] as HTMLInputElement).value,
            message: (form.elements[10] as HTMLTextAreaElement).value,
        };

        try {
            // Firebase Firestore'a kaydet
            await addDoc(collection(db, 'quote_requests'), {
                ...formData,
                locale: locale,
                createdAt: serverTimestamp(),
                status: 'new',
            });

            // Firebase Extension "Trigger Email" için mail collection'a ekle
            await addDoc(collection(db, 'mail'), {
                to: ['info@reviumtech.com'],
                message: {
                    subject: `Yeni Teklif Talebi: ${formData.name} - ${formData.category}`,
                    html: `
                        <h2>Yeni Teklif Talebi</h2>
                        <h3>Kişisel Bilgiler</h3>
                        <p><strong>Ad Soyad:</strong> ${formData.name}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Telefon:</strong> ${formData.phone}</p>
                        <p><strong>Firma:</strong> ${formData.company || 'Belirtilmedi'}</p>
                        
                        <h3>Proje Bilgileri</h3>
                        <p><strong>Kategori:</strong> ${formData.category}</p>
                        <p><strong>Güç İhtiyacı:</strong> ${formData.power}</p>
                        <p><strong>Kullanım Alanı:</strong> ${formData.area}</p>
                        <p><strong>Bütçe:</strong> ${formData.budget || 'Belirtilmedi'}</p>
                        
                        <h3>Teknik Gereksinimler</h3>
                        <p><strong>Özel İstekler:</strong> ${formData.specs || 'Belirtilmedi'}</p>
                        <p><strong>Hedef Tarih:</strong> ${formData.date || 'Belirtilmedi'}</p>
                        
                        <h3>Ek Bilgiler</h3>
                        <p>${formData.message || 'Ek bilgi yok'}</p>
                        
                        <hr>
                        <p><small>Bu talep reviumtech.com teklif formundan gönderildi.</small></p>
                    `,
                },
            });

            setSubmitted(true);
        } catch (error) {
            console.error('Submission error:', error);
            alert('Teklif formunu gönderirken bir hata oluştu. Lütfen tekrar deneyiniz.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center pt-24 pb-12 px-4">
                <div className="max-w-md w-full text-center space-y-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                        <div className="relative w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="h-12 w-12 text-emerald-600" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-heavy text-slate-900 mb-4">{t('successTitle')}</h2>
                        <p className="text-lg text-slate-600 font-medium">{t('successMessage')}</p>
                    </div>
                    <div className="pt-4">
                        <Link
                            href={`/${locale}/`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl"
                        >
                            <ArrowRight className="w-5 h-5 rotate-180" />
                            {t('backToHome')}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section - Elegant & Minimal */}
            <section className="relative pt-24 pb-10 lg:pt-28 lg:pb-12 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                {/* Subtle Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-emerald-50/10 to-transparent pointer-events-none" />

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
                    <div className="max-w-2xl mx-auto space-y-4">
                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                            {t('title')}
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-slate-500 leading-relaxed font-medium">
                            {t('description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 lg:py-16 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl shadow-slate-100/80 overflow-hidden border border-slate-200/60">
                        <div className="p-8 sm:p-12 lg:p-16">
                            <form onSubmit={handleSubmit} className="space-y-10">
                                {/* Personal Information */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <User className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{t('personalInfo')}</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('nameLabel')}</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder={t('namePlaceholder')}
                                                    className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('emailLabel')}</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder={t('emailPlaceholder')}
                                                    className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('phoneLabel')}</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder={t('phonePlaceholder')}
                                                    className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('companyLabel')}</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    type="text"
                                                    placeholder={t('companyPlaceholder')}
                                                    className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Information */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                            <Package className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{t('projectInfo')}</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('categoryLabel')}</label>
                                            <div className="relative appearance-none">
                                                <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                <select
                                                    required
                                                    className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 appearance-none"
                                                >
                                                    <option value="">{t('categorySelect')}</option>
                                                    <option value="portable">{t('categories.portable')}</option>
                                                    <option value="vehicle">{t('categories.vehicle')}</option>
                                                    <option value="cabin">{t('categories.cabin')}</option>
                                                    <option value="ges">{t('categories.ges')}</option>
                                                    <option value="industrial">{t('categories.industrial')}</option>
                                                    <option value="special">{t('categories.special')}</option>
                                                    <option value="other">{t('categories.other')}</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('powerLabel')}</label>
                                            <div className="relative">
                                                <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                <select
                                                    required
                                                    className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 appearance-none"
                                                >
                                                    <option value="">{t('powerSelect')}</option>
                                                    <option value="0-5">{locale === 'ar' ? '٠-٥ كيلوواط' : '0-5 kW'}</option>
                                                    <option value="5-20">{locale === 'ar' ? '٥-٢٠ كيلوواط' : '5-20 kW'}</option>
                                                    <option value="20-50">{locale === 'ar' ? '٢٠-٥٠ كيلوواط' : '20-50 kW'}</option>
                                                    <option value="50-100">{locale === 'ar' ? '٥٠-١٠٠ كيلوواط' : '50-100 kW'}</option>
                                                    <option value="100+">{locale === 'ar' ? '١٠٠+ كيلوواط' : '100+ kW'}</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('areaLabel')}</label>
                                            <div className="relative">
                                                <Layout className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                <select
                                                    required
                                                    className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 appearance-none"
                                                >
                                                    <option value="">{t('areaSelect')}</option>
                                                    <option value="residential">{locale === 'tr' ? 'Konut' : locale === 'ar' ? 'سكني' : 'Residential'}</option>
                                                    <option value="commercial">{locale === 'tr' ? 'Ticari' : locale === 'ar' ? 'تجاري' : 'Commercial'}</option>
                                                    <option value="industrial">{locale === 'tr' ? 'Endüstriyel' : locale === 'ar' ? 'صناعي' : 'Industrial'}</option>
                                                    <option value="vehicle">{locale === 'tr' ? 'Araç' : locale === 'ar' ? 'مركبة' : 'Vehicle'}</option>
                                                    <option value="offgrid">{locale === 'tr' ? 'Şebekeden Bağımsız' : locale === 'ar' ? 'خارج الشبكة' : 'Off-Grid'}</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('budgetLabel')}</label>
                                            <div className="relative">
                                                <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                <select
                                                    className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 appearance-none"
                                                >
                                                    <option value="">{t('budgetSelect')}</option>
                                                    <option value="low">₺0 - ₺50.000</option>
                                                    <option value="mid">₺50.000 - ₺200.000</option>
                                                    <option value="high">₺200.000+</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Technical Requirements */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                                        <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                                            <Settings className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{t('technicalRequirements')}</h3>
                                    </div>
                                    <div className="grid grid-cols-1 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('specLabel')}</label>
                                            <textarea
                                                placeholder={t('specPlaceholder')}
                                                rows={4}
                                                className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 resize-none placeholder:text-slate-400"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('dateLabel')}</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    type="date"
                                                    className="w-full h-12 pl-11 pr-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Info */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                                        <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                                            <MessageSquare className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{t('additionalInfo')}</h3>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t('messageLabel')}</label>
                                        <textarea
                                            placeholder={t('messagePlaceholder')}
                                            rows={3}
                                            className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium text-slate-900 resize-none placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 bg-blue-600 text-white rounded-xl font-bold text-base hover:bg-slate-900 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                {t('submitButton')}
                                                <ArrowRight className="w-6 h-6" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Features Detail */}
                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, title: 'fastResponse', desc: 'fastResponseDesc', color: 'bg-emerald-50 text-emerald-600' },
                            { icon: FileText, title: 'detailedOffer', desc: 'detailedOfferDesc', color: 'bg-blue-50 text-blue-600' },
                            { icon: Shield, title: 'expertSupport', desc: 'expertSupportDesc', color: 'bg-purple-50 text-purple-600' }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center space-y-4">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6", feature.color)}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{t(feature.title)}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">{t(feature.desc)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

