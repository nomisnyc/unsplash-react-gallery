import React from 'react';
import styled from 'styled-components';

const Image = props =>
	<Li>
		<ImageItem>
				<img src={props.url} alt={props.description} />
		</ImageItem>
		<a href={props.link} target="_blank">
			<Overlay>
				<Copy>
		      <span>
		        <i> {props.description} </i>
		      </span>
		      <span>
		        <a href={props.user} target="_blank">{props.name}</a> <br/>{props.location}
		      </span>
				</Copy>
			</Overlay>
		</a>
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
`;
const ImageItem = styled.div`
	display: block;
	width: 100%;
	height: auto;
`;

const Copy = styled.div`
	color: #ffffff;
	font-size: 12px;
	padding: 4px;
	position: absolute;
	background-color: #696969;
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
`;
