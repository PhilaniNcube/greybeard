"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendEmail } from "@/lib/contact-action";
import { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { sendGTMEvent } from '@next/third-parties/google'

export default function ContactForm() {

  const [pending, startTransition] = useTransition();
  const {toast} = useToast();

	return (
		<div className="w-full px-4 py-8 md:py-16">
			<div className="container grid max-w-sm gap-4 px-4 text-white justify-items-center">
				<div className="flex flex-col items-center space-y-4">
					<div className="space-y-2 text-center">
						<h1 className="text-3xl font-bold">Contact Us</h1>
						<p className="text-gray-50 ">
							Fill out the form below and we&apos;ll get back to you as soon as
							possible.
						</p>
					</div>
					<form
						action={(formData: FormData) => {
              startTransition(async () => {
                sendGTMEvent({ event: 'generate_lead' })
              const res =  await sendEmail(formData);
                toast({title: "Message sent", description: "We will get back to you soon", color: "#ffffff", style:{color:'white'}}, );
              });
						}}
						className="w-full space-y-4"
					>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="full_name">Full Name</Label>
								<Input
									name="full_name"
									placeholder="Enter your full name"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									name="email"
									placeholder="Enter your email"
									required
									type="email"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="contact_number">Contact Number</Label>
							<Input name="contact_number" placeholder="Enter your number" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="subject">Subject</Label>
							<Input name="subject" placeholder="Enter the subject" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								className="min-h-[100px]"
								name="message"
								placeholder="Enter your message"
								required
							/>
						</div>
						<Button className="w-full bg-white text-slate-800 hover:bg-slate-200" type="submit">
							{pending ? "Sending..." : "Send"}
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
