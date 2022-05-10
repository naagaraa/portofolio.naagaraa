<template lang="">
  <div>
    <!-- this page home blog
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul> -->
    <!-- <pre>{{ articles }}</pre> -->
    <AppHeader />
    <div id="app" class="container mt-md-5 py-3">
      <div class="container">
        <div class="row mt-5">
          <div class="col">
            <img
              loading="lazy"
              src="/mini-mvc.png"
              class="mt-5 img-fluid"
              alt="banner"
            />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <ul class="list-group mt-4">
              <li class="list-group-item">Title : MINI MVC PHP NATIVE</li>
              <li class="list-group-item">Tag : framework, project</li>
              <li class="list-group-item">Language : PHP, PHP7</li>
              <li class="list-group-item">
                Source :
                <a href="https://github.com/naagaraa/mini-mvc-php-native"
                  >github</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h3 class="mt-3">Description</h3>
            <p>
              Hi, this project was created from my practice of learning web
              programming from various sources on the internet such as youtube,
              stackoverflow and github. This project is a native php created
              using the MVC pattern with the concept of OOP (Object Oriented
              Programming). Thanks for and the fork. When I first started
              working on this project in 2019, I had just graduated from college
              and had no previous experience in web development or open source.
              Because I started to learn web development and also explore many
              algorithms which are widely used in thesis (TA). so why don't I
              make a reusable package? Why not. Without financial support, it is
              very difficult to fix this problem, add new methods, read
              journals, not to mention I feel like an absolute cheater. With a
              heavy heart, I decided to continue :( and this is in my project
              portfolio
            </p>
            <h3 class="mt-3">Documentation</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/naagaraa/mini-mvc-php-native#bug-and-problem"
                  >github</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://nagara.gitbook.io/code-zero-project/"
                  >gitbook</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AppButtonScroll />
    </div>
    <AppFooter />
  </div>
</template>
<script>
import '../../assets/css/main.css'
export default {
  head() {
    const url = 'https://naagaraa.netlify.app/'
    const article = {
      title: 'Dev Journey - portofolio - mini mvc php native',
      image: 'dev-journey.png',
       description:
        "dev journey my portfolio, this is my journey to become a developer",
      url: 'https://naagaraa.netlify.app/blog/',
    }
    return {
      title: 'Dev Journey - portofolio - mini mvc php native',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'og:title',
          name: 'og:title',
          content: article.title,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${url}${article.image}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: article.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `${this.$config.baseURL}${this.$route.path}`,
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: '', href: '/favicon.ico' }],
    }
  },
}
</script>
<style scoped>
.container p {
  font-size: 14px !important;
  text-align: justify;
}
</style>
