import { ReactElement } from 'react';
import WithClassName from '../../../lib/interfaces/WithClassName';
import WithChildren from '../../../lib/interfaces/WithChildren';
import Container from '../Container';
import styled from 'styled-components';
import WithId from '../../../lib/interfaces/WithId';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 1160px;
`;

interface SectionProps extends WithClassName, WithChildren, WithId {}

/**
 * Section wrapper component
 *
 * @param props - props of component
 */
export default function Section(props: SectionProps): ReactElement {
  return (
    <Wrapper id={props.id}>
      <Container className={props.className}>
        { props.children }
      </Container>
    </Wrapper>
  );
}
