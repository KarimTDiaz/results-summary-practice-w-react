import { StyledContainer } from './styles';
import Result from '../result/Result';
import Summary from '../summary/Summary';

const Container = () => {
	return (
		<>
			<StyledContainer>
				<Result />
				<Summary />
			</StyledContainer>
		</>
	);
};

export default Container;
