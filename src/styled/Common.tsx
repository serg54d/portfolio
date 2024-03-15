import { myTheme } from "../styled/Theme.styled";

type FontPropsType = {
	family?: string;
	weight?: number;
	color?: string;
	lineHeight?: string;
	Fmin?: number;
	Fmax?: number;
}

export const Font = ({ family, weight, color, lineHeight, Fmin, Fmax }: FontPropsType) => `
	font-family: ${family || "ArodoraPro-Light"};
	font-weight: ${weight || 300};
	color: ${color || myTheme.colors.white.light};
	line-height: ${lineHeight || 1.17};
	font-size: calc((100vw - 320px) / (1240 - 320) * (${Fmax} - ${Fmin}) + ${Fmin}px);
	}
`

