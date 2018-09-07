import React, { Component } from 'react';
import styled from 'styled-components';

class SearchForm extends Component {
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

export default SearchForm

const FormWrap = styled.div`
	margin: 10px 8vw;
	float: right;
	button {
		margin-left: 6px;
	}

`
