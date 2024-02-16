                                                                    :-METACRAFTERS PROJECT :-
1.javascriptBeginners.js : In this, we learnt about how the NFTs are created, the process of creating the variable holding NFTs,
their metadata and how those NFTs will get minted and the total number of NFTs which are being supplied.                                                                     

                                                                    
2.ethBeginners.sol :This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the
Ethereum blockchain.This program can be easily compiled using using Remix IDE.In this contract, we create our own token and can also know which
address containshow much amount of token, how much amount of token gets minted or burnt and what is the total supply of the token available.

-> Overview

The `MyToken` contract implements a basic token with the following features:
- Token name: Meta
- Token abbreviation: Mta
- Total supply: 0 initially
- Ability to mint new tokens
- Ability to burn existing tokens

-> Contract Details

-> Token Name
- `tokenName`: Meta

-> Token Abbreviation
- `tokenAbbrv`: Mta

-> Total Supply
- `totalSupply`: Initially 0, increases when new tokens are minted

-> Functions
- `mint(address _address, uint _value)`: Mint new tokens and assign them to the specified address.
- `burn(address _address, uint _value)`: Burn tokens from the specified address if they have sufficient balance.

-> Mapping
- `balances`: A mapping of addresses to their token balances.

-> Usage

To use this smart contract, you can deploy it to a compatible Ethereum blockchain network using tools like Remix, Truffle, or Hardhat. After deployment, you can interact with the contract by calling its functions to mint and burn tokens.

-> Example

->solidity
pragma solidity ^0.8.18;

contract MyToken {
    string public tokenName = "Meta";
    string public tokenAbbrv = "Mta";
    uint public totalSupply = 0;

    mapping(address => uint) public balances;

    function mint(address _address, uint _value) public {
        totalSupply += _value;
        balances[_address] += _value;
    }

    function burn(address _address, uint _value) public {
        if (balances[_address] >= _value) {
            totalSupply -= _value;
            balances[_address] -= _value;
        }
    }
}
