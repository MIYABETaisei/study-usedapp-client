import { Text, Title } from "@mantine/core";

export const WalletInstallation = () => {
  return (
    <>
      <Title>Metamask is required</Title>
      <Text
        variant="link"
        component="a"
        href="https://metamask.io/download.html"
      >
        Meta mask
      </Text>
    </>
  );
};
