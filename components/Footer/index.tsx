import { ReactElement } from 'react';
import styled from 'styled-components';
import WithId from '../../lib/interfaces/WithId';
import Container from '../lib/Container';

const Wrapper = styled.footer`
  height: 176px;

  background-image: url('/images/backgrounds/footer.svg');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;

  margin-top: auto;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  width: 50%;

  font-size: 16px;
`;

const Right = styled(Left)`
  justify-content: flex-end;
  align-items: flex-end;

  width: 50%;
`;

const Contacts = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    margin-right: 10px;
  }
`;

const Terms = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  list-style: none;
  padding: 0;
  margin: 0 0 30px;
`;

const TermsItem = styled.li`
  margin-bottom: 17px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TermsItemBlue = styled(TermsItem)`
  color: var(--color-blue);
`;

interface FooterProps extends WithId {}

/**
 * Footer section component
 *
 * @param props - props of component
 */
export default function Footer(props: FooterProps): ReactElement {
  return (
    <Wrapper id={props.id}>
      <Container>
        <Left>
          <Contacts>
            <ContactItem>
              <img src="/images/icons/map.svg" alt="Карта"/>
              г. Санкт-Петербург, ул. Ломоносова, 9
            </ContactItem>
            <ContactItem>
              <img src="/images/icons/mail.svg" alt="Письмо"/>
              dh@itmo.ru
            </ContactItem>
            <ContactItem>
              <img src="/images/icons/globe.svg" alt="Глобус"/>
              www.dh.itmo.ru
            </ContactItem>
          </Contacts>
        </Left>
        <Right>
          <Terms>
            <TermsItemBlue>Политика конфидециальности</TermsItemBlue>
            <TermsItem>© 2021 Университет ИТМО</TermsItem>
          </Terms>
        </Right>
      </Container>
    </Wrapper>
  );
}
