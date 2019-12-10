
  
// const jwt = require('jsonwebtoken')

// const logger = (req, res, next) => {
//   console.log('Logging route:' ,'/users', new Date().toISOString())
//   next()
// }

// const authenticate = (req, res, next) => {
//   let header = req.headers['authorization']
//   console.log(header)
  
//   header = header.split(' ')
//   console.log(header)

//   let token = header[1]

//   console.log(token)

//   jwt.verify(token, 'secret', function(err, decoded){
//     if(err){
//       console.log('Bad Token')
//     }else{
//       req.user = decoded
//       console.log('Triumph')
//     }
//     console.log(decoded)
//   })
//   next()

//   module.exports = {
//     logger,
//     authenticate
//   }

const jwt = require('jsonwebtoken')

const logger = () => {}

const authenticate = () => {}

module.exports = {
  logger,
  authenticate
}