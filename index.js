const jangle = require('@jangle/cms')

jangle.start({
  mongo: {
    content: process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/jangle',
    live: process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/jangle-live'
  },
  lists: {
    Author: {
      name: {
        type: String,
        required: true
      },
      email: String
    },
    'Blog Post': {
      name: {
        label: 'Title',
        type: String,
        required: true
      },
      author: {
        type: jangle.types.relationship,
        ref: 'Author'
      }
    }
  }
})
