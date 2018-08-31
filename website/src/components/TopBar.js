import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../util/theme";

class TopBar extends Component {
	render() {
		return (
			<Topbar className="navbar navbar-expand-lg navbar-light bg-light">
				<Cody className="navbar-brand">
					CODY
				</Cody>

				<ul className="nav mr-auto">
					<li className="nav-item">
						<a className="nav-link text-muted" href="#">Search</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-muted" href="#">About Us</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-muted" href="#">Classes</a>
					</li>
				</ul>
			</Topbar>
		);
	}
}

//<form class="form-inline my-2 my-lg-0">
//	<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//	<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//</form>

const Topbar = styled.nav`
	margin: 0px;
	padding: 0px;
	-webkit-box-shadow: 0 8px 6px -5px #999;
    -moz-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 5px 6px -6px #999;
	float: inherit;
	width: 100%;
	height: 50px;
`;

const Cody = styled.span`
	letter-spacing: 5px;
	font-family: HelveticaNeue;
	font-size: 15px;
	padding: 20px;
	color: ${theme.black.hex};
`;

export default TopBar