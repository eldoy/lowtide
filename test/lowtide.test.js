const lowtide = require('../index.js')
const fs = require('fs')

beforeEach(() => {
  try {
    fs.unlinkSync('file.log')
  } catch(e) {}
})

it('should log a string', (done) => {
  const log = lowtide('file.log')
  log('hello')

  setTimeout(function() {
    const result = fs.readFileSync('file.log', 'utf8')
    expect(result.trim()).toBe('hello')
    done()
  }, 100)
})

it('should log a formatted string', (done) => {
  const log = lowtide('file.log')
  log('hello %d', 5000)

  setTimeout(function() {
    const result = fs.readFileSync('file.log', 'utf8')
    expect(result.trim()).toBe('hello 5000')
    done()
  }, 100)
})

it('should log an object', (done) => {
  const log = lowtide('file.log')
  log({ hello: 1 })

  setTimeout(function() {
    const result = fs.readFileSync('file.log', 'utf8')
    expect(result.trim()).toBe('{\n  "hello": 1\n}')
    done()
  }, 100)
})

it('should log a date', (done) => {
  const log = lowtide('file.log')
  const date = new Date
  const iso = date.toISOString()
  log(date)

  setTimeout(function() {
    const result = fs.readFileSync('file.log', 'utf8')
    expect(result.trim()).toBe(iso)
    done()
  }, 100)
})

it('should log a number', (done) => {
  const log = lowtide('file.log')
  log(999)
  setTimeout(function() {
    const result = fs.readFileSync('file.log', 'utf8')
    expect(result.trim()).toBe('999')
    done()
  }, 100)
})
