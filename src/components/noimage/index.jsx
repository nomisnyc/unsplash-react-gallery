// ** no image component

import React from 'react';
import styled from 'styled-components';

{/* stateless component since there are no functions. it renders an error message when the search results come back empty
*/}
const NoImages = props => (
      <Error>
        Sorry, No Images match your search.
      </Error>
);

export default NoImages;


const Error = styled.div`
  text-align: center;
  width: 100%;
  margin: 30px auto;
`
