import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../util/theme";

class ProjectCard extends Component {
	
	render() {
		return (
			<Project_Cards className="card">
				<Image />
				<ProjectDesc>
					<Title>{this.props.name}</Title>
					<p>
					Curabitur lobortis iaculis metus, at tincidunt felis bibendum nec. 
					</p>
				</ProjectDesc>
			</Project_Cards>
		);
	}
}

const Image = styled.div`
	background: rgb(236, 236, 236);
	height: 60%;
	width: 
	padding: 0px;
	margin: 0px;
`;

const Project_Cards = styled.div`
	flex: 0 1 300px;
	height: 250px;
	border-radius: 7px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	margin-right: 10px;
`;

const ProjectDesc = styled.div`
	padding: 10px 0 0 15px;
`;

const Title = styled.h5`
	color: rgb(57, 57, 57);
`;

export default ProjectCard