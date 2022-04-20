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
        <div class="row mt-5">
          <div class="col">
              <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              class="mt-5 img-fluid img-thumbnail"
              alt="banner"
            />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <ul class="list-group mt-4">
              <li class="list-group-item">Title : Metode Skripshit</li>
              <li class="list-group-item">Tag : library, project</li>
              <li class="list-group-item">Language : PHP, PHP7</li>
              <li class="list-group-item">
                Source :
                <a href="https://github.com/naagaraa/metode-skripsi"
                  >github</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h3  class="mt-3">Description</h3>
            <p>what is that ? metode skripshit is my personal package library php publish at packagist can used with composer. this library include metode mostly used at skripsI write with OOP PHP. contains metode statistic and string</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h3  class="mt-3">Documentation</h3>
            <ul>
              <li>
                <a target="_blank" href="https://github.com/naagaraa/metode-skripsi"
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
  
}
</script>
<style scoped>
  .container p {
    font-size: 14px !important;
    text-align: justify;
  }
</style>
