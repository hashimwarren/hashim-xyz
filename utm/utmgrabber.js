let displayURL = document.getElementById('displayurl')
let dispayUTMSource = document.getElementById('utm_source')
let dispayUTMMedium = document.getElementById('utm_medium')
let dispayUTMCampaign = document.getElementById('utm_campaign')
let dispayUTMTerm = document.getElementById('utm_term')
let dispayUTMContent = document.getElementById('utm_content')
let siteURL = document.URL


// Show URL on the page
// displayURL.textContent += siteURL


// Parse the URL
// reference - https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

const a = document.createElement('a')

a.href = siteURL

let params = new URLSearchParams(a.search)
let gclid = params.get('gclid')
let utm_source = params.get('utm_source')
let utm_medium = params.get('utm_medium')
let utm_campaign = params.get('utm_campaign')
let utm_term = params.get('utm_term')
let utm_content = params.get('utm_content')


dispayUTMSource.innerHTML = utm_source
dispayUTMMedium.innerHTML = utm_medium
dispayUTMCampaign.innerHTML = utm_campaign
dispayUTMTerm.innerHTML = utm_term
dispayUTMContent.innerHTML = utm_content