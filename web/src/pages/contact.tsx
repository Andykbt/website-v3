import { Contact } from '@website-v3/web/src/components/contact';
import { ContactPageWrapper } from '@website-v3/web/src/components/contact/contact-styled';
import { H1, fontSizeExtraLarge } from '@website-v3/web/styles';
import Head from 'next/head';
import React from 'react';

type Props = {
    emailID: string;
    templateID: string;
    userID: string;
};

const ContactPage = ({ emailID, templateID, userID }: Props) => {
    return (
        <ContactPageWrapper>
            <Head>
                <title>Contact | Andy Truong</title>
            </Head>
            <H1
                fontSize={fontSizeExtraLarge}
                margin="auto"
                style={{
                    width: 'fit-content',
                    padding: '10vh 0',
                }}
            >
                {"LET'S TALK"}
            </H1>
            <Contact
                emailID={emailID}
                templateID={templateID}
                userID={userID}
            />
        </ContactPageWrapper>
    );
};

export async function getServerSideProps() {
    const emailID = process.env.EMAIL_SERVICE_ID;
    const templateID = process.env.EMAIL_TEMPLATE_ID;
    const userID = process.env.EMAIL_USER_ID;

    return {
        props: {
            emailID,
            templateID,
            userID,
        },
    };
}

export default ContactPage;
