# MyToken Solidity Contract

This Solidity contract is a basic implementation of a token contract. It provides functionality for minting and burning tokens, as well as tracking token balances of Ethereum addresses.

## Description

This contract is written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. The contract defines a token with the name "META", abbreviated as "MTA". It includes functions for minting new tokens and burning existing tokens from specified addresses.

## Functions

### `mint(address _addr, uint _value)`

This function is used to mint (create) new tokens and assign them to a specified address `_addr`. It takes two parameters: `_addr` (the address to which tokens will be minted) and `_value` (the amount of tokens to mint). After execution, the total supply of tokens is increased, and the balance of the specified address is updated accordingly.

### `burn(address _addr, uint _value)`

This function is used to burn (destroy) existing tokens from a specified address `_addr`. It takes two parameters: `_addr` (the address from which tokens will be burned) and `_value` (the amount of tokens to burn). Before execution, the function checks if the balance of the specified address is sufficient for burning the specified amount of tokens. If the balance is sufficient, the total supply of tokens is decreased, and the balance of the specified address is updated accordingly.

## Getting Started

To use this contract, you can deploy it on an Ethereum-compatible blockchain network. You can use Remix, an online Solidity IDE, to compile and deploy the contract.

1. Go to the Remix website at https://remix.ethereum.org/.
2. Create a new file with a `.sol` extension (e.g., `MyToken.sol`).
3. Copy and paste the provided Solidity code into the file.
4. Compile the code using the Solidity Compiler tab.
5. Deploy the contract using the Deploy & Run Transactions tab.
6. Interact with the contract by calling its functions.

## License

This project is licensed under the Naman Deol. Contact [mailto:namandeol555@gmail.com] .
