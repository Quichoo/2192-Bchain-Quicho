// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GradeContract {
    struct Student {
        string name;
        uint256 prelimGrade;
        uint256 midtermGrade;
        uint256 finalGrade;
        uint256 averageGrade;
        bool passed;
    }

    event GradeComputed(string name, uint256 average, bool passed);
    
    mapping (address => Student) public students;
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this");
        _;
    }

    modifier validGrade(uint256 grade) {
        require(grade >= 0 && grade <= 100, "Grade must be in between 0 and 100");
        _;
    }

    constructor() {
        owner = msg.sender;
    }
    function setName(string calldata _name) public {
        students[msg.sender].name = _name;
    }
    function setPrelimGrade(uint256 _prelimGrade) public onlyOwner validGrade(_prelimGrade) {
        students[msg.sender].prelimGrade = _prelimGrade;
        computeAverage(msg.sender);
    }
    function setMidtermGrade(uint256 _midtermGrade) public onlyOwner validGrade(_midtermGrade) {
        students[msg.sender].midtermGrade = _midtermGrade;
        computeAverage(msg.sender);
    }
    function setFinalGrade(uint256 _finalGrade) public onlyOwner validGrade(_finalGrade) {
        students[msg.sender].finalGrade = _finalGrade;
        computeAverage(msg.sender);
    }
    function calculateGrade() public onlyOwner {
        uint256 average = computeAverage(msg.sender);
        emit GradeComputed(students[msg.sender].name, average, students[msg.sender].passed);
    }

    function computeAverage(address studentAddress) public returns (uint256)  {
        Student storage student = students[studentAddress];
        uint256 average =(student.prelimGrade + student.midtermGrade + student.finalGrade) / 3;
        student.averageGrade = average;
        if (average >= 75) {
            student.passed = true;
        }
        return average;
    }

    function getStudent(address studentAddress) public view returns (string memory, uint256, uint256, uint256, uint256, bool) {
        Student memory student = students[studentAddress];
        return (student.name, student.prelimGrade, student.midtermGrade, student.finalGrade, student.averageGrade, student.passed);
    }

}