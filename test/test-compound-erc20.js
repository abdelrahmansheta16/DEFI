const { time } = require("@openzeppelin/test-helpers")
const assert = require("assert")
const BN = require("bn.js")
const { sendEther, pow } = require("./util")
const { DAI, DAI_WHALE, CDAI, WBTC, WBTC_WHALE, CWBTC } = require("./config")
const { web3 } = require("@openzeppelin/test-helpers/src/setup")

const IERC20 = artifacts.require("IERC20")
const CErc20 = artifacts.require("CErc20")
const TestCompoundErc20 = artifacts.require("TestCompoundErc20")

const DEPOSIT_AMOUNT = pow(10, 8).mul(new BN(1))

contract("TestCompoundErc20", (accounts) => {
  const WHALE = WBTC_WHALE
  const TOKEN = WBTC
  const C_TOKEN = CWBTC

  let testCompound
  let token
  let cToken
})
