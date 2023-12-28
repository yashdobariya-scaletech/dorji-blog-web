const ContactMe = () => {
    return (
        <>
            <div className="contact-wrapper mt-165 pb-40 container">
                <h1 className="contact-title font-size-45">Contact Me</h1>
                <div className="contact-form d-flex flex-direction--column">
                    <div className="input-name-wrapper d-flex flex-direction--column position--relative">
                        <input type="text" className="input-name" id="name" />
                        <label className=" position--absolute top--7 left--10" htmlFor="name">
                            <span className="placeholder">
                                Name
                            </span>
                        </label>
                    </div>
                    <div className="relative">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Floating outlined</label>
                    </div>
                    <div className="input-email-wrapper d-flex flex-direction--column position--relative">
                        <label className="placeholder position--absolute top--7 left--10" htmlFor="email">
                            Email
                        </label>
                        <input type="email" className="input-email" id="email" required />
                    </div>
                    <div className="input-website-wrapper d-flex flex-direction--column position--relative">
                        <label className="placeholder position--absolute top--7 left--10" htmlFor="website">
                            Website
                        </label>
                        <input type="url" className="input-website" id="website" />
                    </div>
                    <div className="comment-wrapper d-flex flex-direction--column position--relative">
                        <label className="placeholder position--absolute top--7 left--10" htmlFor="comment">Comment</label>
                        <textarea className="input-comment" id="comment" rows={7} required></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe