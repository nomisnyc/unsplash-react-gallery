// ** root component 

import React, { Component } from 'react';
import styled from 'styled-components';

import Gallery from '../components/gallery';


export default class Root extends Component {
  render() {
    return(
      <div>
        <Gallery />
      </div>
    );
  }
};
