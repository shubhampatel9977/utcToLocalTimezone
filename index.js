function utcToLocalTimezone(utcDateString, optionsData = {}) {
    const {
        locale = "en-US",
        timezone = "Asia/Kolkata",
        patternType = "datetime-12h-text",
    } = optionsData;

    const date = new Date(utcDateString);

    const getOptions = (patternType) => {
        switch (patternType) {
            case "date-slash":
                return { day: "2-digit", month: "2-digit", year: "numeric", timeZone: timezone };
            case "date-text":
                return { day: "2-digit", month: "short", year: "numeric", timeZone: timezone };
            case "datetime-12h-slash":
                return { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true, timeZone: timezone };
            case "datetime-12h-text":
                return { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true, timeZone: timezone };
            case "datetime-24h-slash":
                return { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: false, timeZone: timezone };
            case "datetime-24h-text":
                return { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: false, timeZone: timezone };
            default:
                return { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true, timeZone: timezone };
        }
    };

    const options = getOptions(patternType);
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = utcToLocalTimezone;
} else {
    window.utcToLocalTimezone = utcToLocalTimezone;
}

