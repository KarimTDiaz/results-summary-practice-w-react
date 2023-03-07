import {
	StyledResult,
	ResultTitle,
	StyledBall,
	ResultNumber,
	ResultTotal,
	ResultMSG,
	ResultText
} from './styles';

const Result = () => {
	return (
		<StyledResult>
			<ResultTitle>Your Result</ResultTitle>
			<StyledBall>
				<ResultNumber>76</ResultNumber>
				<ResultTotal>of 100</ResultTotal>
			</StyledBall>
			<ResultMSG>Great</ResultMSG>
			<ResultText>
				Your performance exceed 65% of the people conducting the test here!
			</ResultText>
		</StyledResult>
	);
};

export default Result;
