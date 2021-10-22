# Lowtide

NodeJS file logger.

Features:

* Extremely minimal and fast, no dependencies
* Logs to file asynchronously
* Supports formatted logging of arrays, objects and dates
* Can be used to log to file with `console.log` and `console.error` in production

### Install
```js
npm i lowtide
```

### Usage
```js
// Require
const lowtide = require('lowtide')

// Init logger on this file
const log = lowtide('file.log')

// Log string
log('Something happened!')

// Log object
log({ name: 'something' })

// Log console log and error to file
if (process.env.NODE_ENV == 'production') {
  console.log = lowtide('../log/app.log')
  console.error = lowtide('../log/err.log')
}
```

MIT Licensed. Enjoy!
