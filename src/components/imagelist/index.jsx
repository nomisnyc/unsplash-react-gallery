import React from 'react';
import styled from 'styled-components';
import Image from '../image';
import NoImages from '../noimage';


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
