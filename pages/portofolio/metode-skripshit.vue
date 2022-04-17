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
      <h3 class="text-center mx-auto my-3 mt-3">Metode Skripshit</h3>
      <p class="text-center mb-5">
        personal blog, I think they need know about me and what i'm doing in day
        by days i programming
      </p>
      <div class="container-fluid">
         <p>detail coming soon</p>
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
