import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		width: 800px;
	}
`;

export { StyledContainer };
