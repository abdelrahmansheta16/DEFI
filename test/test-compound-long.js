const { time } = require("@openzeppelin/test-helpers")
const assert = require("assert")
const BN = require("bn.js")
const { sendEther, pow, frac } = require("./util")
const { DAI, DAI_WHALE, CDAI, WBTC, WBTC_WHALE, CWBTC, CETH } = require("./config")
const { web3 } = require("@openzeppelin/test-helpers/src/setup")

const IERC20 = artifacts.require("IERC20")
const TestCompoundLong = artifacts.require("TestCompoundLong")

contract("TestCompoundLong", (accounts) => {
  const ETH_WHALE = accounts[0]
  const TOKEN_BORROW = DAI
  const C_TOKEN_BORROW = CDAI
  const REPAY_WHALE = DAI_WHALE // used to repay interest on borrow

  const ETH_AMOUNT = pow(10, 18).mul(new BN(10))
  const BORROW_DECIMALS = 18
  const BORROW_INTEREST = pow(10, BORROW_DECIMALS).mul(new BN(1000))

  let testCompound
  let tokenBorrow
  beforeEach(async () => {
    testCompound = await TestCompoundLong.new(CETH, C_TOKEN_BORROW, TOKEN_BORROW, 18)
    tokenBorrow = await IERC20.at(TOKEN_BORROW)

    const borrowBal = await tokenBorrow.balanceOf(REPAY_WHALE)
    console.log(`repay whale balance: ${borrowBal.div(pow(10, BORROW_DECIMALS))}`)
    assert(borrowBal.gte(BORROW_INTEREST), "bal < borrow interest")
  })

  const snapshot = async (testCompound, tokenBorrow) => {
    const maxBorrow = await testCompound.getMaxBorrow()
    const ethBal = await web3.eth.getBalance(testCompound.address)
    const tokenBorrowBal = await tokenBorrow.balanceOf(testCompound.address)
    const supplied = await testCompound.getSuppliedBalance.call()
    const borrowed = await testCompound.getBorrowBalance.call()
    const { liquidity } = await testCompound.getAccountLiquidity()

    return {
      maxBorrow,
      eth: new BN(ethBal),
      tokenBorrow: tokenBorrowBal,
      supplied,
      borrowed,
      liquidity,
    }
  }

  it("should long", async () => {
    // used for debugging
    let tx
    let snap
    // supply
    tx = await testCompound.supply({
      from: ETH_WHALE,
      value: ETH_AMOUNT,
    })
  })
})
