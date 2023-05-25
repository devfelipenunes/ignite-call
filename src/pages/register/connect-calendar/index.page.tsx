import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { AuthError, Container, Header } from "./styles";
import { ArrowRight, Check } from "phosphor-react";
import { ConnectBox } from "./styles";
import { ConnectItem } from "./styles";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ConnectCalendar() {
  const session = useSession();
  const router = useRouter();

  const hasAuthError = !!router.query.error;
  const isSignedIn = session.status === "authenticated";

  async function handleConnectGoogleCalendar() {
    await signIn("google");
  }

  return (
    <Container>
      <Header>
        <Heading>Conecte sua agenda</Heading>
        <Text>
          Conecte o seu calendario para que possamos te ajudar a gerenciar seus
          horarios
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectGoogleCalendar}
            >
              Conectar
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError>Falha ao ser conectar com o Google Calendar</AuthError>
        )}

        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
