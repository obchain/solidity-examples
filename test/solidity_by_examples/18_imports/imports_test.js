const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Imports", function () {
  let contract;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory("contracts/solidity_by_examples/18_imports/MyContract.sol:MyContract");
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("Should be able to verify all variables", async function () {
    expect(await contract.callOtherContract(2, 3)).to.equal(5)
  });
});
