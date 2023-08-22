import { format, utcToZonedTime } from 'date-fns-tz';

export function formatInTimeZone(date: Date): Date {
  const timeZone = 'America/Santiago';
  const formatString = 'dd/MM/yyyy HH:mm:ss';
  const zonedDate = utcToZonedTime(date, timeZone);
  console.log(zonedDate);
   return zonedDate;
  //return format(zonedDate, formatString, { timeZone });

}
