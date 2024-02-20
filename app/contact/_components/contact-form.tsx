/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ASOLGIZI5yo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
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
					<form className="w-full space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="full-name">Full Name</Label>
								<Input
									name="full-name"
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
							<Label htmlFor="contact-number">Contact Number</Label>
							<Input name="contact-number" placeholder="Enter your number" />
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
						<Button className="w-full bg-white text-slate-800" type="submit">Submit</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

