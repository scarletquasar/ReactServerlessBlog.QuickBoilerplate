# Minimal React Serverless Blog
A minimal serverless manual React-based blog boilerplate. <a href="https://peaceful-wescoff-8ed389.netlify.app/">Demo</a>.
Info: Work in progress.

# TODO:

- [ ] Accessibility optimization
- [ ] SEO optimization
- [ ] Web responsiveness in mobile devices
- [ ] Detailed documentation

# How To

## Install

```sh
# Clone the repository
$ git clone https://github.com/EternalQuasar0206/react-serverless-blog-boilerplate
$ cd react-serverless-blog-boilerplate

# Install the dependencies
$ yarn install --force

# Run the project
$ yarn start
```

## Create a post
To create a post you must add an object following the pattern of the `public/content/posts.json` file. Each post
should have their equivalent in pt-Br and en-Us at the end of their source files (inside of `public/content/posts`).

Example:

<details>

<img src="https://i.imgur.com/n9gSvrV.png">
<img src="https://i.imgur.com/jS5n6oz.png">

</details>

# Routes

`/` - Root
<br>

`/post/{identifier}` - Post URL
<br>

`/search/{query}` - Search URL