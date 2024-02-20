// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract Ownable {
    address public owner;

    constructor() {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }
    function transferOwnership(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "invalid address");
        owner = _newOwner;
    }

}
contract MyContract is Ownable {
    uint256 someValue;
    function setSomeValue(uint256 _newValue) external onlyOwner {
        someValue = _newValue;
    }
    function getSomeValue() public view returns(uint256) {
        return someValue;
    }
}