import { Button } from "@mantine/core";
import { useEthers } from "@usedapp/core";

export const WalletConnect = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  if (account) {
    return <Button onClick={deactivate}>Disconnect</Button>;
  } else {
    return <Button onClick={activateBrowserWallet}>connect to Metamask</Button>;
  }
};
