import { StyledSummary, SummaryButton, SummaryTitle } from './styles';
import { CARDS_INFO } from '../../constants/habilityInfo';
import HabilityCard from '../HabilityCard/HabilityCard';
import { v4 } from 'uuid';
const Summary = () => {
	return (
		<StyledSummary>
			<SummaryTitle>Summary</SummaryTitle>
			{CARDS_INFO.map(card => (
				<HabilityCard {...card} key={v4} />
			))}
			<SummaryButton>Continue</SummaryButton>
		</StyledSummary>
	);
};

export default Summary;
