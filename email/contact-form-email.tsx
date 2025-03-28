import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                New Message from Your Portfolio
              </Heading>
              <Text className="text-lg font-medium text-gray-900">
                Sender: {senderEmail}
              </Text>
              <Hr />
              <Text className="font-bold text-xl mb-0">Message:</Text>
              <Text className="text-gray-700 text-base">{message}</Text>
              <Hr />
              <Text className="text-sm text-gray-500">
                This message was sent from your portfolio contact form. 
                You can reply directly to this email to respond to {senderEmail}.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
