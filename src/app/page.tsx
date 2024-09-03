"use client";

import { ReactNode } from "react";
import styled from "styled-components";

// basic usage
const SectionContainer = styled.div`
  border: 2px solid #bbbbbb;
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bbbbbb;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: paypaywhip;
`;

// conditional example
const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

// inheritance and partially overwrite
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// styled-components pass styles through `className` prop
const Link = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}): ReactNode => <a className={className}>{children}</a>;

const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`;

const Input = styled("input")<{ $inputColor?: string }>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || "#BF4F74"};
  background: paypaywhip;
  border: none;
  border-radius: 3px;
`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SectionContainer>
        <Title>Title with styled</Title>
        <Wrapper>
          <Title>Title with wrapper</Title>
        </Wrapper>
      </SectionContainer>
      <SectionContainer>
        <Button>Normal</Button>
        <Button $primary>Primary</Button>
      </SectionContainer>
      <SectionContainer>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
      </SectionContainer>
      <SectionContainer>
        <h1>Swapping out example for escape hatch</h1>
        {/* This is invalid because href is not available on Button element */}
        {/* <Button href="#">Normal Button</Button> */}
        <Button as="a" href="#">
          Link with Button styles
        </Button>
      </SectionContainer>
      <SectionContainer>
        <StyledLink>Styled, exciting Link</StyledLink>
      </SectionContainer>
      <SectionContainer>
        {/* styled-components can distinguish propeties from DOMs' and for styles */}
        <Input defaultValue="@probablyup" type="text" />
        <Input defaultValue="@geelen" type="text" $inputColor="rebeccapurple" />
      </SectionContainer>
    </main>
  );
}
