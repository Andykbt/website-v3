import { atom } from 'recoil';

export const showMenuState = atom({
    key: 'showMenu',
    default: false as boolean,
});

export const mouseImageState = atom({
    key: 'mouseImage',
    default: '' as string,
});

export const mouseColorState = atom({
    key: 'mouseColor',
    default: '' as string,
});

export const mouseState = atom({
    key: 'mouseState',
    default: 'default' as 'default' | 'image' | 'inspect' | 'hidden',
});
