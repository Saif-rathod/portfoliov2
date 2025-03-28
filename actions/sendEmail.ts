"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic email validation
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Enhanced validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Please provide your email address",
    };
  }

  if (!isValidEmail(senderEmail as string)) {
    return {
      error: "Please provide a valid email address",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Please provide a message",
    };
  }

  if ((message as string).length < 10) {
    return {
      error: "Message must be at least 10 characters long",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Saif's Portfolio <onboarding@resend.dev>",
      to: "saifr1497@gmail.com",
      subject: `New Message from: ${senderEmail}`,
      replyTo: senderEmail as string,
      text: `From: ${senderEmail}\n\nMessage:\n${message}`, // Plain text fallback
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
