/**
 * Server-safe formatting utilities (no clsx/tailwind-merge).
 * Use this in RSC pages to avoid webpack __webpack_modules__[moduleId] errors.
 */

export function toArabicNumeral(num: number | string, locale: string): string {
    if (locale === 'ar') {
        const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return num.toString().split('').map(d => {
            const digit = parseInt(d, 10);
            return !isNaN(digit) ? arabicNumerals[digit] : d;
        }).join('');
    }
    return num.toString();
}
