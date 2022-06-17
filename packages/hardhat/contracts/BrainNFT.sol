//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./BITToken.sol";

contract BrainNFT is ERC721URIStorage {
  uint256 public constant MEDIUM_THRESHOLD = 150 ether;
  uint256 public constant HIGH_THRESHOLD = 300 ether;

  address public owner;
  address public bitToken;

  string[] public lowURI;
  string[] public mediumURI;
  string[] public highURI;

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor(
    address _bitToken,
    string[] memory _lowURI,
    string[] memory _mediumURI,
    string[] memory _highURI
  ) ERC721("Brain NFT", "BNT") {
    owner = msg.sender;
    bitToken = _bitToken;

    for (uint256 i = 0; i < _lowURI.length; i++) {
      lowURI.push(_lowURI[i]);
    }
    for (uint256 i = 0; i < _mediumURI.length; i++) {
      mediumURI.push(_mediumURI[i]);
    }
    for (uint256 i = 0; i < _highURI.length; i++) {
      highURI.push(_highURI[i]);
    }
  }

  function random() private view returns (uint256) {
    return
      uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
  }

  function claimNFT(uint256 tokens) external {
    require(
      BITToken(bitToken).balanceOf(msg.sender) >= tokens,
      "INSUFFICIENT_FUNDS"
    );
    require(BITToken(bitToken).burner() == address(this), "NO_ACCESS");

    BITToken(bitToken).burnTokens(msg.sender, tokens);

    string memory tokenURI = lowURI[random() % lowURI.length];
    if (tokens >= HIGH_THRESHOLD) {
      tokenURI = highURI[random() % highURI.length];
    } else if (tokens >= MEDIUM_THRESHOLD) {
      tokenURI = mediumURI[random() % mediumURI.length];
    }

    uint256 newItemId = _tokenIds.current();
    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);
    _tokenIds.increment();
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "OWNER_ONLY");
    _;
  }
}
