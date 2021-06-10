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
`;

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
`;

const DownloadButtonsWrapper = styled.div`
  display: flex;

  img {
    height: 80px;
    margin-left: 40px;
    cursor: pointer;
    filter: var(--shadow-filter-light);

    &:first-child {
      margin-left: 0;
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
