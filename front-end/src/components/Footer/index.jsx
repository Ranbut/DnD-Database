import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Disclaimer>
          Disclaimer: This website is not affiliated with&nbsp;
          <StyledLink to={"https://company.wizards.com/en"}>Wizards of the Coast</StyledLink>&nbsp;or its parent company. Dungeons & Dragons and all related properties are trademarks of&nbsp;
          <StyledLink to={"https://company.wizards.com/en"}>Wizards of the Coast</StyledLink>.
        </Disclaimer>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  margin-top: 31em;
  background-color: #12181c;
  padding: 20px;
  border-top: 4px solid #e40712;
`;

const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Disclaimer = styled.p`
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
`;
