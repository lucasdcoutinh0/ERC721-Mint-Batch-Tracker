# ERC721 Mint Batch Tracker

## Overview

This project provides a real-time tracking service for batch mints on ERC721 contracts. It listens for new token mint events from a specified smart contract and logs all associated mint data. This tool is ideal for developers and users who need to monitor activity on ERC721 contracts efficiently.

# Features

- Real-time notifications for new mints.
- Detailed logging of mint event data.

# Prerequisites
- Node.js installed on your machine.
- Access to an Ethereum RPC endpoint, such as Alchemy or Infura.

# Setup Instructions
- Step 1: Clone the Repository
  - First, clone the repository to your local machine:
- Step 2: Configure Environment Variables
  - Create a .env file in the root directory of the project and add the following environment variables:
    - NODE_RPC_ADDRESS: Your WebSocket (WS) Ethereum RPC endpoint.
    - NODE_CONTRACT_ADDRESS: The ERC721 contract address you want to track.
- Step 3: Install Dependencies
  - Install the required Node.js packages: `npm i`
- Step 4: Run the Tracker
  - Execute the following command to start tracking mint events: `npx ts-node index.ts`

# Usage

After starting the service, it will continuously listen for the New Token Minted event from the specified ERC721 contract. You will receive notifications and logs in real-time, allowing you to monitor batch deployments efficiently.