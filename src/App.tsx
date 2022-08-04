import { Container, Header, Title } from "@mantine/core";
import { WalletConnect } from "./components/WalletConnect";
import { WalletInstallation } from "./components/WalletInstallation";

function App() {
  const { ethereum } = window as any;
  return (
    <div className="App">
      <Header
        height={60}
        px="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title>Infinity Tower</Title>
        <WalletConnect />
      </Header>
      {!ethereum ? (
        <Container p="lg">
          <WalletInstallation />
        </Container>
      ) : null}
    </div>
  );
}

export default App;
