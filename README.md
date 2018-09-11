# Jangle | Demo
> A demo of Jangle CMS


### Try it with Heroku (free)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


### Try it locally (also free)

1. __`docker-compose up`__ - (Runs MongoDB on port 27017)

1. __`npm install`__

1. __`npm run dev`__


### Quick Guide

Here's what you get with 20 lines of code:

```js
const jangle = require('@jangle/cms')

jangle.start({
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
```


![Sign up screen](quick-guide/sign-up.png)

![All your custom content types](quick-guide/content.png)

![Blog Posts list](quick-guide/blog-posts-1.png)

![Creating a new item](quick-guide/new-item.png)

![Updated blog posts](quick-guide/blog-posts-2.png)

![Publish button makes content live](quick-guide/publishing.png)

![API endpoint ready to go!](quick-guide/live-json.png)
