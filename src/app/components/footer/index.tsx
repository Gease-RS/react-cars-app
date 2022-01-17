import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.footer`
  min-height: 30em;
  background-color: #1d2124;
  ${tw`
    flex
    min-w-full
    pt-7
    pb-1
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    max-w-screen-2xl
 `};
`;

const Aboutcontainer = styled.div`
  ${tw`
        flex
        flex-col

    `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <Aboutcontainer>
          <Logo color="white" bgColor="dark" />
        </Aboutcontainer>
      </InnerContainer>
    </FooterContainer>
  );
}
