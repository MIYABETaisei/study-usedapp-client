import { Button, Card, Grid, Text } from "@mantine/core";
import { Canvas } from "@react-three/fiber";
import { Goerli, useEthers } from "@usedapp/core";
import { useState } from "react";
import { FloorItem } from "../../hooks/Floors/Floors";
import { FloorCreationModal } from "../FloorCreationModal";

export type InfinityTowerProps = {
  floors: FloorItem[];
};

export const InfinityTower = ({ floors }: InfinityTowerProps) => {
  const [floorCreationOpened, setFloorCreationOpened] = useState(false);
  const { account, chainId } = useEthers();
  return (
    <>
      <div id="infinityTowerCanvasWrapper">
        <Canvas camera={{ position: [-12, 1, 14], fov: 35, near: 1, far: 100 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[20, 30, 10]} />
          <pointLight position={[-10, -10, -10]} color="blue" />
          <spotLight position={[-2, 1, 32]} angle={0.2} intensity={1} />
          {floors.map((floor, index) => (
            <mesh
              position={[0, index, 0]}
              rotation={[0, Math.PI * index * 0.08, 0]}
            >
              <boxGeometry />
              <meshStandardMaterial
                roughness={0.6}
                metalness={0.3}
                color="red"
              />
            </mesh>
          ))}
        </Canvas>
      </div>
      {/* <Grid>
        {floors.map((floor, index) => (
          <Grid.Col span={4} key={index}>
            <Card shadow="sm" sx={{ height: "100%" }}>
              <Text>#{index}</Text>
              <Text>{floor.ownerName}</Text>
              <Text>{floor.message}</Text>
              <Text>{floor.link}</Text>
              <Text color={floor.color}>{floor.color}</Text>
              <Text color={floor.windowsTint}>{floor.windowsTint}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid> */}
      <Button
        onClick={() => setFloorCreationOpened(true)}
        variant="light"
        radius="xl"
        disabled={!account || chainId !== Goerli.chainId}
        sx={{ position: "fixed", bottom: 42, right: 42 }}
      >
        Mint a new floor
      </Button>
      <FloorCreationModal
        opened={floorCreationOpened}
        onClose={() => setFloorCreationOpened(false)}
      />
    </>
  );
};
