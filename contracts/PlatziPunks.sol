//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Base64.sol";
import "./PlatziPunksDNA.sol";

contract PlatziPunks is ERC721, ERC721Enumerable, PlatziPunksDNA{
    using Counters for Counters.Counter;
    Counters.Counter private _idCounter;
    uint256 public maxSupply;

    constructor(uint256 _maxSupply) ERC721("PlatziPunks", "PLTPKS"){
        maxSupply=_maxSupply;
    }

    function mint() public{
        uint256 tokenId=_idCounter.current();
        require(tokenId<maxSupply, 'Not PlatziPunks available');
        _safeMint(msg.sender, tokenId);
        _idCounter.increment();
    }

    function tokenURI(uint256 tokenId)
        public 
        view 
        override 
        returns(string memory){
            require(_exists(tokenId), 
            'ERC721 Metadata: URI form not existing token');

        string memory jsonURI=Base64.encode(
            abi.encodePacked(
                '{ "name": "PlatziPunks #',
                tokenId,
                '", "description": "Platzi Punks are randomized Avataaars stored on chain to teach DApp development on Platzi", "image":"',
                "//TODO Calculate image url",
                '"}'
        ));

        return string(abi.encodePacked('data:application/json; base64,', jsonURI));
    }

    //Override required
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    } 
}