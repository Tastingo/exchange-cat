var ethUtil = require('ethereumjs-util')
var sigUtil = require('eth-sig-util')
var Eth = require('ethjs')
window.Eth = Eth

function connect () {
  if (typeof ethereum !== 'undefined') {
    ethereum.enable()
    .catch(console.error)
  }
}

callContractButton.addEventListener('click', function(event) {
  event.preventDefault()
  var source = web3.eth.accounts[0]
  if (!source) return connect()

  var target = '0x351C54BE57c7d49CB074A47E030d8c5994eEAA16'
  var data = web3.sha3('exchange()')
  data = data.slice(0, 10)

  var amount = document.getElementById('amount').value
  var ratio = new BigNumber(1000000000000000000)
  amount = new BigNumber(amount)
  amount = amount.times(ratio).toString(16)

  web3.eth.sendTransaction({
    "from": source,
    "to": target,
    "value": '0x'+amount,
    "data": data
  }, function(err, result) {
    if (err) return console.error(err)
    console.log(result)
  })
})
