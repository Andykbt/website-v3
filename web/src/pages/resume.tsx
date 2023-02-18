import {
    EmbedWrapper,
    ResumePageWrapped,
} from '@website-v3/web/src/components/resume';
import { H1, fontSizeExtraLarge } from '@website-v3/web/styles';
import Head from 'next/head';
import React from 'react';

const ResumePage = () => {
    return (
        <ResumePageWrapped>
            <Head>
                <title>Resume | Andy Truong</title>
            </Head>
            <H1
                fontSize={fontSizeExtraLarge}
                margin="auto"
                style={{
                    width: 'fit-content',
                    padding: '10vh 0',
                }}
            >
                {'RESUME'}
            </H1>

            <EmbedWrapper>
                <iframe
                    loading="lazy"
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEsnihtxUg&#x2F;view?embed"
                    allowFullScreen={true}
                    allow="fullscreen"
                ></iframe>
            </EmbedWrapper>
        </ResumePageWrapped>
    );
};

export default ResumePage;
