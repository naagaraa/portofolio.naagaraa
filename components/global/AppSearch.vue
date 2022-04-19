<template lang="">
  <div>
    <form class="d-flex mt-5">
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
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
}
</script>
<style lang=""></style>
