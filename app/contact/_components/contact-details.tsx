import { agrandir } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Mail, MailIcon, MapIcon, PhoneIcon, PinIcon, SmartphoneIcon, Twitter, X } from "lucide-react";
import Link from "next/link";
import ContactForm from "./contact-form";

const ContactDetails = () => {
  return (
			<section>
				<div className="flex flex-col-reverse lg:flex-row ">
					<div className="flex flex-col w-full py-20 pl-20 text-white lg:py-36 lg:pl-32 lg:w-1/3">
						<p className="mb-10 text-2xl tracking-wider">Say Hello...</p>
						<Link
							href="mailto:info@greybeardpro.co.za"
							className="flex items-center mb-10 tracking-wider text-md gap-x-3"
							prefetch={false}
						>
							<Mail className="w-6 h-6" />
							info@greybeardpro.co.za
						</Link>
						<Link
							href="tel:+27714167448"
							className="flex items-center mb-10 tracking-wider text-md gap-x-3"
							prefetch={false}
						>
							<PhoneIcon className="w-6 h-6" />
							+27 71 416 7448
						</Link>
						<Link
							href="https://wa.me/27714167448"
							className="flex items-center mb-10 tracking-wider text-md gap-x-3"
							prefetch={false}
						>
							<SmartphoneIcon className="w-6 h-6" />
							Whatsapp
						</Link>
						<div className="flex items-start mb-10 tracking-wider text-md gap-x-3">
							<MapIcon className="w-6 h-6" />
							<p className="mb-10 tracking-wider text-md">
								4 Antrim Road <br />
								Bryanston <br />
								Johannesburg <br />
								2191
							</p>
						</div>

						<div className="flex items-center gap-x-3">
							<Link
								href="https://www.facebook.com/greybeardpro?mibextid=LQQJ4d"
								target="_blank"
							>
								<Facebook className="w-12 h-12" />
							</Link>
							<Link
								href="https://www.instagram.com/greybeardpro?igsh=ZXU0ZXhsbGd6Y3lj"
								target="_blank"
							>
								<Instagram className="w-12 h-12" />
							</Link>
							<Link href="https://x.com/greybeardpro?s=21&t=afPEKhqCeZDCcv33o4S7Vw" target="_blank">
								<svg
									xlinkTitle="Twitter"
									className="w-12 h-12"
									fill="none"
									height="2500"
									width="2500"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<title>Twitter</title>
									<path d="M0 0h512v512H0z" fill="#000" />
									<path
										clip-rule="evenodd"
										d="M192.034 98H83l129.275 170.757L91.27 412h55.908l91.521-108.34 81.267 107.343H429L295.968 235.284l.236.303L410.746 99.994h-55.908l-85.062 100.694zm-48.849 29.905h33.944l191.686 253.193h-33.944z"
										fill="#fff"
										fill-rule="evenodd"
									/>
								</svg>
							</Link>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center flex-1 px-5 py-20 bg-gray-900 lg:py-36">
						<h1
							className={cn(
								"text-white font-extrabold text-5xl lg:text-[9rem] uppercase",
								agrandir.className,
							)}
						>
							Let&apos;s <br className="hidden lg:block" />
							<span className="lg:text-[12rem]">Get</span>
						</h1>

						<h2
							className={cn(
								"text-5xl font-extrabold text-white uppercase lg:text-7xl outline-text",
								agrandir.className,
							)}
						>
							In Touch
						</h2>
						<ContactForm />
					</div>
				</div>
			</section>
		);
};
export default ContactDetails;
