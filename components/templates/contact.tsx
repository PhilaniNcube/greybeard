


import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Text,
} from "@react-email/components";
import type * as React from "react";

export interface ContactProps {
  readonly full_name: string;
  readonly email: string;
  readonly contact_number: string;
  readonly subject: string;
  readonly message: string;
}


export const Contact: React.FC<ContactProps> = ({
	full_name,
	email,
	message,
	contact_number,
	subject,
}) => (
	<Html>
		<Head>
			<title>Contact</title>
		</Head>
		<Body>
			<Container
				style={{
					fontFamily:
						"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
					padding: "2rem",
					margin: "0 auto",
					maxWidth: "800px",
				}}
			>
				<Heading
					style={{
						fontSize: "2.5rem",
					}}
				>
					Hi there!
				</Heading>
				<Text>
					You have a new message from {full_name}, ({email}), ({contact_number}
					):
				</Text>

				<Heading
					style={{
						fontSize: "1rem",
					}}
				>
					{subject}
				</Heading>
				<Preview>Message: {message}</Preview>
				<Text>Message: {message}</Text>
			</Container>
		</Body>
	</Html>
);
