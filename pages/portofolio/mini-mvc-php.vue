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
              src="/mini-mvc.png"
              class="mt-5 img-fluid mx-auto d-block"
              alt="banner"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <!-- <h2 class="text-center" >MINI MVC PHP NATIVE</h2> -->
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
            <h3>Description</h3>
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
            <h3>Installation</h3>
             <p>you can install with composer like this : </p>
            <p><b>composer create-project nagara/mini-mvc-php-native belajarmvc</b></p>
            <p>
              or you can check more detail about this project in this link below
            </p>
            <h3>Documentation</h3>
             <p>and this Documentation for this project, I'm not only build but I'm also write Documentation, because Documentation is very important, maybe it can say technical writer job. but in this docs</p>
            <p>
              <a href="https://nagara.gitbook.io/code-zero-project/">gitbook</a>
            </p>
            <p>
              <a href="https://github.com/naagaraa/mini-mvc-php-native"
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
export default {}
</script>
<style>
.container-porto{
  width: 50em;
}
</style>
