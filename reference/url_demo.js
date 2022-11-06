const url = require('url');

const myUrl = new URL('http://athanspainting.com/index.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())
// Host (root domain)
console.log(myUrl.host)
// Hostname
console.log(myUrl.hostname) // same as above but doesn't include the protected
// Pathname 
console.log(myUrl.pathname)
// Serialized query
console.log(myUrl.search)
// Params object 
console.log(myUrl.searchParams)
// Add param
myUrl.searchParams.append('abc', '123') // adds an extra set of parameters 
console.log(myUrl.searchParams)
// Loop through params 
myUrl.searchParams.forEach((value, name) =>  console.log(`${name}: ${value}`))