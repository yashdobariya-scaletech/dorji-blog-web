const Subscribe = () => {
  return (
    <div className='interested-section d-flex justify-content--center align-items-center pr-20 pl-20'>
      <div className='text-interested-wrapper d-flex justify-content-space-between align-items-center'>
        <p className='updates-text font-weight--400 font-size-24'>
          Get Updates on My Recent Experiences?
        </p>
        <form className='interested-form d-flex'>
          <input
            type='email'
            className='input-your-email-address border-radius-15 pr-20 pl-20 pt-10 pb-10 font-size-14 font-weight--400'
            placeholder='Enter email address here'
          />
          <button className='email-sand-btn border-radius-10 font-size-14 font-weight--600'>
            Yes, I am interested
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
