// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

contract Payroll {
    address public owner;
    uint256 public age;
    uint256 public hrsWorked;
    uint256 public hrlyRate;
    uint256 public totSal;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    modifier rateNotZero(uint256 _rate) {
        require(_rate > 0, "Rate must be greater than 0");
        _;
    }
    modifier hrsNotZero(uint256 _hours) {
        require(_hours > 0, "Rate must be greater than 0");
        _;
    }
    constructor() {
        owner = msg.sender;
    }

    function setAge(uint256 _age) public  {
        age = _age;
    }

    function setHrsWrk(uint256 _hours) public hrsNotZero(_hours) {
        hrsWorked = _hours;
    }

    function setRate(uint256 _rate) external onlyOwner rateNotZero(_rate)  {
        hrlyRate = _rate;
    }

    function calculateTotSal() external onlyOwner {
        require(hrlyRate > 0 && hrsWorked > 0, "Hourly rate and Hours must be greater than 0!!!!!!!!!!!!!!!!!");
        totSal = hrlyRate * hrsWorked;
    } 
}