<template lang="">
  <div>
    <form class="d-flex mt-5">
      <input
        id="find_text"
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        class="form-control me-2 search-box"
        placeholder="Wanna try find something?"
        aria-label="Search"
      />
    </form>
    <ul v-if="articles.length" class="list-group">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="list-group-item nav-item bg-dark"
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
