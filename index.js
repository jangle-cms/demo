const jangle = require('@jangle/cms')

jangle.start({
  mongo: {
    content: process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/jangle',
    live: process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/jangle-live'
  },
  lists: {
    'Blog Post': {
      name: {
        label: 'Title',
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true,
        richText: true
      }
    }
  }
})
