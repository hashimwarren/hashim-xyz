let displayURL = document.getElementById('displayurl')
let dispayUTMSource = document.getElementById('utm_source')
let dispayUTMMedium = document.getElementById('utm_medium')
let dispayUTMCampaign = document.getElementById('utm_campaign')
let dispayUTMTerm = document.getElementById('utm_term')
let dispayUTMContent = document.getElementById('utm_content')
let siteURL = document.URL

const a = document.createElement('a')




// Parse the URL
// reference - https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

a.href = siteURL

let params = new URLSearchParams(a.search)
let gclid = params.get('gclid')
let utm_source = params.get('utm_source')
let utm_medium = params.get('utm_medium')
let utm_campaign = params.get('utm_campaign')
let utm_term = params.get('utm_term')
let utm_content = params.get('utm_content')





// create empty object. Then fill object with key/value pairs of the URL's parameters
const objectUTM = {}

for (let param of params) {
    objectUTM[param[0]] = param[1]
}


// display object values on page

dispayUTMSource.innerHTML   = objectUTM.utm_source
dispayUTMMedium.innerHTML   = objectUTM.utm_medium
dispayUTMCampaign.innerHTML = objectUTM.utm_campaign
dispayUTMTerm.innerHTML     = objectUTM.utm_term
dispayUTMContent.innerHTML  = objectUTM.utm_content