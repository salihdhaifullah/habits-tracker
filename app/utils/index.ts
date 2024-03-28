export const getDaysSinceEpoch = () => {
    const timeDifference = new Date().getTime() - new Date(0).getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return days;
}

export const getSqlLiteDate = (date: number = Date.now()) => {
    return Math.floor(date / 1000);
}

export const ParseSqlLiteDate = (date: number) => {
    return new Date(date * 1000);
}