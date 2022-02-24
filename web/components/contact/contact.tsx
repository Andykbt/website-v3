import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, Loading } from "./contact-styled";
import { Button } from "..";
import { colourDarkGrey, colourLightBrown } from "../../styles";
import { PulseLoader } from "react-spinners";

type Props = {
  emailID: string,
  templateID: string,
  userID: string,
}

export const Contact = ({
  emailID,
  templateID,
  userID
}: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);


  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    emailjs.sendForm(emailID, templateID, formRef.current, userID)
      .then(() => {
        setLoading(false);
        setSuccess(true);
      }, (error) => {
        console.log(error.text());
      });
  };

  return (
    <Form ref={formRef} onSubmit={sendMail}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        required
      />

      <Input
        type="text"
        name="email"
        placeholder="Email"
        required
      />
      
      <Input
        type="text"
        name="name"
        placeholder="Message"
        required
      />

      {loading ? (
        <Loading>
          <PulseLoader color={colourLightBrown} loading={true} size={10} speedMultiplier={0.5} />
        </Loading>
      ) : (
        <Button
          label={isSuccess ? "MESSAGE SENT" : "SEND MESSAGE"}
          disabled={isSuccess}
          background={colourDarkGrey}
        />
      )}
    </Form>
  );
};