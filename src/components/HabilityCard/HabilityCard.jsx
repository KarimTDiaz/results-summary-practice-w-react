import {
	StyledHabilityCard,
	HabilityIcon,
	HabilityNumber,
	HabilityTitle,
	HabilityTotal,
	HabilityDetailContainer
} from './styles';

const HabilityCard = ({ bgcolor, color, icon, title, number }) => {
	return (
		<>
			<StyledHabilityCard bgcolor={bgcolor}>
				<HabilityDetailContainer>
					<HabilityIcon src={icon} />
					<HabilityTitle color={color}>{title}</HabilityTitle>
				</HabilityDetailContainer>
				<div>
					<HabilityNumber>{number}</HabilityNumber>
					<HabilityTotal> /100</HabilityTotal>
				</div>
			</StyledHabilityCard>
		</>
	);
};

export default HabilityCard;
