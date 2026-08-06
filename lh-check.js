const fs = require('fs')
if (fs.existsSync('./lh.json')) {
  const r = JSON.parse(fs.readFileSync('./lh.json'))
  console.log('Score:', r.categories.performance.score * 100)
  Object.entries(r.audits).forEach(([k, v]) => {
    if (v.score !== null && v.score < 0.9) {
      console.log(k, 'Score:', v.score, 'Value:', v.displayValue)
    }
  })
}
