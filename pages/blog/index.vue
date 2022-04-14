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
      <h5 class="my-3">Search here</h5>
      <AppSearch />
      <h3 class="text-center mx-auto my-3 mt-3">Blog</h3>
      <p class="text-center">this is update for new post</p>
      <div class="container-fluid">
        <div class="row">
          <!-- <div  > -->
          <div
            class="col col-md-4 col-lg-3 mb-4"
            v-for="article of articles"
            :key="article.slug"
          >
            <div class="card mx-auto text-center">
              <NuxtLink
                class="nav-link text-dark"
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              >
                <!-- <img
                  class="card-img-top img-thumbnail"
                  :src="article.img"
                  alt="Sample Title"
                /> -->
              <div class="card-body">
                <h6 class="card-title text-center">{{ article.title }}</h6>
                <span class="d-none d-sm-block card-text text-center text-small"
                  >by {{ article.author.name }}</span
                >
                <p class="card-text mt-3">{{ article.description }}</p>
              </div>
              </NuxtLink>
            </div>
          </div>

          <!-- </div> -->
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
<style>

  /* @media screen and (min-width:480px) {
   p{
    font-size:5vw
  } */
/* } */
</style>
