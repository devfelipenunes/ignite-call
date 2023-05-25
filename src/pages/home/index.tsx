import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";
import Image from "next/image";

import preview from "../../assets/app-preview.png";
import { ClaimUsernameForm } from "./components/CaimUsernameForm";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text>
          Conecte seu calendário e permita as pessoas marquem agendamentos no
          seu tempo livre
        </Text>

        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={preview}
          height={400}
          quality={100}
          priority
          alt="App preview"
        />
      </Preview>
    </Container>
  );
}
