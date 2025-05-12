
# 🌍 utc-to-local-timezone

A lightweight, zero-dependency JavaScript package to convert a UTC date string to a local timezone format with customizable date/time patterns. Whether you need to display dates in a specific timezone, support multilingual locales like Hindi with native numerals and AM/PM translations, or format time in 12h/24h — this package’s got you covered!

---

## ✨ Features

- 🔁 Convert UTC time to local time based on a specified timezone
- 🕒 Customizable date and time formats (12h/24h, slashes, or text)
- 🌐 Wide range of locales supported — including `hi-IN` (Hindi)
- 🔡 Hindi output with native digits like `११ अगस्त, २०२५, ५:३० अपराह्न`
- 📦 Both CommonJS (`require`) and ES Module (`import`) compatible
- 🪶 Clean, lightweight, and no external dependencies

---

## 📦 Installation

```bash
npm install utc-to-local-timezone
```

---

## 📥 Import Instructions

### CommonJS (Node.js)

```js
const utcToLocalTimezone = require('utc-to-local-timezone');
```

### ES Module

```js
import utcToLocalTimezone from 'utc-to-local-timezone';
```

✅ Both formats are fully supported.

---

## 📑 Usage

### Function: `utcToLocalTimezone`

Converts a UTC date string to local time according to your locale, timezone, and preferred pattern.

### Parameters

| Parameter      | Type     | Description                                                                 | Default                       |
|----------------|----------|-----------------------------------------------------------------------------|-------------------------------|
| `utcDateString`| `string` | The UTC date string to convert (optional — uses current UTC time if omitted) | `new Date().toISOString()`   |
| `optionsData`  | `object` | Options to customize the output format                                      | `{}`                          |

### `optionsData` keys:

- `locale` (`string`) — Locale to use *(default: `"en-US"`)*  
- `timezone` (`string`) — Timezone to convert into *(default: `"Asia/Kolkata"`)*  
- `patternType` (`string`) — Date-Time pattern format *(default: `"datetime-12h-text"`)*  

---

## 🔧 Example Usage

### 1️⃣ Basic Usage (Current Time, Default Locale & Timezone)

```js
console.log(utcToLocalTimezone());
// Example Output (Asia/Kolkata): "May 11, 2025, 5:30 PM"
```

---

### 2️⃣ Specific UTC Date, Custom Format & Locale

```js
const utcDate = "2025-05-11T12:00:00Z";
const options = {
  locale: "hi-IN",
  timezone: "Asia/Kolkata",
  patternType: "datetime-12h-text"
};

console.log(utcToLocalTimezone(utcDate, options));
// Output: "११ मई, २०२५, ५:३० अपराह्न"
```

---

### 3️⃣ 24-hour Format Example

```js
console.log(utcToLocalTimezone("2025-05-11T12:00:00Z", {
  locale: "en-US",
  timezone: "Asia/Kolkata",
  patternType: "datetime-24h-text"
}));
// Output: "May 11, 2025, 17:30"
```

---

## 📊 Example Outputs

| Locale  | Pattern             | Output                            |
|---------|---------------------|-----------------------------------|
| en-US   | datetime-12h-text   | August 11, 2025, 5:30 PM          |
| en-US   | datetime-24h-text   | August 11, 2025, 17:30            |
| hi-IN   | datetime-12h-text   | ११ अगस्त, २०२५, ५:३० अपराह्न     |

---
## Available Pattern Types

| Pattern  Type      | Output            |
|--------- |---------------------|
| date-slash   | 11/05/2025   |
| date-text   | August 11, 2025   |
| datetime-12h-slash   | 11/05/2025, 5:30 PM   |
|datetime-12h-text |    August 11, 2025, 5:30 PM |
|datetime-24h-slash	|   11/05/2025, 17:30 |
|datetime-24h-text	|   August 11, 2025, 17:30 |



---
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

---

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


---

## 🤝 Contributing

Found a bug, or want to add a new pattern?  
Feel free to open an issue or PR — **contributions welcome!** 🚀

---

## 📄 License

MIT License — see the [LICENSE](./LICENSE) file for details.
