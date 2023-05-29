const {userData } = require('../constants')

const resolvers = {
    Query:{
        users() {
            return userData
        }
    }
}

module.exports =  {resolvers}