import React from 'react';
import PropTypes from 'prop-types';

export default function ChasingLightButtons({ onCLick }) {
  return (
      <span className="btn btn-chasing-light btn-chasing-light-1" onClick={onCLick}>
        <span className="btn-chasing-light-text-1"></span>
        <span className="btn-chasing-light-text-2"></span>
        <span className="btn-chasing-light-text-3"></span>
        <span className="btn-chasing-light-text-4"></span>
        Créer
      </span>
  );
}

ChasingLightButtons.propTypes = {

};
