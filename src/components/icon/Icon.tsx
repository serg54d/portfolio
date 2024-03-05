import React from "react";
import styled from 'styled-components';
import iconsSprite from '../../assets/icons-font/icons-sprite.svg'

type IconPropsType = {
	iconId: string
	iconWidth?: string
	iconHeight?: string
	iconViewBox?: string
	stroke?: string
}

export const Icon = (props: IconPropsType) => {
	return (
		<svg width={props.iconWidth || '75px'} height={props.iconHeight || '75px'} viewBox={props.iconViewBox || "0 0 75 75"} fill="none" xmlns="http://www.w3.org/2000/svg"
			stroke={props.stroke || '#00C4F0'}>
			<use xlinkHref={`${iconsSprite}#${props.iconId}`} />
		</svg >
	)
};



