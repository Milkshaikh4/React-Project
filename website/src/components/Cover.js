import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../util/theme";
import TopBar from "./TopBar";

class Cover extends Component {
	render() {
		return (
			<div className="cover-container d-flex mx-auto flex-column">
				<TopBar />
				<Search role="main" className="inner cover">
					<Slogan className="cover-heading" id="Slogan">
						We Teach<br/>You Create
					</Slogan>
					<div className="input-group mb-3 p-3">
						<div className="button_box2" id="SearchBar">
							<FormSearchBar className="form-wrapper-2 cf">
								<Input type="text" placeholder="Search here..." required></Input>
								<button type="submit">Search</button>
							</FormSearchBar>
						</div>
					</div>
				</Search>
			</div>
		);
	}
}

const SearchIcon = styled.div`
	background: url("../assets/landing-page.jpg") center no-repeat;
 	background-size: cover;
	height: 100%;
	width: auto;
`;

const FormSearchBar = styled.form`
	width: 330px;
	padding: 15px;
	background: rgb(57, 57, 57);
	border-radius: 10px;
`;

const Input = styled.input`
	width: 75%;
	height: 40px;
	padding: 10px 5px;
	float: left;
	font: bold 15px 'Raleway', sans-serif;
	border: 0;
	background: ${theme.white.hex};
	border-radius: 3px 0 0 3px;
	color: rgb(57, 57, 57);
	font-weight: normal;
	font-style: italic;
`;

const Slogan = styled.h1`
	color: ${theme.white.hex};
	text-align: center;
`;

const Search = styled.div`
	margin: auto;
	height: 50px;
`;

export default Cover