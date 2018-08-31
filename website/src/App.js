import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import theme from "./util/theme";
import Content from "./components/Content";
import Cover from "./components/Cover";

class App extends Component {
  render() {
    return (
		<Wrapper class="container">
			<Cover />
			<Content />
			<BottomBar>Copyright © heycody 2018</BottomBar>
		</Wrapper>
    );
  }
}

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	float: left;
	margin: 0px;
	padding: 0px;
`;

const BottomBar = styled.div`
	background: rgb(57, 57, 57);
	text-align: center;
	color: ${theme.white.hex};
	width: 100%;
	float: inherit;
	height: 50px;
	line-height: 50px;
`;
export default App;
