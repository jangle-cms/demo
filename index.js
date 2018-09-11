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
      contact: {
        email: String,
        phone: String,
        fax: String
      }
    },
    'Blog Post': {
      name: {
        label: 'Title',
        type: String,
        required: true
      },
      tags: [String],
      date: {
        type: Date,
        required: false
      },
      authors: [{
        type: jangle.types.relationship,
        ref: 'Author'
      }]
    }
  }
})
