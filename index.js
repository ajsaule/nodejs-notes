// const Person = require('./person'); // module import is called common.js

// // instantiating person object from the Class
// const person1 = new Person('Jon Doe', 30)
// // calling the greeting method
// person1.greeting()

// // console.log(person)

// Important to know that when using a framework like Express, it makes creating web servers a lot easier

const http = require('http')
const path = require('path')
const fs = require('fs')

// If we wanted this to be a REST API, we wouldn't be serving HTML we would be serving JSON to the client
// below we are creating a server that gets a request and response 
const server = http.createServer((req, res) => {
  // Using the below method is not that efficient because you need to be able to serve css and images etc.
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
  //     if (err) throw err
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content)
  //   })
  // }
  // if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //     if (err) throw err
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content)
  //   })
  // }
  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'Bob Smith', age: 40 },
  //     { name: 'John Doe', age: 30 },
  //   ]
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users))
  // }

  // Build file path
  // looking in the public folder 
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  )

  // Extension of the file
  // get the extension 
  let extName = path.extname(filePath)

  // Initial content type
  let contentType = 'text/html'

  // Check ext and set content type
  // evaluate the extension based on the content type 
  // It's important to give the right content types when serving content from the backend 
  switch (extName) {
    case '.js':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break
    case '.json':
      contentType = 'application/json'
      break
    case '.png':
      contentType = 'image/png'
      break
    case '.jpg':
      contentType = 'image/jpg'
      break
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if ((err.code = 'ENOENT')) {
        // Means page is not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8')
          }
        )
        // [2] It's important to give the right status codes to the client when serving up content 
      } else {
        // Some server error occurred
        // [2]
        res.writeHead(500)
        res.end(`Server Error: ${err.code}`)
      }
    } else {
      // Successful req and returns a 200 
      // [2]
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8')
    }
  })
})

const PORT = process.env.PORT || 5001

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
