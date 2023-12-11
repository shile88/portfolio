import {
	FormButton,
	FormColumn,
	FormInput,
	FormInputRow,
	FormLabel,
	FormMessage,
	FormRow,
	FormSection,
	FormTitle,
	FormWrapper,
	ContactsWrapper
} from './MyFormStyles';
import { TextWrapper } from '../../globalStyles';
import React, { useState } from 'react';

import { Container } from '../../globalStyles';
import {send} from 'emailjs-com';
import validateMyForm from './validateMyForm';

const MyForm = () => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateMyForm({ userName, email, subject, message });

		if (resultError !== null) {
			setError(resultError);
			setSuccess('');
			return;
		}

		send('service_gibjh7u', 'template_r1oi7jl', {userName, email, subject, message}, 'tJ5RCuW1nLPZF3JO9')
		.then((result) => {
			setSuccess('Message was submitted!');
		}, (error) => {
			setError('Something went wrong!');
		});

		setUserName('');
		setEmail('');
		setSubject('');
		setMessage('');
		setError(null);
	};
		

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Name', value: userName, onChange: (e) => setUserName(e.target.value), type: 'text', name: 'user_name' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email', name: 'reply_to' },
		{
			label: 'Subject',
			value: subject,
			onChange: (e) => setSubject(e.target.value),
			type: 'text',
			name: 'subject'
		},
		{
			label: 'Message',
			value: message,
			onChange: (e) => setMessage(e.target.value),
			type: 'textarea',
			name: 'message'
		},
	];
	return (
		<FormSection>
			<ContactsWrapper>
				<TextWrapper mb="1.4rem"
						weight="500"
						size="1.5rem"
						color="white"
						align="center"><span>Email:</span> milos.ivanis@gmail.com 
				</TextWrapper>
				<TextWrapper mb="1.4rem"
						weight="500"
						size="1.5rem"
						color="white"
						align="center"><span>Phone:</span> +382/69-895-795
				</TextWrapper>
			</ContactsWrapper>
		
			<Container>			
				<FormRow>				
					<FormColumn small>					
						<FormTitle>Contact me</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
										name={el.name}
									/>
								</FormInputRow>
							))}
							<FormButton type="submit">Send message</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
		
	);
};

export default MyForm;