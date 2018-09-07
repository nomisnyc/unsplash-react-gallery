import React from 'react';
import styled from 'styled-components';
import Image from '../image';
import NoImages from '../noimage';

{/* this grabs the response data, maps through the data and assign attributes to props. It also has a condition that decides between which component to use. If there is no images found then the no image component will be rendered.
*/}

const ImageList = props => {
	const results = props.data;
	let imgs;
	if (results.length > 0) {
		imgs = results.map(img =>
			<Image
				name={img.user.name}
				user={img.user.links.html}
				description={img.description}
				location={img.user.location}
				link={img.links.html}
				url={img.urls.thumb}
				key={img.id}
			/>
		);
	} else {
		imgs = <NoImages />;
	}
	return (
		<Grid>
			{imgs}
		</Grid>
	);
};

export default ImageList;

const Grid = styled.div`
	-moz-column-width: 13em;
	-webkit-column-width: 13em;
	-moz-column-gap: 1em;
	-webkit-column-gap: 1em;
	display: inline-block;
`;
