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

        <div class="row mt-4">
          <div class="col">
            <img src="https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="mt-5 img-fluid mx-auto d-block" alt="banner">
          </div>
        </div>

        <div class="row mt-4 ">
          <div class="col">
            <h2 class="text-center" >MINI MVC PHP NATIVE</h2>
            <ul>
              <li>Title :mini mvc php native</li>
              <li>Tag  : framework, composer </li>
              <li>Programing :PHP7 </li>
              <li>source :
                <ul>
                  <li><a>github</a></li>
                  <li><a>packagist</a></li>
                </ul>
              </li>
               <li>description : 
                 <p>
                   This project is currently on archive, because, for now, i'm currenly learn new language suck as golang. and i'm also tired for maintenance this framework haha. and this framework it's peronal my fortofolio for php languague.
pembukaan indonesia :

Hi, Project ini dibuat dari latihan saya belajar web programing dari berbagai sumber di internet seperti youtube, stackoverflow dan github. project ini merupakan php native yang di buat menggunakan pattern MVC dengan konsep OOP (Object oriented programing )

Thank you kindly for the ⭐ and forks. When I first started working on this project in 2019, I had just undergraduated from college and had no prior exposure to web-development or open source. cause i'am start learn web-development and also explorer to many algorithm mostly used at skripsi (TA). so why i'am not build the package for reusability ? why not.

Without financial support, it was overwhelming to fix these issues, adding new method, reading a journal, not to mention that I felt like an absolute imposter. With a heavy heart 💔, I decided to keep continue :( and this in my portofolio my project
                 </p>
               </li>
            </ul>
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

</style>
