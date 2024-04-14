const alchemyKey = "wss://eth-sepolia.g.alchemy.com/v2/DKBs96sGPlyheZsvdWUDRS_HZt3M6WVz"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json');
const contractAddress = "0xc257718898D715a6f2ADB937B35f98E1bbcad7B1";

export const helloWorldContract = new web3.eth.Contract (
    contractABI,
    contractAddress
);

export const loadCurrentMessage = async () => { 
    const message = await helloWorldContract.methods.message().call();
    return message;
};

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "Write a message in the text-field above",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: "😭" + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                    </p>
                    <a target="_blank" href={`https://metamask.io/download`}>
                        You must install Metamask, a virtaul Etheruem wallet, in your browser.
                    </a>
                </span>
            ),
        };
    }
  
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "Write a message in the text-field above.",
                };
            } else {
                return {
                    address: "",
                    status: "🦊Connect to the Metamask using the top right button."
                };
            }
        } catch (err) {
            return {
                address: "",
                status: "😭" + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                    </p>
                    <a target="_blank" href={`https://metamask.io/download`}>
                        You must install Metamask, a virtaul Etheruem wallet, in your browser.
                    </a>
                </span>
            ),
        };
    }
  
};

export const updateMessage = async (address, message) => {
    if (!window.ethereum || address === null) {
        return {
            status:
            "Connect your metamask wallet to update the message on the blockchain.",
        };
    }

    if (message.trim() === "") {
        return {
            status: "Your message cannot be empty",
        };
    }
    //set up transaction parameters
    const transactionParameters = {
        to: contractAddress, //Required except during contract publications.
        from: address, //Must match user's active address.
        data: helloWorldContract.methods.update(message).encodeABI(),
    };

    //sign the transaction
    try {
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
        });
        return {
            status: (
                <span>
                    {" "}
                    <a target="_blank" href={`https://sepolia.etherscan.io/tx/${txHash}`}>
                        View the status of your transaction on Ethersacn!
                    </a>
                    <br/>
                    Once the trransaction is verified by the network, the message will be updated automatically.
                </span>
            ),
        };
    } catch (error) {
        return {
            status: "T_T" + error.message,
        };
    }
};
