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
              src="/orion-1.png"
              class="mt-5 img-fluid mx-auto d-block"
              alt="banner"
            />
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <!-- <h2 class="text-center" >MINI MVC PHP NATIVE</h2> -->
            <ul class="list-group mt-4">
              <li class="list-group-item">Title : orion scanner</li>
              <li class="list-group-item">Tag : web apps, string matching, project</li>
              <li class="list-group-item">Language : PHP</li>
              <li class="list-group-item">
                Source :
                <a href="https://github.com/naagaraa/mini-mvc-php-native"
                  >github</a
                >
              </li>
            </ul>
            <h3>Description</h3>
            <p>
             what is orion ? orion this my final project in my univercity. this is original build from my framework mini mvc php native in lates version. i'm open source source for this project. orion scanner is simple sistem similarity index detection for text, and document implementation algoritm winnowing and rabin karp for comparison. the algorithm i save in difference program. i'm making stand alone for algorithm at metode-skrisi. that's stand alone algorithm you can installed with composer, package manager for php.
            </p>
            <h3>Installation</h3>
             <p>you can install with clone repo like this : </p>
            <p><b>git clone https://github.com/naagaraa/orion-scanner.git</b></p>
            <p>
              or you can check more detail about this project in this link below
            </p>
            <h3>Documentation</h3>
             <p>and this Documentation for this project, I'm not only build but I'm also write Documentation, because Documentation is very important, maybe it can say technical writer job. but in this docs</p>
            <p>
              <a href="https://github.com/naagaraa/orion-scanner"
                >github</a
              >
            </p>
            <h3>Screen Shoot</h3>
              <img
                src="/orion-1.png"
                class="mt-5 img-fluid mx-auto d-block"
                alt="banner"
              />
              <span class="d-block text-center">login page</span>
              <img
                src="/orion-2.png"
                class="mt-5 img-fluid mx-auto d-block"
                alt="banner"
              />
              <span class="d-block text-center" >scanner page</span>
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
