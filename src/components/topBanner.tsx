const   TopBanner = () => {
  return (
    <div className='top-banner-section pt-85'>
      <div className='welcome-title-slide-wrapper full-width full-height d-flex justify-content-space-between align-items-start flex-direction--column'>
        <div className='welcome-section-wrapper full-width d-flex align-items-center full-height flex-direction--column pt-120'>
          <p className='welcome-text font-size-24 font-weight--400 text-align--center'>
            Welcome to
          </p>
          <p className='mannkibata-text font-size-60 font-weight--700'>
            #MannKiBaat
          </p>
        </div>
        <div className='slider-content-wrapper d-flex align-items-end justify-content--center'>
          <div className='feature-blog-wrapper d-flex align-items-center'>
            <p className='feature-text'>Featured Blogs</p>
            <div className='feature-design'></div>
          </div>
          <div className='blog-slider-description d-flex justify-content--center align-items-end'>
            <p className='slider-description-text'>
              Bless me into <span>Usefulness</span> . <br />
              May you all be blessed into Usefulness.
            </p>
            <p className='double-quotes d-flex justify-content--center align-items-end'>
              ”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
