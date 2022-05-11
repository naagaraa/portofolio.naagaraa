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
              src="/orion-1.png"
              class="mt-5 img-fluid"
              alt="banner"
            />
            <img
              loading="lazy"
              src="/orion-2.png"
              class="mt-5 img-fluid"
              alt="banner"
            />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <ul class="list-group mt-4">
              <li class="list-group-item">Title : Orion Scanner</li>
              <li class="list-group-item">Tag : web apps, project, native</li>
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
              what is orion ? orion this my final project in my univercity. this
              is original build from my framework mini mvc php native in lates
              version. i'm open source source for this project. orion scanner is
              simple sistem similarity index detection for text, and document
              implementation algoritm winnowing and rabin karp for comparison.
              the algorithm i save in difference program. i'm making stand alone
              for algorithm at metode-skrisi. that's stand alone algorithm you
              can installed with composer, package manager for php.
            </p>
            <h3 class="mt-3">Documentation</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/naagaraa/orion-scanner#orion-scanner-project"
                  >github</a
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
export default {
  head() {
    const url = 'https://naagaraa.netlify.app/'
    const article = {
      title: 'Dev Journey - portofolio - orio-scanner',
      image: 'dev-journey.png',
      description:
        'dev journey my portfolio, this is my journey to become a developer',
      url: 'https://naagaraa.netlify.app/blog/',
    }
    return {
      title: 'Dev Journey - portofolio - orio-scanner',
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
