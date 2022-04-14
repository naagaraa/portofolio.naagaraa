---
body: Object
excerpt: Object
toc: Array
title: My first Blog Post
description: Learning how to use @nuxt/content to create a blog
profile:
img: https://images.unsplash.com/photo-1577974869458-58f694694aad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
alt: my first blog post
author:
  name: Miyuki Nagara
  bio: Learner, Fullstack Web Developper main Language PHP and Javascript, and Framework Stack Laravel, Vuejs 3, and for UI component I'am used Boostrap.
---

Welcome to my first blog post using content module
Founder of WowThemes.net and creator of <b>"Mediumish"</b>{" "}
theme that you're currently previewing. Developing asdad
professional premium themes, templates, plugins, scripts
since 2012.

<p>
Founder of WowThemes.net and creator of <b>"Mediumish"</b>{" "}
theme that you're currently previewing. Developing
professional premium themes, templates, plugins, scripts
since 2012.</p>
<p>
Founder of WowThemes.net and creator of <b>"Mediumish"</b>{" "}
theme that you're currently previewing. Developing
professional premium themes, templates, plugins, scripts
since 2012.</p>
<p>
Founder of WowThemes.net and creator of <b>"Mediumish"</b>{" "}
theme that you're currently previewing. Developing
professional premium themes, templates, plugins, scripts
since 2012.</p>

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```
