import React, { Component } from 'react';
import styled from 'styled-components';

import Gallery from '../components/gallery';


class Root extends Component {
  render() {
    return(
      <RootWrap>
        <Gallery />
      </RootWrap>
    );
  }
}

export default Root;


const RootWrap = styled.div`
  padding: 1em;
`;
