import Web3 from "web3";
import "dotenv/config";

interface LogResult {
  address: string;
  data: string;
  topics: string[];
}

const API_KEY: string | undefined = process.env.NODE_API_KEY;
const webSocketUrl: string = `wss://polygon-amoy.g.alchemy.com/v2/${API_KEY}`;
const erc721Address: string = "0xE2c4138D294729a09070cb33f1fD485221291ac0";

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
