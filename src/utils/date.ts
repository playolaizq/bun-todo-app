const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
}
