<p align="center">
  <a href="http://laddy.app">
    <img width="180" src="./assets/logo.png">
  </a>
</p>

<h1 align="center">Bit Gaming</h1>

<p align="center">Play-to-earn DAO with exclusive NFT collection.<br/>Submission for JAS Ventures Blockchain Hackathon.</p>

![Screenshot](./assets/screenshot.png)

### Idea

We are bringing together curious minds and reward them with our own ERC20 tokens and exclusive NFTs.

### Competitive

Leaderboard allows you to compete with our DAO members.

### Extendable

Unlimited possibilites with potential to add new gaming experience.

## Smart contracts

Our core smart contracts are verified on Rinkeby testnet.

| Contract                                  | Link                                  |
| ---------------------------------------- | -------------------------------------------- |
| [`BIT ERC20 Token`](https://rinkeby.etherscan.io/address/0x2C04c3Faf3040eA42A6887eC230Cf0a397eb28a2#code) | [0x2C04c3Faf3040eA42A6887eC230Cf0a397eb28a2](https://rinkeby.etherscan.io/address/0x2C04c3Faf3040eA42A6887eC230Cf0a397eb28a2#code) |
| [`Brain ERC721 NFT`](https://rinkeby.etherscan.io/address/0xB94DDe6743f073de10943665302b3493e464aa02#code)     | [0xB94DDe6743f073de10943665302b3493e464aa02](https://rinkeby.etherscan.io/address/0xB94DDe6743f073de10943665302b3493e464aa02#code) |

## Setup

### Install

```bash
git clone https://github.com/ironsoul0/bitgaming.me
cd bitgaming.me
yarn
```

### Run

Run local `hardhat` chain for deploying smart contracts.

```bash
yarn chain
```

Deploy smart contracts to local chain.

```bash
yarn deploy
```

Run frontend for interacting with the application.

```bash
yarn dev
```

## Notes

- This project was created for participating in [JAS Ventures Hackathon Blockchain day](https://jva.vc/index.php/ru/hackathon).

## License

This project is open source and available under the [MIT License](LICENSE).