<template>
  <div>
    <!-- <AppSearchInput /> -->
    <AppHeader />
    <!-- start banner -->
    <AppBanner />
    <!-- end banner -->
    <div id="app" class="container mt-5 mb-5">
      <h3 class="text-center mx-auto my-5">About Topic</h3>
      <div class="container-fluid d-flex justify-content-center ps-3">
        <div class="row">
          <div v-for="item in Topic" :key="item.id" class="col-md">
            <div class="card">
              <img
                :src="item.image"
                class="card-img-top"
                alt="gambar"
              />
              <div class="card-body">
                <h5 class="card-title text-center">{{item.name}}</h5>
                <p class="card-text">
                  {{item.description}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  data(){
    return {
      Topic: [
        {
          name: 'Programming',
          image : "https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          description:
            "Some quick story about Programming when i'am learn something",
        },
        {
          name: 'Developer story',
          image : "https://images.unsplash.com/photo-1560415755-bd80d06eda60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=991&q=80",
          description:
             "Some quick story about Development when i'am learn something",
        },
        {
          name: 'Security',
          image : "https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          description:  "Some quick story about Security when i'am learn something",
        },
        {
          name: 'Note',
          image : "https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          description:
             "Some quick note for my self when i'am learn something",
        },
      ],
    }
  },
  head() {
    const url = 'https://naagaraa.netlify.app/'
    const article = {
      title: 'Dev Journey - Home',
      image: 'dev-journey.png',
      description:
        "personal Dev Story, I think they need know about me and what i'm doing in day by days i programming",
      url: 'https://naagaraa.netlify.app/blog/',
    }
    return {
      title: 'Dev Journey - Home',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'og:title',
          name: 'og:title',
          content: article.title,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${url}${article.image}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: article.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `${this.$config.baseURL}${this.$route.path}`,
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: '', href: '/favicon.ico' }],
    }
  },
}
</script>
