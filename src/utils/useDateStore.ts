import { createChromeStorageStateHookSync } from "use-chrome-storage";

const DATE_KEY = 'lastDateLocal';
const INITIAL_VALUE = '';

export const useDateStore = createChromeStorageStateHookSync(DATE_KEY, INITIAL_VALUE);