var $ = require('jquery')
var unique = require('uniq')

class MyClass {
  constructor (data) {
    this.data = data
  }

  getData () {
    return this.data
  }

  sumData () {
    return this.data.reduce((acc, val) => {
      return acc + val
    }, 0)
  }
}

const c = new MyClass([1, 2, 2, 3, 4, 5, 5, 5, 6])
console.log(c.getData())

setTimeout(() => {
  $('#heading').html(`Sum of ${c.getData().join(', ')} is ${c.sumData()}`)
}, 1000)
