// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Smart is ERC721A {
    address public owner;

    uint256 public maxLimit = 5;

    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmRcX1vaGK9mBE2smwn9Mva5T3fXQhz29PfhZhEiZny8gU/";

    string public prompt = "football player scoring a touchdown in the rain";

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
