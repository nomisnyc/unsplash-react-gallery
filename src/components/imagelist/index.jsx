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
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default ImageList;
