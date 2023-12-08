interface Props {
  subscribeUserEmail: string;
  handleOnChange: (e: any) => void;
  subscribeUser: () => void;
}

const Subscribe: React.FC<Props> = (props) => {
  return (
    <div className='interested-section d-flex justify-content--center align-items-center pr-20 pl-20'>
      <div className='text-interested-wrapper d-flex justify-content-space-between align-items-center'>
        <p className='updates-text font-weight--400 font-size-24'>
          Get Updates on My Recent Experiences?
        </p>
        <div className='interested-form d-flex'>
          <input
            value={props.subscribeUserEmail}
            type='email'
            className='input-your-email-address border-radius-15 pr-20 pl-20 pt-10 pb-10 font-size-14 font-weight--400'
            placeholder='Enter email address here'
            onChange={props.handleOnChange}
          />
          <button
            type='submit'
            onClick={props.subscribeUser}
            className='email-sand-btn border-radius-10 font-size-14 font-weight--600'
          >
            Yes, I am interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
