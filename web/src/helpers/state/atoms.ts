import { atom } from 'recoil';

export const showMenuState = atom({
    key: 'showMenu',
    default: false as boolean,
});

export const mouseColorState = atom({
    key: 'mouseColor',
    default: '' as string,
});

export const mouseState = atom({
    key: 'mouseState',
    default: 'default' as 'default' | 'inspect' | 'hidden',
});
