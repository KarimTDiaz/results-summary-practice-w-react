import styled from 'styled-components';

const StyledSummary = styled.div`
	width: 100%;
	height: 600px;
	text-align: center;
	display: flex;
	flex-direction: column;

	align-items: center;
	padding: 2rem;
	background-color: white;
`;

const SummaryTitle = styled.h2``;
const SummaryButton = styled.a`
	width: 300px;
	border-radius: 20rem;
	padding: 1.5rem 2rem;
	background-color: #303b59;
	color: white;
`;
export { StyledSummary, SummaryTitle, SummaryButton };
