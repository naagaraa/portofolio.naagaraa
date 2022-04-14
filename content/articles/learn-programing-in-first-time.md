---
body: Object
excerpt: Object
toc: Array
title: Learn Programing in First Time
description: learn programing in fist time at campus
profile: /img.jpg
img: https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
alt: Learn Programing in First Time
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
