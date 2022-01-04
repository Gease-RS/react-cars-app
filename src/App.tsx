import "./App.css";
import styled from "styled-components";
import tw from "twin.macro";
import { HomePage } from "./app/containers/HomePage/Index";

const AppContainer = styled.div`
  ${tw`flex 
      flex-col 
      w-full
      h-full
  `}
`;

export default function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}
