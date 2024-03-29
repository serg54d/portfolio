import React from "react";
import styled from 'styled-components';
import { myTheme } from "../../styled/Theme.styled";
import { Icon } from "../../components/icon/Icon";
import { Skill } from "../../components/skillItem/SkillItem";
import { Bounce, Fade, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

export const Skills = () => {
	return (


		<Container>
			<Slide
				triggerOnce
				direction="up"
			>
				<SkillList>
					<Skill iconId={"productDesignIcon"}
						iconWidth={"96"}
						iconHeight={"96"}
						iconViewBox={"0 0 96 96"}
						title={"Product Design"} />
					<Skill iconId={"uxuiIcon"}
						iconWidth={"143"}
						iconHeight={"48"}
						iconViewBox={"0 0 143 48"}
						title={"UX/UI Design"} />
					<Skill iconId={"designIcon"}
						title={"Icon Design"} />
					<Skill iconId={"frontendIcon"}
						title={"Frontend"} />
					<Skill iconId={"motionIcon"}
						title={"Animation"} />
					<Skill iconId={"backendIcon"}
						title={"Backend"} />
					<Skill iconId={"logoIcon"}
						title={"Logo Design"} />
				</SkillList>
			</Slide>
		</Container>


	)
};

const StyledSkills = styled.div`
position: relative;
	background-color: ${myTheme.colors.grey.light};
	

	@media (max-width: ${myTheme.size.mobile}) {
		padding-top: 50px;
	}

	@media (max-width: 560px) {
		padding-top: 30px;
	}

`
const Container = styled.div`
	max-width: ${myTheme.container.containerWidth};
	box-sizing: content-box;
	margin: 0 auto;
	padding: 0 15px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SkillList = styled.ul`

	display: flex;
	margin: 0 -15px;
	flex-wrap: wrap;
	justify-content: center;
	row-gap: 30px;
	@media (max-width: 560px) {
		row-gap: 0;
	}
`








