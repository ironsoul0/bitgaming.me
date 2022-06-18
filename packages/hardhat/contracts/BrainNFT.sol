//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./BITToken.sol";

contract BrainNFT is ERC721URIStorage {
  uint256 public constant BRONZE_THRESHOLD = 50 ether;
  uint256 public constant SILVER_THRESHOLD = 150 ether;
  uint256 public constant GOLD_THRESHOLD = 300 ether;
  uint256 public constant NFT_AMOUNT = 9;

  address public owner;
  address public bitToken;
  mapping(address => mapping(uint256 => uint256)) ownerCounter;

  string private baseURI;

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor(address bitToken_, string memory baseURI_)
    ERC721("Brain NFT", "BNFT")
  {
    baseURI = baseURI_;
    bitToken = bitToken_;
  }

  function claimNFT(uint256 nftIndex) external {
    require(BITToken(bitToken).burner() == address(this), "NO_ACCESS");
    require(nftIndex < NFT_AMOUNT, "INVALID_NFT_INDEX");

    uint256 tokens = BRONZE_THRESHOLD;
    if (nftIndex > 6) {
      tokens = GOLD_THRESHOLD;
    } else if (nftIndex > 1) {
      tokens = SILVER_THRESHOLD;
    }
    require(
      BITToken(bitToken).balanceOf(msg.sender) >= tokens,
      "INSUFFICIENT_FUNDS"
    );

    BITToken(bitToken).burnTokens(msg.sender, tokens);
    uint256 newItemId = _tokenIds.current();
    _setTokenURI(newItemId, string(abi.encodePacked(nftIndex)));
    _mint(msg.sender, newItemId);
    _tokenIds.increment();

    ownerCounter[msg.sender][nftIndex]++;
  }

  function getOwnershipCount(address user, uint256 nftIndex)
    external
    view
    returns (uint256)
  {
    return ownerCounter[user][nftIndex];
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "OWNER_ONLY");
    _;
  }

  function _baseURI() internal view override returns (string memory) {
    return baseURI;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    override
    returns (string memory)
  {}

  function setBaseURI(string memory baseURI_) external onlyOwner {
    baseURI = baseURI_;
  }
}
