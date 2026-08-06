import fs from 'fs'
import { execSync } from 'child_process'

console.log('Running Lighthouse Audit...')
try {
  execSync('npx lighthouse http://localhost:3000 --only-categories=performance --output=json --output-path=./lh-results.json --chrome-flags="--headless --no-sandbox"', { stdio: 'inherit' })
  if (fs.existsSync('./lh-results.json')) {
    const data = JSON.parse(fs.readFileSync('./lh-results.json', 'utf8'))
    const score = Math.round(data.categories.performance.score * 100)
    console.log('====================================')
    console.log(`LIGHTHOUSE PERFORMANCE SCORE: ${score}/100`)
    console.log('====================================')
    console.log('FCP:', data.audits['first-contentful-paint']?.displayValue)
    console.log('LCP:', data.audits['largest-contentful-paint']?.displayValue)
    console.log('TBT:', data.audits['total-blocking-time']?.displayValue)
    console.log('CLS:', data.audits['cumulative-layout-shift']?.displayValue)
    console.log('Speed Index:', data.audits['speed-index']?.displayValue)
  }
} catch (e) {
  console.error('Audit Error:', e.message)
}
