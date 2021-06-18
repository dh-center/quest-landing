import { ReactElement } from 'react';
import styled from 'styled-components';
import WithId from '../../lib/interfaces/WithId';
import Container from '../lib/Container';
import Link from 'next/link';

const Wrapper = styled.footer`
  height: 176px;

  background-image: url('/images/backgrounds/footer.svg');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;

  margin-top: auto;

  @media(max-width: 425px) {
    height: initial;
    background: none;
    border-top: 2px solid var(--color-border-gray);
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media(max-width: 425px) {
    padding: 40px 0;
    flex-wrap: wrap;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;

  @media(max-width: 425px) {
    margin-bottom: 40px;
  }
`;

const Center = styled(Left)`
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 30px;

  @media(max-width: 425px) {
    width: 100%;
    order: 3;
    margin-bottom: 0;
  }
`;

const Right = styled(Left)`
  justify-content: flex-end;
  padding: 30px 0;

  @media(max-width: 425px) {
    padding: 0;
  }
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

const ContactItemLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--color-black);
`;

const Terms = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  height: 100%;

  list-style: none;
  padding: 0;

  @media(max-width: 425px) {
    align-items: flex-start;
  }
`;

const TermsItem = styled.li``;

const TermsItemLink = styled.a`
  cursor: pointer;
  text-decoration: none;
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
      <StyledContainer>
        <Left>
          <Contacts>
            <ContactItem>
              <img src="/images/icons/map.svg" alt="Карта"/>
              г. Санкт-Петербург, ул. Ломоносова, 9
            </ContactItem>
            <ContactItem>
              <img src="/images/icons/mail.svg" alt="Письмо"/>
              <ContactItemLink href='mailto:dh@itmo.ru' target='_blank'>
                dh@itmo.ru
              </ContactItemLink>
            </ContactItem>
            <ContactItem>
              <img src="/images/icons/globe.svg" alt="Глобус"/>
              <ContactItemLink href='https://dh.itmo.ru' target='_blank'>
                dh.itmo.ru
              </ContactItemLink>
            </ContactItem>
          </Contacts>
        </Left>
        <Center>
          © 2021 DH Center
        </Center>
        <Right>
          <Terms>
            <TermsItem>
              <Link href='/eula.pdf'>
                <TermsItemLink>
                  End-User License Agreement
                </TermsItemLink>
              </Link>
            </TermsItem>
            <TermsItem>
              <Link href='/privacy-policy-en.pdf'>
                <TermsItemLink>
                  Privacy policy
                </TermsItemLink>
              </Link>
            </TermsItem>
            <TermsItem>
              <Link href='/privacy-policy.pdf'>
                <TermsItemLink>
                  Политика конфиденциальности
                </TermsItemLink>
              </Link>
            </TermsItem>
          </Terms>
        </Right>
      </StyledContainer>
    </Wrapper>
  );
}
