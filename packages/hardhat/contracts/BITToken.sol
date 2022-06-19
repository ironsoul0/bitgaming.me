//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

library Leaderboard {
  struct User {
    address addr;
    uint256 balance;
  }
}

contract BITToken is ERC20 {
  address public owner;
  address public burner;
  mapping(address => bool) existingUsers;
  address[] public holders;

  constructor(uint256 initialSupply) ERC20("Brain Index Token", "BIT") {
    owner = msg.sender;
    _mint(msg.sender, initialSupply);
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "OWNER_ONLY");
    _;
  }

  modifier onlyBurner() {
    require(msg.sender == burner, "BURNER_ONLY");
    _;
  }

  function getUsers() external view returns (Leaderboard.User[] memory) {
    Leaderboard.User[] memory users = new Leaderboard.User[](holders.length);

    for (uint256 i = 0; i < holders.length; i++) {
      users[i].addr = holders[i];
      users[i].balance = balanceOf(holders[i]);
    }

    return users;
  }

  function claimTokens(uint256 tokens) external {
    _mint(msg.sender, tokens);
    if (!existingUsers[msg.sender]) {
      holders.push(msg.sender);
    }
    existingUsers[msg.sender] = true;
  }

  function burnTokens(address target, uint256 tokens) external onlyBurner {
    _burn(target, tokens);
  }

  function setBurner(address _burner) external onlyOwner {
    burner = _burner;
  }

  function rewardTokens(address[] memory users, uint256[] memory tokens)
    external
    onlyOwner
  {
    for (uint256 i = 0; i < users.length; i++) {
      _mint(users[i], tokens[i]);
      if (!existingUsers[users[i]]) {
        holders.push(users[i]);
      }
      existingUsers[users[i]] = true;
    }
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override {
    super._beforeTokenTransfer(from, to, amount);
  }
}
