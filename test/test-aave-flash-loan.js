const BN = require("bn.js")
const { sendEther, pow } = require("./util")
const { DAI, DAI_WHALE, USDC, USDC_WHALE, USDT, USDT_WHALE } = require("./config")

const IERC20 = artifacts.require("IERC20")
const TestAaveFlashLoan = artifacts.require("TestAaveFlashLoan")

contract("TestAaveFlashLoan", (accounts) => {
  const WHALE = USDC_WHALE
  const TOKEN_BORROW = USDC
  const DECIMALS = 6
  const FUND_AMOUNT = pow(10, DECIMALS).mul(new BN(2000))
  const BORROW_AMOUNT = pow(10, DECIMALS).mul(new BN(1000))

  const ADDRESS_PROVIDER = "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5"

  let testAaveFlashLoan
  let token
})
