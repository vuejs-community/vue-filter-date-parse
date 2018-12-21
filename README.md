# vue-filter-date-parse
Simple date parsing filter for Vue.js

## Installation

install from npm
```bash
$ npm install vue-filter-date-parse
```
and register in you Vue app
```js
import Vue from 'vue'
import VueFilterDateParse from 'vue-filter-date-parse'

Vue.use(VueFilterDateParse)
```

## Usage

Using with [dateFormat filter](https://github.com/eduardnikolenko/vue-filter-date-format):

```html
<template>
  <div>{{ '10.10.1989' | dateParse('DD.MM.YYYY') | dateFormat('YYYY.MM.DD') }}</div>
</template>
```

render as:

```html
<div>1989-10-10</div>
```

## License

MIT © [Eduard Nikolenko](https://github.com/eduardnikolenko)
