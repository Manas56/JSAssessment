#OwnershipContract
OwnershipContract is a simple Ethereum smart contract written in Solidity. It demonstrates ownership functionality by restricting access to certain functions based on the contract owner.

#Contract Functions
##constructor()
Initializes the contract owner to the address of the account that deployed the contract.

##onlyOwner()
Modifier function that restricts access to only the owner of the contract.
Throws a require error if the caller is not the owner.

##onwerHere()
View function that checks if the caller is the owner.
Uses the revert statement to revert the transaction if the caller is not the owner.

##Owner()
View function that checks if the caller is the owner.
Uses the assert statement to ensure that the caller is the owner.

#Usage
Deploy the contract to an Ethereum blockchain network.
The deploying account becomes the owner of the contract.
Call the onlyOwner function to verify ownership.
Call the onwerHere function to verify ownership using revert.
Call the Owner function to verify ownership using assert.

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

This project is licensed under Manas Mamgain. Contact [mailto:manasmamgain19@gmail.com] .
