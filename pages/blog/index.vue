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
      <p class="text-center mb-5">
        personal blog, I think they need know about me and what i'm doing in day
        by days i programming
      </p>
      <div class="container-fluid">
        <div class="row">
          <!-- <div  > -->
          <div
            v-for="article of articles"
            :key="article.slug"
            class="col-12 col-md-3 col-lg-3 mb-4"
          >
            <div class="card mx-auto text-center">
              <NuxtLink
                class="text-dark nuxt-link"
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              >
                <img
                  class="card-img-top"
                  :src="article.img"
                  alt="Sample Title"
                />
                <div class="card-body">
                  <h6 class="card-title text-center">
                    {{ article.title.substring(0, 26) }}
                  </h6>
                  <!-- <span class="d-none d-sm-block card-text text-center text-small"
                  >by {{ article.author.name }}</span
                > -->
                  <p class="card-text mt-3 mb-5">
                    {{ article.description.substring(0, 50) }}
                  </p>
                </div>
              </NuxtLink>
            </div>
            <AppButtonScroll />
          </div>

          <!-- <Pagination :nextPage="nextPage" :pageNo="1" urlPrefix="/blog/all" /> -->

          <!-- </div> -->
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  name: 'BlogView',
  async asyncData({ $content, params }) {
    const pageNo = parseInt(params.number)
    const numArticles = 9

    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .where({
        published: {
          $ne: false,
        },
      })
      .limit(9)
      .skip(9 * (pageNo - 1))
      .sortBy('createdAt', 'asc')
      .fetch()

    // check if have error code
    let error
    if (!articles.length) {
      return error({ statusCode: 404, message: 'No articles found!' })
    }

    const nextPage = articles.length === numArticles

    return {
      nextPage,
      articles,
      pageNo,
    }
  },
  head() {
    return {
      title: 'Dev Journey - blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'developper story and my journey in software engineering',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: '', href: '/favicon.ico' }],
    }
  },
}
</script>
<style>
.card-body {
  height: 24vh;
  overflow: hidden;
  padding-bottom: 20px !important;
}

@media (max-width: 400px) {
  .card-img-top {
    height: 10vh !important;
  }
}

.nuxt-link {
  text-decoration: none !important;
}
</style>
