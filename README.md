# `utc-to-local-timezone` 🌍

A lightweight JavaScript package to convert a UTC date string to a local timezone format with customizable date/time patterns. Whether you need to display dates in a specific timezone or want flexible date formatting, this package has you covered.

## Features 🎯
- Convert UTC time to local time based on a specified timezone 🕒
- Customizable date and time formats (12h/24h, with or without slashes) 📅
- Support for a wide range of locales 🌏
- Supports various timezone and locale options 🌍

## Installation 💻

You can install the package via npm:

```bash
npm install utc-to-local-timezone
```

Alternatively, if you're using the script directly in the browser, you can include the `index.js` file as a `<script>` tag.

## Usage 📑

Import the package in your JavaScript code:

```javascript
const utcToLocalTimezone = require('utc-to-local-timezone');
```

### Function: `utcToLocalTimezone`

This function converts a UTC date string into the local timezone and formats it according to the specified pattern.

### Parameters:

- `utcDateString` (string): The UTC date string to convert (e.g., `"2025-05-11T12:00:00Z"`).
- `optionsData` (object, optional): Options to customize the output format:
  - `locale` (string, optional): The locale to use (default: `"en-US"`).
  - `timezone` (string, optional): The timezone to use (default: `"Asia/Kolkata"`).
  - `patternType` (string, optional): The pattern to format the date and time (default: `"datetime-12h-text"`).

### Pattern Types (Format) 📅:
- `"date-slash"`: Only date in `DD/MM/YYYY` (e.g., `11/05/2025`).
- `"date-text"`: Only date in `Month DD, YYYY` (e.g., `May 11, 2025`).
- `"datetime-12h-slash"`: Date and time (12h) with slashes (e.g., `11/05/2025, 5:30 PM`).
- `"datetime-12h-text"`: Date and time (12h) with text date (e.g., `May 11, 2025, 5:30 PM`).
- `"datetime-24h-slash"`: Date and time (24h) with slashes (e.g., `11/05/2025, 17:30`).
- `"datetime-24h-text"`: Date and time (24h) with text date (e.g., `May 11, 2025, 17:30`).

### Example Usage:

#### 1. Basic Usage (Default)
```javascript
const utcDate = "2025-05-11T12:00:00Z";
const options = {
  locale: "en-US",           // Locale (default is en-US)
  timezone: "Asia/Kolkata",  // Timezone (default is Asia/Kolkata)
  patternType: "datetime-12h-text" // Date-Time format (default is "datetime-12h-text")
};

console.log(utcToLocalTimezone(utcDate, options));
// Output: "May 11, 2025, 5:30 PM"
```

#### 2. Customizing the Date Format
```javascript
const utcDate = "2025-05-11T12:00:00Z";
const options = {
  locale: "en-GB",            // Locale in English (United Kingdom)
  timezone: "Europe/London"   // Timezone (London)
  patternType: "date-slash",  // Only date in DD/MM/YYYY
};

console.log(utcToLocalTimezone(utcDate, options));
// Output: "11/05/2025"
```

#### 3. 24-hour Format Example
```javascript
const utcDate = "2025-05-11T12:00:00Z";
const options = {
  locale: "fr-FR",                    // Locale in French (France)
  timezone: "Europe/Paris"            // Timezone (Paris)
  patternType: "datetime-24h-slash",  // Date and time (24h) with slashes
};

console.log(utcToLocalTimezone(utcDate, options));
// Output: "11/05/2025, 17:30"
```

## Locales 🌍

**Hindi**

    hi-IN (Hindi, India)

**English**

    en-US (English, United States)
    en-GB (English, United Kingdom)
    en-AU (English, Australia)
    en-CA (English, Canada)
    en-IN (English, India)
    en-NZ (English, New Zealand)

**Spanish**

    es-ES (Spanish, Spain)
    es-MX (Spanish, Mexico)
    es-AR (Spanish, Argentina)
    es-CO (Spanish, Colombia)
    es-CL (Spanish, Chile)

**French**

    fr-FR (French, France)
    fr-CA (French, Canada)
    fr-BE (French, Belgium)
    fr-CH (French, Switzerland)

