<template lang="">
  <div class="banner">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-10 align-self-center">
          <div class="search">
            <h1 class="text-center mb-5">What you find here ?</h1>
            <span>You can type at here : </span>
            <p></p>
            <!-- <form class="d-flex">
              <input
                v-model="searchQuery"
                type="search"
                autocomplete="off"
                class="form-control me-2 search-box"
                placeholder="Wanna try find something?"
                aria-label="Search"
                id="find_text"
              />
            </form>
            <ul class="list-group" v-if="articles.length">
              <li
                class="list-group-item nav-item bg-dark"
                v-for="article of articles"
                :key="article.slug"
              >
                <NuxtLink
                  class="nav-link text-white"
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                >
                  {{ article.title }}
                </NuxtLink>
              </li>
            </ul> -->
            <AppSearch />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     searchQuery: '',
  //     articles: [],
  //   }
  // },
  // watch: {
  //   async searchQuery(searchQuery) {
  //     if (!searchQuery) {
  //       this.articles = []
  //       return
  //     }
  //     this.articles = await this.$content('articles')
  //       .limit(6)
  //       .search(searchQuery)
  //       .fetch()
  //   },
  // },
}
</script>
<style lang=""></style>
