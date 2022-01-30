export const getYear = (text: string): number => {
    return new Date(text).getFullYear();
}

export const prettifyDateString = (text: string): string => {
    const date = new Date(text);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
}

export const capitalize = (text: string): string => {
    return text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : '';
};