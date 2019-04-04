// ** search form component

import React, { Component } from 'react';
import styled from 'styled-components';


{/* stateful component. there is a function here that changes the search query. when the user types, the response is automatically saved in state. the doSearch function is called when user does the search. preventDefault method is always called on submit to avoid page refresh.
*/}
export default class SearchForm extends Component {
	state = {
		text: ''
	};

	onSearchChange = e => {
		this.setState({ text: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<FormWrap>
				<form className="search-form" onSubmit={this.handleSubmit}>
					<input
						type="search"
						onChange={this.onSearchChange}
						ref={input => (this.query = input)}
						name="search"
						placeholder="Search..."
					/>
					<button type="submit" id="submit">
						Go
					</button>
				</form>
			</FormWrap>
		);
	}
}



const FormWrap = styled.div`
	margin: 10px 8vw;
	float: right;
	button {
		margin-left: 6px;
	}

`
