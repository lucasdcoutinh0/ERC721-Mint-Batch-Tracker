import Web3 from "web3";
import "dotenv/config";

interface LogResult {
  address: string;
  data: string;
  topics: string[];
}

const RPC_ADDRESS: string | undefined = process.env.NODE_RPC_ADDRESS;
const CONTRACT_ADDRESS: string | undefined = process.env.NODE_CONTRACT_ADDRESS;
const webSocketUrl: string = RPC_ADDRESS || "";
const erc721Address: string = CONTRACT_ADDRESS || "";

const web3: Web3 = new Web3(new Web3.providers.WebsocketProvider(webSocketUrl));

const subscribeToTransactions = async (): Promise<void> => {
  try {
    const subscription = await web3.eth.subscribe("logs", {
      address: erc721Address,
      topics: [Web3.utils.sha3("Transfer(address,address,uint256)")!],
    });

    subscription.on("data", (log: LogResult) => {
      console.log("New Token Minted:", log);
    });
  } catch (error) {
    console.error("Subscription error:", error);
  }
};

subscribeToTransactions();
