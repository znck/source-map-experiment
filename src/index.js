const { encode } = require('sourcemap-codec')

const sources = ['input.vue-html']
const names = ['condition', 'expression']
const mappings = encode([
  [], // 1
  [], // 2
  [], // 3
  [
    // 4
    [10, 0, 0, 11, 0],
    [24, 0, 0, 20],
    [25]
  ],
  [], // 5
  [], // 6
  [
    // 7
    [9, 0, 0, 23],
    [18, 0, 0, 31],
    [19],
    [21, 0, 0, 34],
    [31],
  ],
  [
    // 8
    [8, 0, 0, 40],
    [12, 0, 0, 44],
    [15, 0, 0, 46],
    [21, 0, 0, 52],
    [22],
  ],
  [
    // 9
    [6, 0, 1, 53],
    [26, 0, 1, 5],
    [41, 0, 1, 15],
    [42, 0, 2, 0],
  ],
  [], // 10
  [], // 11
  [], // 12
])

const fs = require('fs')
const path = require('path')

fs.writeFileSync(
  resolve('output.js.map'),
  JSON.stringify(
    {
      version: 3,
      sourcesRoot: '',
      sources,
      sourcesContent: sources.map(read),
      names,
      mappings,
    },
    null,
    2
  )
)

function resolve(fileName) {
  return path.resolve(__dirname, fileName)
}

function read(fileName) {
  return fs.readFileSync(resolve(fileName), { encoding: 'utf-8' })
}
