const fs = require('fs');
const path = require('path');

// Create a folder 
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
  console.log('folder created...')
})

// Create and write to file 
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', (err) => {
  if (err) throw err;
  console.log('file written to...')

  // Append to file 
  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', (err) => {
    if (err) throw err;
    console.log('file written to...')
  })
})

// Read file 
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
})

// Read file 
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello-world.txt'), (err, data) => {
  if (err) throw err;
  console.log('File renamed...')
})

