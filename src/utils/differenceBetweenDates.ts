import { differenceInDays, differenceInYears, differenceInHours, differenceInMinutes } from 'date-fns';

export function differenceBetweenDates(now:Date, createdAt:Date){
    const daysDiff = differenceInDays(now, createdAt);
    const yearsDiff = differenceInYears(now, createdAt);
    const hoursDiff = differenceInHours(now, createdAt);
    const minutesDiff = differenceInMinutes(now, createdAt);

    let message;

    if (yearsDiff > 0) {
    message = `Há mais de ${yearsDiff} ano(s) atrás`;
    } else if (daysDiff > 0) {
    message = `Há ${daysDiff} dia(s) atrás`;
    } else if (hoursDiff > 0) {
    message = `Há ${hoursDiff} hora(s) atrás`;
    } else {
        message = `Há ${minutesDiff} minuto(s) atrás`;
    }

    return message;
}