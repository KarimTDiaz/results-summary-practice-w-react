import styled from 'styled-components';

const StyledHabilityCard = styled.div`
	background-color: ${({ bgcolor }) => bgcolor};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 300px;
	margin-bottom: 1rem;
	padding: 0.5rem;
	border-radius: 15px;
`;
const HabilityDetailContainer = styled.div`
	display: flex;
	gap: 10px;
`;
const HabilityIcon = styled.img``;

const HabilityTitle = styled.h3`
	color: ${({ color }) => color};
`;

const HabilityNumber = styled.span``;

const HabilityTotal = styled.span``;

export {
	StyledHabilityCard,
	HabilityIcon,
	HabilityNumber,
	HabilityTitle,
	HabilityTotal,
	HabilityDetailContainer
};
