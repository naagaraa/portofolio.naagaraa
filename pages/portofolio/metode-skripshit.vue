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
      <div class="container container-porto">
        <div class="row mt-4">
          <div class="col">
            <img
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
              class="mt-5 img-fluid mx-auto d-block"
              alt="banner"
            />
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <!-- <h2 class="text-center" >MINI MVC PHP NATIVE</h2> -->
            <ul class="list-group mt-4">
              <li class="list-group-item">Title : Metode Skripshit</li>
              <li class="list-group-item">Tag : libraries, project</li>
              <li class="list-group-item">Language : PHP, PHP7</li>
              <li class="list-group-item">
                Source :
                <a href="https://github.com/naagaraa/metode-skripsi"
                  >github</a
                >
              </li>
            </ul>
            <h3>Description</h3>
            <p>
              what is that ? metode skripshit is my personal package library php publish at packagist can used with composer. this library include metode mostly used at skripsI write with OOP PHP. contains metode simple ml and string
            </p>
            <h3>Installation</h3>
             <p>you can install with composer like this : </p>
            <p><b>composer require nagara/metode-skripshit</b></p>
            <p>
              or you can check more detail about this project in this link below
            </p>
            <h3>Documentation</h3>
             <p>and this Documentation for this project, I'm not only build but I'm also write Documentation, because Documentation is very important, maybe it can say technical writer job. but in this docs, I write in indonesia Language, not english</p>
            <p>
              <a href="https://github.com/naagaraa/metode-skripsi#project-documentation"
                >github</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.container-porto{
  width: 50em;
}
</style>
