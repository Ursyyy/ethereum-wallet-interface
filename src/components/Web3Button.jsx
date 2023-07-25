import React from "react"
import { Web3 } from "web3"

export const Web3Button = () => {
    const ethEnabled = async () => {
        if (window.ethereum) {
          await window.ethereum.request({method: 'eth_requestAccounts'});
          window.web3 = new Web3(window.ethereum);
          return true;
        }
        return false;
      }
    return (
        <button onClick={ethEnabled}>
            Connect metamask
        </button>
    )
}