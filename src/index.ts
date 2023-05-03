type VueConstructor = {
  filter(id: string, definition?: Function): Function;
};

const parse = (input: string, format: string, key: string): string => {
  const index = format.indexOf(key);

  return input.slice(index, index + key.length);
};

export const dateParse = (input: string, format: string = 'YYYY-MM-DD HH.mm.ss', { epoch = 2000 } = {}): Date => {
  let year = epoch;
  if (format.includes('YYYY')) {
    year = parseInt(parse(input, format, 'YYYY'), 10);
  } else if (format.includes('YY')) {
    year = parseInt(parse(input, format, 'YY'), 10) + epoch;
  }

  let month = 0;
  if (format.includes('MM')) {
    month = parseInt(parse(input, format, 'MM'), 10) - 1;
  }

  let date = 1;
  if (format.includes('DD')) {
    date = parseInt(parse(input, format, 'DD'), 10);
  }

  let hours = 0;
  if (format.includes('HH')) {
    hours = parseInt(parse(input, format, 'HH'), 10);
  }

  let minutes = 0;
  if (format.includes('mm')) {
    minutes = parseInt(parse(input, format, 'mm'), 10);
  }

  let seconds = 0;
  if (format.includes('ss')) {
    seconds = parseInt(parse(input, format, 'ss'), 10);
  }

  return new Date(year, month, date, hours, minutes, seconds);
};

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('dateParse', dateParse);
  }
};
