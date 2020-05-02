# @vuejs-community/vue-filter-date-parse
Simple date parsing filter for Vue.js

## Installation

install from npm
```bash
$ npm install @vuejs-community/vue-filter-date-parse
```
and register in you Vue app
```js
import Vue from 'vue';
import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';

Vue.use(VueFilterDateParse);
```

## Usage

Using with [dateFormat filter](https://github.com/vuejs-community/vue-filter-date-format):

```html
<template>
  <div>{{ '10.10.1989' | dateParse('DD.MM.YYYY') | dateFormat('YYYY-MM-DD') }}</div>
</template>
```

or

```html
<template>
  <div>{{ '10.10.89' | dateParse('DD.MM.YY', { epoch: 1900 }) | dateFormat('YYYY-MM-DD') }}</div>
</template>
```

render as:

```html
<div>1989-10-10</div>
```

## Format Options

|            | Key    | Input                   |
| ---------- | ------ | ----------------------- |
| **Year**   | `YYYY` | 2000 2001 ... 2029 2030 |
|            | `YY`   | 00 01 ... 29 30         |
| **Month**  | `MM`   | 01 02 ... 11 12         |
| **Day**    | `DD`   | 01 02 ... 30 31         |
| **Hour**   | `HH`   | 00 01 ... 22 23         |
| **Minute** | `mm`   | 00 01 ... 58 59         |
| **Second** | `ss`   | 00 01 ... 58 59         |

Default format is `YYYY.MM.DD HH:mm:ss`

## License

MIT © [Vue.js Community](https://github.com/vuejs-community)
