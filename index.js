const fs = require('fs')
const path = require('path')

module.exports = file => {
  file = path.resolve(file)

  return x => {
    if (typeof x == 'object') {
      x = x instanceof Date
        ? x.toISOString()
        : JSON.stringify(x, null, 2)
    }
    fs.appendFile(file, `${x}\n`, err => {
      if (err) console.log(x)
    })
  }
}
