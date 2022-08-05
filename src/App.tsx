import { Container, Header, Title } from "@mantine/core";
import { InfinityTower } from "./components/InfinityTower";
import { WalletConnect } from "./components/WalletConnect";
import { WalletInstallation } from "./components/WalletInstallation";
import { useFloors } from "./hooks/Floors";

function App() {
  const { ethereum } = window as any;
  const { floors } = useFloors();
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
      <Container p="lg">
        {!ethereum ? (
          <Container p="lg">
            <WalletInstallation />
          </Container>
        ) : (
          <InfinityTower floors={floors} />
        )}
      </Container>
    </div>
  );
}

export default App;
