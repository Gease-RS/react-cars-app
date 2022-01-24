import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.footer`
  min-height: 30em;
  background-color: #1d2124;
  ${tw`
    flex
    min-w-full
    pt-4
    md:pt-12
    pb-1
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
 `};
`;

const Aboutcontainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-12
  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-12

  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `}
  & > a {
    ${tw`
      text-sm
      text-white
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <Aboutcontainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Youcar is Car renting and selling company located in many countries
            across the world which has high quality cars and top rated service.
          </AboutText>
        </Aboutcontainer>
        <SectionContainer>
          <HeaderTitle>About</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About US</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contac Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms & Contitions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
