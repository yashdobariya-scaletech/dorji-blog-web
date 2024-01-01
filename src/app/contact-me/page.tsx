'use client';
import { API_CONFIG, HttpService } from '@/services/http.service';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactMe = () => {
    const [userRegistration, setUserRegistration] = useState<UserRegistration>({
        username: '',
        email: '',
        website: '',
        comment: ''
    } as UserRegistration);
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailInvalidError, setEmailInvalidError] = useState(false);
    const [commentError, setCommentError] = useState(false);

    const userInputData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;
        const userValue = event.target.value;

        setUserRegistration({ ...userRegistration, [name]: userValue });
        if (name === 'username') {
            setUsernameError(false);
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
        console.log(name, userValue);
    };
    function isValidEmail(email: string) {
        // Regular expression for email validation
        const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
        return emailRegex.test(email);
    }

    const userSubmitData = (event: any) => {
        event.preventDefault(); // Prevent default form submission

        // Validate input fields here
        if (!userRegistration.username && !userRegistration.email && !userRegistration.comment) {
            setUsernameError(true);
            setEmailError(true);
            setCommentError(true);

            // toast.error("Please fill in all required fields.");
            return;
        } else if (!userRegistration.username) {
            setUsernameError(true);
            // toast.error("Please fill required field")
        } else if (!userRegistration.comment) {
            setCommentError(true);
            // toast.error("Please fill required field")
        }
        // else if (!userRegistration.email) {
        //     setEmailError(true);
        //     // toast.error("Please fill required field")
        // }
        else if (!isValidEmail(userRegistration.email)) {
            setEmailError(true);
            // toast.error("Please enter a valid email address.");
            return;
        } else {
            const payload = {
                data: {
                    name: userRegistration.username,
                    email: userRegistration.email,
                    website: userRegistration.website,
                    comment: userRegistration.comment
                }
            };
            HttpService.post(API_CONFIG.path.contactMes, payload)
                .then(() => {
                    toast.success('Successfully submit');
                    setUserRegistration({
                        username: '',
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
            <h1 className="contact-title font-size-45">Contact Me</h1>
            <div className="contact-form pt-40 d-flex flex-direction--column justify-content--center align-items-center">
                <div className="input-name-wrapper d-flex flex-direction--column position--relative">
                    <input
                        placeholder=" "
                        name="username"
                        type="text"
                        className="input-name"
                        onChange={userInputData}
                        value={userRegistration.username}
                        id="username"
                    />
                    <label className="placeholder position--absolute top--7 left--16" htmlFor="username">
                        Name
                    </label>
                </div>
                {usernameError && <p className="error-message">Please fill required field</p>}
                <div className="input-email-wrapper d-flex flex-direction--column position--relative">
                    <input
                        placeholder=" "
                        name="email"
                        type="email"
                        className="input-email"
                        onChange={userInputData}
                        value={userRegistration.email}
                        id="email"
                    />
                    <label className="placeholder position--absolute top--7 left--16" htmlFor="email">
                        Email
                    </label>
                </div>
                {emailError && <p className="error-message">Please fill required field</p>}
                {emailInvalidError && <p className="error-message">Please enter a valid email address.</p>}
                <div className="input-website-wrapper d-flex flex-direction--column position--relative">
                    <input
                        placeholder=" "
                        name="website"
                        type="url"
                        className="input-website"
                        onChange={userInputData}
                        value={userRegistration.website}
                        id="website"
                    />
                    <label className="placeholder position--absolute top--7 left--16" htmlFor="website">
                        Website
                    </label>
                </div>
                <div className="comment-wrapper d-flex flex-direction--column position--relative">
                    <textarea
                        placeholder=" "
                        name="comment"
                        className="input-comment"
                        onChange={userInputData}
                        value={userRegistration.comment}
                        id="comment"
                        rows={10}
                        cols={100}
                    ></textarea>
                    <label className="placeholder position--absolute top--7 left--16" htmlFor="comment">
                        Comment
                    </label>
                </div>
                {commentError && <p className="error-message">Please fill required field</p>}
                <div className="submit-wrapper d-flex justify-content--center align-items-center">
                    <button type="submit" className="submit-btn font-weight--500 font-size-18" onClick={userSubmitData}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
