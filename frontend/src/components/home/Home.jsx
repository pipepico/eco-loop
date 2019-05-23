import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		const background =
			'https://media.architecturaldigest.com/photos/5c536ba2982cf52cfa57190a/16:9/w_1280%2Cc_limit/Loop%2520Tote4.jpg';
		return (
			<div>
				<img src={background} width="100%" alt="img" />
			</div>
		);
	}
}
