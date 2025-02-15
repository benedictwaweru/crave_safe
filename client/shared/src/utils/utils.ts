export function relativeTimeFormat(value: number, unit: Intl.RelativeTimeFormatUnit, locales: string = `en`): string {
	return new Intl.RelativeTimeFormat(locales, { style: `short` }).format(value, unit);
}

export function formatCurrency(value: number, currency: string = `USD`, locales: string = `en-US`): string {
	return new Intl.NumberFormat(locales, { style: `currency`, currency: currency }).format(value);
}
