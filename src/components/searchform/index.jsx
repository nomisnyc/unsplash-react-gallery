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
			<form className="search-form" onSubmit={this.handleSubmit}>

				<input
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Search..."
				/>
				<button type="submit" id="submit">
					search
				</button>
			</form>
		);
	}
}

export default SearchForm
