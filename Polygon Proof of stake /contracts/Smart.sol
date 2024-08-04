// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Smart is ERC721A {
    address public owner;

    uint256 public maxLimit = 5;

    string baseUrl =
    "https://pink-magic-catshark-193.mypinata.cloud/ipfs/QmUn3CRgfUaHp1uYagziR5AGxkdcdfzBTfuf5QpYWAxybT/?pinataGatewayToken=J_Sxxg4ki5e5mVU1lz4s9arwx5sh4QOM8VmMu47QBtNW02FF7EK5CLa3aovuXQLk";
     

    string public prompt = "A Scary Person Illustrative style  Potrait , Fire the Background ,Lokking in Fire ";

    constructor() ERC721A("Delta", "BGMI") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Can be performed by the owner only.");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxLimit,
            "You can not mint more than 5 NFTs"
        );
        _mint(msg.sender, quantity);
    }

    function getBalance(address _owner) external view returns (uint256) {
        return balanceOf(_owner);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
