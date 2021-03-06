---
id: intl-numberformat
title: Intl.NumberFormat (ES2020)
---

A ponyfill/polyfill for [`intl-numberformat`](https://github.com/tc39/proposal-intl-numberformat).

[![npm Version](https://img.shields.io/npm/v/@formatjs/intl-numberformat.svg?style=flat-square)](https://www.npmjs.org/package/@formatjs/intl-numberformat)
![size](https://badgen.net/bundlephobia/minzip/@formatjs/intl-numberformat)

## Installation

```
npm install @formatjs/intl-numberformat
```

## Requirements

This package requires the following capabilities:

1. [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules)

2. If you're supporting IE11-, this requires [`Intl.getCanonicalLocales`](intl-getcanonicallocales.md).

# Features

Everything in the https://github.com/tc39/proposal-intl-numberformat proposal with the caveats below.

## Caveats

1. `compact` notation is currently buggy in certain locales with special compact rules (such as `zh-Hant` or `Somali`) See https://github.com/tc39/proposal-intl-numberformat/issues/26 for more details.

# Usage

To use the ponyfill, import it along with its data:

```tsx
import {UnifiedNumberFormat} from '@formatjs/intl-numberformat';
UnifiedNumberFormat.__addLocaleData(
  require('@formatjs/intl-numberformat/dist/locale-data/zh.json') // locale-data for zh
);
UnifiedNumberFormat.__addLocaleData(
  require('@formatjs/intl-numberformat/dist/locale-data/en.json') // locale-data for en
);

new UnifiedNumberFormat('zh', {
  style: 'unit',
  unit: 'bit',
  unitDisplay: 'long',
}).format(1000); // 1,000比特
```

To use this as a polyfill, override `Intl.NumberFormat` as below:

```tsx
import '@formatjs/intl-numberformat/polyfill';
if (typeof Intl.NumberFormat.__addLocaleData === 'function') {
  Intl.NumberFormat.__addLocaleData(
    require('@formatjs/intl-numberformat/dist/locale-data/zh.json') // locale-data for zh
  );
  Intl.NumberFormat.__addLocaleData(
    require('@formatjs/intl-numberformat/dist/locale-data/en.json') // locale-data for en
  );
}

new Intl.NumberFormat('zh', {
  style: 'unit',
  unit: 'bit',
  unitDisplay: 'long',
}).format(1000); // 1,000比特

new Intl.NumberFormat('en-US', {
  notation: 'engineering',
}).format(987654321); // 987.7E6

new Intl.NumberFormat('zh', {
  style: 'currency',
  currency: 'EUR',
  currencySign: 'accounting',
}).format(-100); // (€100.00)
```

## Supported Units

Currently [intl-numberformat](https://tc39.es/proposal-intl-numberformat/section6/locales-currencies-tz_diff_out.html#sec-issanctionedsimpleunitidentifier) has a list of sanctioned units as below

```tsx
type Unit =
  | 'acre'
  | 'bit'
  | 'byte'
  | 'celsius'
  | 'centimeter'
  | 'day'
  | 'degree'
  | 'fahrenheit'
  | 'fluid-ounce'
  | 'foot'
  | 'gallon'
  | 'gigabit'
  | 'gigabyte'
  | 'gram'
  | 'hectare'
  | 'hour'
  | 'inch'
  | 'kilobit'
  | 'kilobyte'
  | 'kilogram'
  | 'kilometer'
  | 'liter'
  | 'megabit'
  | 'megabyte'
  | 'meter'
  | 'mile'
  | 'mile-scandinavian'
  | 'millimeter'
  | 'milliliter'
  | 'millisecond'
  | 'minute'
  | 'month'
  | 'ounce'
  | 'percent'
  | 'petabyte'
  | 'pound'
  | 'second'
  | 'stone'
  | 'terabit'
  | 'terabyte'
  | 'week'
  | 'yard'
  | 'year';
```
