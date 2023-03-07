import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
const StyledResult = styled.div`
	width: 100%;
	height: 600px;
	background-image: linear-gradient(rgba(105, 67, 255), rgba(47, 44, 233));
	text-align: center;
	display: flex;
	flex-direction: column;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	align-items: center;
	padding: 2rem;

	@media screen and (min-width: 768px) {
		border-top-right-radius: 20px;
		border-bottom-left-radius: 0;
	}
`;
const ResultTitle = styled.h2`
	color: ${COLORS.textColorSoft};
`;
const StyledBall = styled.div`
	width: 250px;
	height: 250px;
	background-image: linear-gradient(rgb(77, 33, 201), transparent);
	border-radius: 50%;
`;

const ResultNumber = styled.p`
	margin: 1rem;
	font-size: 7rem;
	color: ${COLORS.textColor};
`;
const ResultTotal = styled.span`
	font-size: 1.5rem;
	color: ${COLORS.textColorSoft};
`;

const ResultMSG = styled.h3`
	font-size: 2rem;
	color: ${COLORS.textColor};
`;
const ResultText = styled.p`
	font-size: 1.3rem;
	color: ${COLORS.textColorSoft};
`;

export {
	StyledResult,
	ResultTitle,
	StyledBall,
	ResultNumber,
	ResultTotal,
	ResultMSG,
	ResultText
};
