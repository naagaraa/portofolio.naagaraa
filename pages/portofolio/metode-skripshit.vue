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
    <div class="container mt-md-5 py-3">
      <div class="container">
        <h3 class="mt-5">Gallery</h3>
        <p>{{galleryDescription}}</p>
        <div class="row mt-5">
          <div v-for="item in gallery" :key="item.index" class="col-md col-lg-4 mt-5">
              <img width="450px" class="img-fluid" :src="require(`~/assets/img/${item.image}`)" alt="test" />
              <div class="card-title">
                <p class="text-center">{{item.title}}</p>
              </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <ul class="list-group mt-4">
              <li class="list-group-item">Title : Metode Skripshit</li>
              <li class="list-group-item">Tag : library, project</li>
              <li class="list-group-item">Language : PHP, PHP7</li>
              <li class="list-group-item">Stack : XAMPP, Tessract, GDimage, Imagick, vardumper, OOP, NATIVE, OCR, Windows</li>
              <li class="list-group-item">
                Source :
                <a href="https://github.com/naagaraa/metode-skripsi">github</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h3 class="mt-3">Description</h3>
            <p>
              what is that ? metode skripshit is my personal package library php
              publish at packagist can used with composer. this library include
              metode mostly used at skripsI write with OOP PHP. contains metode
              statistic, string, and image processing, I write this code from jurnal and some article
              what I'm reading.
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h3 class="mt-3">Documentation</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/naagaraa/metode-skripsi"
                  >github</a
                >
              </li>
            </ul>
            <h3 class="mt-3">Video</h3>
            <div class="row justify-content-center">
              <div class="col-md">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kcDqNJxyX5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="card-body">
                  <p class="card-title text-center">Demo Video about how installation and usage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppButtonScroll />
    </div>
    <AppFooter />
  </div>
</template>
<script>
const url = 'https://naagaraa.netlify.app/'
const article = {
  title: 'Dev Journey - portofolio - Metode Skripshit',
  image: 'dev-journey.png',
  description:
    'dev journey my portfolio, this is my journey to become a developer',
  url: 'https://naagaraa.netlify.app/blog/',
}
export default {
  data(){
    return {
      galleryDescription : "this is about orion gallery or screen shoot about the apps",
      gallery : [
        {
          title : "official documentation",
          image : "metode-skripshit-docs.png"
        },
        {
          title : "documentation tools available",
          image : "metode-skripshit-weapon.png"
        },
        {
          title : "documentation linear regresion",
          image : "metode-skripshit-linear-regresion.png"
        },
        {
          title : "documentation image processing",
          image : "metode-skripshit-image.png"
        },
        {
          title : "package has been publish on public",
          image : "metode-skripshit-package.png"
        },
      ],

    }
  },
  head() {
    return {
      title: 'Dev Journey - portofolio - Metode Skripshit',
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
