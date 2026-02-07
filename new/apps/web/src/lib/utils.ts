import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Convert Western numbers to Arabic-Indic numerals for Arabic locale
export function toArabicNumeral(num: number | string, locale: string): string {
    if (locale === 'ar') {
        const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return num.toString().split('').map(d => {
            const digit = parseInt(d);
            return !isNaN(digit) ? arabicNumerals[digit] : d;
        }).join('');
    }
    return num.toString();
}
