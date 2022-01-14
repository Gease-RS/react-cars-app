import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  min-with: 16.5em;
  min-height: 22.2em;
  max-height: 22.2em;
  ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `}
`;

export function Car(props: ICarProps) {}
