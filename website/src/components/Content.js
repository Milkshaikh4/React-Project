import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../util/theme";
import ProjectCard from "./ProjectCard.js";

class Content extends Component {
	
	render() {
		return (
			<div>
				<ProjectSection>
					<Title>Projects</Title>
					<Projects>
						<ProjectCard name="TimeWeave"/>
						<ProjectCard name="Google"/>
						<ProjectCard name="Freelancer"/>
					</Projects>
				</ProjectSection>
				<Separater>
					<Line />
				</Separater>
				<HowItWorks>
					<center>
						<Title>How It Works</Title>
					</center>
				</HowItWorks>
			</div>	
		);
	}
}

const ProjectSection = styled.div`
	height: 350px;
	width: 100%;
	background: rgb(255, 255, 255);
	padding: 30px 0 0 25px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
`;

const Title = styled.h2`
	color: rgb(57, 57, 57);
	flex: 0 1 930px;
`;

const Projects = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: flex-start10
`;

const Separater = styled.div`
	width: 100%;
	height: 50px;
	background: rgb(255, 255, 255);
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 20px;
	padding-right: 20px;
`;

const Line = styled.div`
	width: 100%;
	height: 1px;
	background: rgb(222, 222, 222);
`;

const HowItWorks = styled.div`
	height: 400px;
	background: rgb(255, 255, 255);
	
`;

export default Content