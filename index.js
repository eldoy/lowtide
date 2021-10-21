const fs = require('fs')
const path = require('path')
const util = require('util')

module.exports = function(file) {
  file = path.resolve(file)

  return function(...args) {
    let x = args.length > 1
      ? util.format(...args)
      : args[0]

    if (typeof x == 'object') {
      x = x instanceof Date
        ? x.toISOString()
        : JSON.stringify(x, null, 2)
    }

    fs.appendFile(file, `${x}\n`, function(err) {
      if (err) process.stdout.write(`${x}\n`)
    })
  }
}
