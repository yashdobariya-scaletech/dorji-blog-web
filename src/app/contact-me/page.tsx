const ContactMe = () => {
    return (
        <div className="contact-wrapper mt-165 pb-40 container">
            <h1 className="contact-title font-size-45">Contact Me</h1>
            <div className="contact-form pt-40 d-flex flex-direction--column justify-content--center align-items-center" >

                <div className="input-name-wrapper d-flex flex-direction--column position--relative">
                    <input placeholder=" " type="text" className="input-name" id="name" />
                    <label className="placeholder position--absolute top--7 left--16" htmlFor="name">
                        Name
                    </label>
                </div>
                <div className="input-email-wrapper d-flex flex-direction--column position--relative">
                    <input placeholder=" " type="email" className="input-email" id="email" />
                    <label className="placeholder position--absolute top--7 left--16" htmlFor="email">
                        Email
                    </label>
                </div>
                <div className="input-website-wrapper d-flex flex-direction--column position--relative">
                    <input placeholder=" " type="url" className="input-website" id="website" />
                    <label className="placeholder position--absolute top--7 left--16" htmlFor="website">
                        Website
                    </label>
                </div>
                <div className="comment-wrapper d-flex flex-direction--column position--relative">
                    <textarea placeholder=" " className="input-comment" id="comment" rows={10} ></textarea>
                    <label className="placeholder position--absolute top--7 left--16" htmlFor="comment">Comment</label>
                </div>
                <div className="submit-wrapper d-flex justify-content--center align-items-center">
                    <button type="submit" className="submit-btn font-weight--500 font-size-18" >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactMe