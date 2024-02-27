import React from 'react';

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={'cv.doc'} download>
        Telecharger mon CV
      </a>
      <a className="btn btn-primary" href="#contact">
        {' '}
        Contact
      </a>
    </div>
  );
};

export default CTA;
