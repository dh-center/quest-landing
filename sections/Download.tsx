import { ReactElement } from 'react';
import styled from 'styled-components';
import SectionGray from '../components/lib/Section/SectionGray';
import Title from '../components/lib/Title';
import WithId from '../lib/interfaces/WithId';

const StyledSectionGray = styled(SectionGray)`
  padding: 85px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 425px) {
    padding: 60px 0;
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`;

const DownloadButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 550px;

  @media(max-width: 425px) {
    width: 240px;
    height: 182px;
  }

  img {
    height: 80px;
    cursor: pointer;
    filter: var(--shadow-filter-light);

    @media(max-width: 425px) {
      width: 100%;

      &:last-child {
        align-self: flex-end;
      }
    }
  }
`;

interface DownloadProps extends WithId {}

/**
 * Download section component
 *
 * @param props - props of component
 */
export default function Download(props: DownloadProps): ReactElement {
  return (
    <StyledSectionGray id={props.id}>
      <StyledTitle>Скачать приложение</StyledTitle>
      <DownloadButtonsWrapper>
        <img src="/images/app-store-badge.svg" alt="Загрузите в App Store"/>
        <img src="/images/google-play-badge.svg" alt="Доступно в Google Play"/>
      </DownloadButtonsWrapper>
    </StyledSectionGray>
  );
}
