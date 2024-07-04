"use server";

import { Contact } from "@/components/templates/contact";
import { redirect } from "next/navigation";
import type React from "react";
import { Resend } from "resend";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function sendEmail(formData:FormData){


  const full_name = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const contact_number = formData.get("contact_number") as string;
  const subject = formData.get("subject") as string;

  console.log({full_name, email, message, contact_number, subject})

  if(!full_name || !email || !message || !contact_number || !subject){
    console.log("Missing required fields")
    throw new Error("Missing required fields")
  }


  try {

       const { data, error } = await resend.emails.send({
								from: "Greybeard <dev@greybeardpro.co.za>",
								to: ["info@greybeardpro.co.za", 'ncbphi001@gmail.com'],
								subject: `New message on website from ${full_name}`,
								react: Contact({
									full_name: full_name,
									email: email,
									message: message,
									contact_number: contact_number,
									subject: subject,
								}) as React.ReactElement,
							});

              console.log({data, error});

    if (error) {
      console.error(error);
    return error;

    }

              console.log(data);
            return data;

  } catch (error) {

    console.error(error);
    return error;


  }


}
