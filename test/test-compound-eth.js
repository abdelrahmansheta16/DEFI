const { time } = require("@openzeppelin/test-helpers")
const assert = require("assert")
const BN = require("bn.js")
const { sendEther, pow } = require("./util")
const { CETH } = require("./config")
const { web3 } = require("@openzeppelin/test-helpers/src/setup")

const IERC20 = artifacts.require("IERC20")
const CErc20 = artifacts.require("CErc20")
const TestCompoundEth = artifacts.require("TestCompoundEth")

const DEPOSIT_AMOUNT = pow(10, 18).mul(new BN(1))

contract("TestCompoundEth", (accounts) => {
  const WHALE = accounts[0]
  const C_TOKEN = CETH

  let testCompound
  let cToken
  beforeEach(async () => {
    testCompound = await TestCompoundEth.new(C_TOKEN)
    cToken = await CErc20.at(C_TOKEN)
  })

  const snapshot = async (testCompound, web3, cToken) => {
  }
})
