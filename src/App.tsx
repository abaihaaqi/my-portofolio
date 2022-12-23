import { Title, Text, Box, Image, Flex, Space, Container, Card } from "@mantine/core";
import reactLogo from "./assets/react.svg";
import typescriptLogo from "./assets/typescript.svg";
import mantineLogo from "./assets/mantine.svg";

export default function App() {
  return (
    <>
      <Box
        sx={(theme) => ({
          textAlign: "center",
          padding: theme.spacing.xl,
        })}
      >
        <Title order={3}>Nizar Ahmad Baihaqi</Title>
        <Text>Front-end Web Developer</Text>
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[1],
          padding: theme.spacing.xl,
        })}
      >
        <Container size="xs">
          <Title>I'm creating</Title>
          <Title>websites with</Title>
          <Space h="lg" />
          <Flex justify="center" align="end" wrap="wrap" gap="md">
            <Image
              width={80}
              caption="Reactjs"
              src={reactLogo}
              alt="React Logo"
            />
            <Image
              width={80}
              caption="Typescript"
              src={typescriptLogo}
              alt="Typescript Logo"
            />
            <Image
              width={80}
              caption="Mantine"
              src={mantineLogo}
              alt="Mantine Logo"
            />
          </Flex>
        </Container>
      </Box>
      <Space h="lg" />
      <Container size="md" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Title order={4} align="center">
          My Projects
        </Title>
        <Space h="md" />
        <Flex justify="center" wrap="wrap" gap="md">
          <Card withBorder>
            <Card.Section>
              <Image
                width={300}
                height={169}
                src={null}
                withPlaceholder
              />
            </Card.Section>
            Todo App
          </Card>
          <Card withBorder>
            <Card.Section>
              <Image
                width={300}
                height={169}
                src={null}
                withPlaceholder
              />
            </Card.Section>
            E-Commerce
          </Card>
          <Card withBorder>
            <Card.Section>
              <Image
                width={300}
                height={169}
                src={null}
                withPlaceholder
              />
            </Card.Section>
            Profile Page
          </Card>
        </Flex>
      </Container>
    </>
  );
}
