import { ReactElement } from 'react';
import WithClassName from '../../lib/interfaces/WithClassName';
import WithChildren from '../../lib/interfaces/WithChildren';
import Container from './Container';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface SectionProps extends WithClassName, WithChildren {}

/**
 * Section wrapper conponent
 *
 * @param props - props of component
 */
export default function Section(props: SectionProps): ReactElement {
  return (
    <Wrapper>
      <Container className={props.className}>
        { props.children }
      </Container>
    </Wrapper>
  );
}
