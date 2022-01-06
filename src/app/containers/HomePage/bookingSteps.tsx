import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
        w-full
        flex 
        flex-col 
        items-center 
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6
`}
`;

const title = styled.h2`
  ${tw`
        text-xl
        lg:text-4x1
        text-black
        font-extrabold
    `}
`;

const StepsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `}
`;

const StepContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-16
        md:w-96
        items-center
        transition-colors
        hover:text-red-500
    `}
`;

const Step = styled.div`
  ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        pt-6
    `}
`;

const StepTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `}
`;

const StepDescription = styled.p`
  ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-600
    `}
`;
const StepIcon = styled.div`
  ${tw`
        text-red-500
        text-3x1
    `}
`;

export function BookingSteps() {
  return (
    <Container>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Youcar point and book your car.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
