import { format, utcToZonedTime } from 'date-fns-tz';

export function formatInTimeZone(date: Date): string {
  const timeZone = 'America/Santiago';
  const formatString = 'dd/MM/yyyy HH:mm:ss';
  const zonedDate = utcToZonedTime(date, timeZone);
  return format(zonedDate, formatString, { timeZone });
}
