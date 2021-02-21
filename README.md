# Lowtide

NodeJS file logger.

Features:

* Extrememly minimal and fast, no dependencies
* Logs to file asynchronously
* Supports formatted logging of arrays, objects and dates

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
```

MIT Licensed. Enjoy!
