import { Header } from '@website-v3/web/src/components';
import { Mouse } from '@website-v3/web/src/components/mouse';
import { Progress } from '@website-v3/web/src/components/progress';
import { Url } from '@website-v3/web/src/constants/types';
import '@website-v3/web/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';

const navItems: Url[] = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Work',
        url: '/projects',
    },
    // {
    //   name: "Blog",
    //   url: "/blog",
    // },
    {
        name: 'Resume',
        url: '/resume',
    },
    {
        name: 'Contact',
        url: '/contact',
    },
];

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Progress />
            <Mouse />
            <Header navItems={navItems} />
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

export default MyApp;
