import React from 'react';
import styled from 'styled-components';

const Image = props =>
	<Li>
		<a href={props.link} target="_blank">
			<img src={props.url} alt={props.description} />
		</a>
		<Info>
      <span>
        Title: {props.description}
      </span>
      <span>
        Location: {props.location}
      </span>
      <span>
        <a href={props.user} target="_blank">{props.name}</a>
      </span>
		</Info>
	</Li>;

export default Image;


const Li = styled.div`
  list-style: none;
  display: inline-block;
  max-width: 220px;
  width: 100%;
  margin: 10px;
  img {
    max-height: 300px;
  }
`
const Info = styled.div`
  text-transform: capitalize;
  span {
    display: block;
    text-align: left;
  }
`;