**German**

    de-DE (German, Germany)
    de-AT (German, Austria)
    de-CH (German, Switzerland)
    de-LI (German, Liechtenstein)

**Italian**

    it-IT (Italian, Italy)
    it-CH (Italian, Switzerland)

**Portuguese**

    pt-PT (Portuguese, Portugal)
    pt-BR (Portuguese, Brazil)

**Arabic**:

    ar-SA (Arabic, Saudi Arabia)
    ar-EG (Arabic, Egypt)
    ar-AE (Arabic, UAE)
    ar-IQ (Arabic, Iraq)

**Chinese**

    zh-CN (Chinese, Simplified, China)
    zh-TW (Chinese, Traditional, Taiwan)
    zh-HK (Chinese, Traditional, Hong Kong)

**Japanese**

    ja-JP (Japanese, Japan)

**Korean**

    ko-KR (Korean, South Korea)

**Russian**

    ru-RU (Russian, Russia)
    ru-UA (Russian, Ukraine)


**Other**

    pl-PL (Polish, Poland)
    nl-NL (Dutch, Netherlands)
    sv-SE (Swedish, Sweden)
    tr-TR (Turkish, Turkey)

## Timezones (IANA Timezone Database) 🌍

**Asia**

    Asia/Kolkata (India Standard Time, India)
    Asia/Tokyo (Japan Standard Time, Japan)
    Asia/Shanghai (China Standard Time, China)
    Asia/Dubai (Gulf Standard Time, UAE)
    Asia/Singapore (Singapore Time, Singapore)
    Asia/Seoul (Korea Standard Time, South Korea)

**Africa**

    Africa/Abidjan (Ivory Coast)
    Africa/Cairo (Egypt)
    Africa/Johannesburg (South Africa)
    Africa/Nairobi (Kenya)
    Africa/Lagos (Nigeria)

**America**

    America/New_York (Eastern Standard Time, USA)
    America/Chicago (Central Standard Time, USA)
    America/Los_Angeles (Pacific Standard Time, USA)
    America/Argentina/Buenos_Aires (Argentina)
    America/Sao_Paulo (Brazil)
    America/Toronto (Canada)


**Australia**

    Australia/Sydney (Australian Eastern Standard Time)
    Australia/Melbourne (Australian Eastern Standard Time)
    Australia/Perth (Australian Western Standard Time)
**Europe**

    Europe/London (Greenwich Mean Time, UK)
    Europe/Paris (Central European Time, France)
    Europe/Berlin (Central European Time, Germany)
    Europe/Madrid (Central European Time, Spain)
    Europe/Amsterdam (Central European Time, Netherlands)
    Europe/Moscow (Moscow Standard Time, Russia)

**Pacific**

    Pacific/Auckland (New Zealand Standard Time, New Zealand)
    Pacific/Fiji (Fiji Standard Time, Fiji)
    Pacific/Honolulu (Hawaii-Aleutian Standard Time, USA)
    Pacific/Tongatapu (Tonga Time, Tonga)


## Example Outputs 📊

Here are a few examples of how the function formats the UTC date string:

1. **Pattern Type: `date-slash`**
   ```javascript
   utcToLocalTimezone("2025-05-11T12:00:00Z", { patternType: "date-slash", locale: "en-US", timezone: "Asia/Kolkata" });
   // Output: "11/05/2025"
   ```

2. **Pattern Type: `datetime-12h-text`**
   ```javascript
   utcToLocalTimezone("2025-05-11T12:00:00Z", { patternType: "datetime-12h-text", locale: "en-US", timezone: "Asia/Kolkata" });
   // Output: "May 11, 2025, 5:30 PM"
   ```

3. **Pattern Type: `datetime-24h-slash`**
   ```javascript
   utcToLocalTimezone("2025-05-11T12:00:00Z", { patternType: "datetime-24h-slash", locale: "fr-FR", timezone: "Europe/Paris" });
   // Output: "11/05/2025, 17:30"
   ```

## Contributing 🤝

If you'd like to contribute, feel free to open an issue or a pull request. Your contributions are always welcome!

## License ⚖️

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
