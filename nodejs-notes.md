# Node.js Notes 

## What is Node.js 
- JavaScript Runtime (Not a language or framework)
  - Runtime meaning instead of running in a browser environment it runs on your machine as a service or a runtime 
- Built on the V8 JS engine (same as google chrome)
- Mostly written in C++ 
- Allows us to run JS on the server (just like we can with python, PHP, C# etc)

## It may help to learn these first 
- HTTP (status codes, headers, etc)
- JSON (Rest APIs and Microservices will serve JSON as the content type)
- Arrow Functions 
- Promises 
- MVC Pattern (use pretty commonly with Node.js)

## Why use Node
- Extremely fast, efficient and highly scalable 
- Event driven, non-blocking I/O model 
- Poplar in the industry (MEAN, MERN stacks)
- Allows use to use the same language on frontend and backend (JS)

## Non-blocking I/O
- Works on a single thread using non-blocking I/O calls (async)
  - PHP is synchronous and runs on multiple threads, every time a req is made it spawns a new thread and threads take up sys memory and can max out what the memory load can handle. Since it is synchronous it has to wait for one process to complete before starting the next.
  - Whereas a single thread on Node.js can support 10,000s of connections which are held what is called the event loop, this optimises throughput and scalability in applcations with many I/O operations. 

### Nodes event loop
- Single threaded, even'ts are run async. When an event is triggered a callback fires, this way the system doesn't have to run a process and sit and wait for it to end and then run the next. It simply fires an event or process and moves on, once that even't is fulfilled it runs in a loop. 

## Best projects that Node is good for
- REST API & Microservices (MongoDB and Node make a good team)
- Real Time Services (Chat, Live Updates)
- CRUD Apps - Blogs, Shopping Carts, Social Networks  

## Node modules Node
- Core Node modules (path, fs, http, etc)
- 3rd party modules/ packages installed via NPM 
- Custom modules (files)

```js
const path = require('path');
const myFile = require('./myFile');
```

