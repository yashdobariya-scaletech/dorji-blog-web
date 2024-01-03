'use client';
import { API_CONFIG, HttpService } from '@/services/http.service';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactMe = () => {
	const [userRegistration, setUserRegistration] = useState<UserRegistration>({
		firstName: '',
		lastName: '',
		email: '',
		website: '',
		comment: ''
	} as UserRegistration);

	const [firstNameError, setFirstNameError] = useState(false);
	const [lastNameError, setLastNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [emailInvalidError, setEmailInvalidError] = useState(false);
	const [commentError, setCommentError] = useState(false);

	const userInputData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const name = event.target.name;
		const userValue = event.target.value;

		setUserRegistration({ ...userRegistration, [name]: userValue });
		if (name === 'firstName') {
			setFirstNameError(false);
		} else if (name === 'lastName') {
			setLastNameError(false);
		} else if (name === 'email') {
			setEmailError(false); // Reset required field error
			setEmailInvalidError(false); // Reset invalid format error

			if (userValue !== '') {
				// Only check for validity if not empty
				if (!isValidEmail(userValue)) {
					setEmailInvalidError(true);
				}
			}
		} else if (name === 'comment') {
			setCommentError(false);
		}
	};

	function isValidEmail(email: string) {
		// Regular expression for email validation
		const emailRegex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegex.test(email);
	}

	const userSubmitData = (event: any) => {
		event.preventDefault();

		// Validate input fields here
		if (!userRegistration.firstName && !userRegistration.lastName && !userRegistration.email && !userRegistration.comment) {
			setFirstNameError(true);
			setEmailError(true);
			setLastNameError(true);
			setCommentError(true);
			return;
		} else if (!userRegistration.firstName) {
			setFirstNameError(true);
		} else if (!userRegistration.lastName) {
			setLastNameError(true);
		} else if (!isValidEmail(userRegistration.email)) {
			setEmailError(true);
			return;
		} else if (!userRegistration.comment) {
			setCommentError(true);
		} else {
			const payload = {
				data: {
					firstName: userRegistration.firstName,
					lastName: userRegistration.firstName,
					email: userRegistration.email,
					website: userRegistration.website,
					comment: userRegistration.comment
				}
			};
			HttpService.post(API_CONFIG.path.contactMes, payload)
				.then(() => {
					toast.success('Successfully submit');
					setUserRegistration({
						firstName: '',
						lastName: '',
						email: '',
						website: '',
						comment: ''
					});
				})
				.catch((e) => {
					toast.error(e.response.data.error.name);
				});
		}
	};

	return (
		<div className="contact-wrapper mt-165 pb-40 container">
			<h1 className="contact-title font-size-50 font-weight--600 mb-40">Get in touch with me</h1>
			<div className="contact-form d-flex flex-direction--column justify-content--center align-items-center">
				<div className="name-wrapper d-flex">
					<div className="firstName-wrapper d-flex flex-direction--column position--relative">
						<label className="placeholder" htmlFor="firstName">
							First Name <span>*</span>
						</label>
						<input
							placeholder="Your name"
							name="firstName"
							type="text"
							className="input-name"
							onChange={userInputData}
							value={userRegistration.firstName}
							id="firstName"
						/>
						{firstNameError && <p className="error-message">Please fill required field</p>}
					</div>
					<div className="lastName-wrapper d-flex flex-direction--column position--relative">
						<label className="placeholder" htmlFor="lastName">
							Last Name <span>*</span>
						</label>
						<input
							placeholder="Your surname"
							name="lastName"
							type="text"
							className="input-name"
							onChange={userInputData}
							value={userRegistration.lastName}
							id="lastName"
						/>
						{lastNameError && <p className="error-message">Please fill required field</p>}
					</div>
				</div>
				<div className="contact-email-wrapper d-flex">
					<div className="email-wrapper d-flex flex-direction--column position--relative">
						<label className="placeholder" htmlFor="email">
							Email <span>*</span>
						</label>
						<input
							placeholder="Your email"
							name="email"
							type="email"
							className="input-email"
							onChange={userInputData}
							value={userRegistration.email}
							id="email"
						/>
						{emailError && <p className="error-message">Please fill required field</p>}
						{emailInvalidError && <p className="error-message">Please enter a valid email address.</p>}
					</div>
					<div className="input-website-wrapper d-flex flex-direction--column position--relative">
						<label className="placeholder" htmlFor="website">
							Contact No.
						</label>
						<input
							placeholder="Your contact number"
							name="website"
							type="number"
							className="input-website"
							onChange={userInputData}
							value={userRegistration.website}
							id="website"
						/>
					</div>
				</div>

				<div className="comment-wrapper d-flex flex-direction--column position--relative">
					<label className="placeholder" htmlFor="comment">
						Share your thoughts <span>*</span>
					</label>
					<textarea
						placeholder="Message"
						name="comment"
						className="input-comment"
						onChange={userInputData}
						value={userRegistration.comment}
						id="comment"
						rows={7}
						cols={100}
					></textarea>
					{commentError && <p className="error-message">Please fill required field</p>}
				</div>
				<div className="submit-wrapper d-flex justify-content--center align-items-center">
					<button type="submit" className="submit-btn font-weight--600 font-size-16" onClick={userSubmitData}>
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
