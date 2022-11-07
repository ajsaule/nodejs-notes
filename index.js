// const Person = require('./person'); // module import is called common.js 

// // instantiating person object from the Class 
// const person1 = new Person('Jon Doe', 30)
// // calling the greeting method 
// person1.greeting()

// // console.log(person)

const Logger = require('./logger')

const logger = new Logger()

logger.on('message', (data) => console.log('Called Listener', data))

logger.log('Hello World')
logger.log('Hi')
logger.log('Hey')