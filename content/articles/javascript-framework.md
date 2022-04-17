---
body: Object
excerpt: Object
toc: Array
title: Javascript Framework
description: Frontend populer in Javascript and you must to know, what is thats
profile: /img.jpg
img: https://matob.web.id/random/wp-content/uploads/sites/2/2021/12/JS-LOGO.png
alt: Javascript Framework
author:
  name: Miyuki Nagara
  bio: Learner, Fullstack Web Developper main Language PHP and Javascript, and Framework Stack Laravel, Vuejs 3, and for UI component I'am used Boostrap.
---

you welcome to dev journey,
in last year i learn javascript framework for frontend. but you know, chose a framework is hard, seriously is not easy, while i chose, i need buy them with my time for learning. javascript is popular language for web developper runing at your browser, javascript is langauge for client-side rendering. some people say javascript can running in server-side rendering. yes it's true but javascript need more one technology it's called nodejs with V8 engine, with that Javascript can running at server-side.

but now that what I want tell you guys, because my background came from PHP Developper while I join in univercity 2017. in 2021 to now framework javascript very high demand in indonesia. i know framework JS in 2018, my first learn is react js but is not deep, only for trying "WHAT IS REACT, AND USED WITH THAT?" i'm not expert in programming and also not best in programmer, but i know how to learn. allright back to the topic.

this most javascript framework used

# Angular JS

angular js is develop by Angular team in google. I'm talking so much for this framework because i'm never used that hahaha.

angular js is a structural framework for dynamic web apps. With Angular JS, Designers can use HTML as the template langauge and it allows for the extension of HTML's syntax to convery the application's components effortlessly. Angular makes much of the code you would otherwise have to write completely redudant.

Despite the fact that Angular Js is commmly related to SPA (Single Page Application). you can use Angular to build any kind of app, taking advantage of features like: Two-way binding, templating, RESTful api handling, modularization, AJAX, handling, Depedency injection, etc.

for more detail you can visited official documentation

- [old version angular js](https://angularjs.org/)
- [new version angular js](https://angular.io/)

# React JS

allright this react js, if you chose this tech for your skill set, I'll say "your are amazing bro" hahaha. what is react ? react is framework or it's can say libraries javascript agnostic for frontend web development, react develop by facebook and it's open source. why i'm tell this amazing ? react js have react native for hybrid mobile development. so if you want be full stack javascript. you can chosee this framework learn once build two flatform hahaha.

react allows developer to create large web applications tha can change data, without reloading the page. the main purpose of react is to be fast,scalable, and simple. it work only on user interfaces in the application

## documentation for detail about react js

this page will help you know in the deep about react js

- [react js](https://reactjs.org/)
- [documentation](https://reactjs.org/docs/getting-started.html)

you need to know about package manager for use in javascript framework like NPM, YARN or P2M, chose one what you want for learning.

## example syntax in react js

this example code or consept in react js

### components

this is function component the file Welcome.js

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

this is class component the file Welcome.js

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

### props

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Sara" /> // this send props to Welcome component
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)
```

what is props ? it's simple to say props is parameter to send in the function like that's but in react there call props.

```javascript
// react style
function message(props) {
  return console.log(props)
}

message('hello world') // it'll return hello world

// but in react you access by object your send

// native javascript
function message2(message) {
  return console.log(message)
}

message2('hi, miyuki')
```

if you chosee react js for your stack may you can learn full stack js with react js, check this link below. your can learn about next.js, electron.js and reactnative

- [reactjs](https://reactjs.org/tutorial/tutorial.html)
- [electron.js](https://www.electronjs.org/docs/latest)
- [react-native](https://reactnative.dev/docs/getting-started)

# Vue js

allright this is vue js. currently I learn this framework, hahaha why i chose this framework ? maybe i'll tell my story in another post/ in this section i just share what i know and learning about this framework.

Vue JS is a Javascript Framework for building user interfaces (UI) and single-page applications (SPA). just like the best of them, Vue.js is open source. it utilizes a mode-view-viewmodel(MVVM) architectural pattern [here for resource](https://trio.dev/blog/why-use-vue-js).

vue js design by Evan You and released in , but now vue js has release Vue Js 3.

- [vue js 2](https://v2.vuejs.org/)
- [vue js 3](https://vuejs.org/) this version currently what I used

## example code

### component

this is home component

```vue
<script>
export default {
  // code here
}
</script>

<template>
  <div>
    <h1>this is component home</h1>
  <div>
</template>
```

### extent component

this is compnent extend

**this is file AppButton.vue**

```vue
<script>
export default {
  // code here
}
</script>

<template>
  <div>
   <button>click here</button>
  <div>
</template>
```

**this is file Home.vue**

```vue
<script>
import AppButton from "./AppButton.vue"
export default {
  // code here
  components : {
    AppButton
  }
}
</script>

<template>
  <div>
    <h1>this is component home</h1>
    <AppButton />
  <div>
</template>
```

### props

this is example for props

**this is file AppButton.vue**

```vue
<script>
export default {
  props : {

  }
}
</script>

<template>
  <div>
   <button>click here</button>
  <div>
</template>
```

**this is file Home.vue**

```vue
<script>
import AppButton from "./AppButton.vue"
export default {
  // code here
  components : {
    AppButton
  }
}
</script>

<template>
  <div>
    <h1>this is component home</h1>
    <AppButton />
  <div>
</template>
```
