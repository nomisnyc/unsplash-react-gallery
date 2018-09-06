import React from 'react';
import styled from 'styled-components';

const NoImages = props => (
  <li className='no-imgs'>
    <i className="material-icons icon-img">sentiment_very_dissatisfied</i>
    <h3>No Images match your search.</h3>
  </li>
);

export default NoImages;
