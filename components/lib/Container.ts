import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  max-width: 1160px;

  margin: 0 auto;

  display: flex;

  @media(max-width: 425px) {
    max-width: 343px;
  }
`;

export default Container;
