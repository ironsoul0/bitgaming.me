//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BITToken is ERC20 {
  address public owner;
  address public burner;

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

  function claimTokens(uint256 tokens) external {
    _mint(msg.sender, tokens);
  }

  function burnTokens(address target, uint256 tokens) external onlyBurner {
    _burn(target, tokens);
  }

  function setBurner(address _burner) external onlyOwner {
    burner = _burner;
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override {
    super._beforeTokenTransfer(from, to, amount);
  }
}
