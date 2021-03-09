import { writable } from 'svelte/store';
import { setProp } from 'svelte-preprocess/dist/modules/utils';

const theme = {
  light: {
    one: '#02121a',
    two: '#2B394E',
    three: '#A9DEF9',
    four: '#616FF9',
    five: '#F2EDC5',
    washLight: '#EFEFEF',
    washRegular: '#6D6D6D',
    washHeavy: '#454545',
    background: '#fff',
  },
  dark: {},
};

function setVariables(isDarkMode: boolean) {
  const setProperty = document.documentElement.style.setProperty;

  if (!isDarkMode) {
    const color = theme.light;

    setProperty('--color-one', color.one);
    setProperty('--color-two', color.two);
    setProperty('--color-three', color.three);
    setProperty('--color-four', color.four);
    setProperty('--color-five', color.five);
    setProperty('--color-wash-light', color.washLight);
    setProperty('--color-wash-regular', color.washRegular);
    setProperty('--color-wash-heavy', color.washHeavy);
    setProperty('--color-background', color.background);
  }
}

function createDarkMode() {
  const { subscribe, update } = writable(false);

  subscribe((value) => setVariables(value));

  const toggle = () => {
    let currentValue;
    subscribe((value) => (currentValue = value));

    currentValue = !currentValue;
    setVariables(currentValue);

    update(currentValue);
  };

  return {
    subscribe,
    toggle,
  };
}

export const toggleDarkMode = createDarkMode();
