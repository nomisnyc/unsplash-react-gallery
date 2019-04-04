// ** image component -- individual images here


import React from 'react';
import styled from 'styled-components';


{/* stateless component since there are no functions. all the data from the api call is rendered here from props.
*/}
const Image = props =>
	<Li>
		<ImageItem>
				<img src={props.url} alt={props.description} />
		</ImageItem>
		<div>
		<a href={props.link} target="_blank">
			<Overlay>
				<Copy>
		      <span>
		        <i> {props.description} </i>
		      </span>
		      <span>
		       {props.name} <br/>{props.location}
		      </span>
				</Copy>
			</Overlay>
		</a>
		</div>
	</Li>;

export default Image;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: .5s ease;
  text-transform: capitalize;
  span {
    display: block;
    text-align: left;
		margin: 4px auto;
  }
`;

const Li = styled.div`
	position: relative;
  display: inline-block;
  margin:  0.25rem;
  padding:  2px;
  width:  100%;
	&:hover ${Overlay} {
		opacity: .85;
	}
	&:hover ${ImageItem} {
		-ms-transform: scale(1.03);
		-webkit-transform: scale(1.03);
		transform: scale(1.03);
	}
`;
const ImageItem = styled.div`
	display: block;
	transition: transform .2s;
	img {
		border-radius: 5%;
	}
`;

const Copy = styled.div`
	color: #ffffff;
	font-size: 12px;
	padding: 4px;
	position: absolute;
	background-color: #0074D9;
	border-radius: 5%;
	width: 70%;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
		a{
			color: #ffffff;
		}
	@media (max-width: 768px) {
    width: 50%;
  }
`;
