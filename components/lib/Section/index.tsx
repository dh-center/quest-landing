import { ReactElement } from 'react';
import WithClassName from '../../../lib/interfaces/WithClassName';
import WithChildren from '../../../lib/interfaces/WithChildren';
import styled from 'styled-components';
import WithId from '../../../lib/interfaces/WithId';

const Wrapper = styled.section`
  width: 100%;
`;

interface SectionProps extends WithClassName, WithChildren, WithId {}

/**
 * Section wrapper component
 *
 * @param props - props of component
 */
export default function Section(props: SectionProps): ReactElement {
  return (
    <Wrapper id={props.id} className={props.className}>
      { props.children }
    </Wrapper>
  );
}
