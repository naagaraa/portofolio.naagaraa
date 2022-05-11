<template lang="">
  <div>
    <AppHeader />
    <div id="app" class="container mt-5 pt-5">
      <div class="container-fluid justify-content-center ps-3">
        <div class="row mt-3">
          <div class="col text-center">
            <h2>Hire Me</h2>
            <button
              class="btn btn-dark contact"
              onclick="window.open('mailto:ekajayanagaraa@.com')"
            >
              contact me, Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  head() {
    const url = 'https://naagaraa.netlify.app/'
    const article = {
      title: 'Dev Journey - hire me',
      image: 'dev-journey.png',
      description:
        "personal Dev Story, I think they need know about me and what i'm doing in day by days i programming",
      url: 'https://naagaraa.netlify.app/blog/',
    }
    return {
      title: 'Dev Journey - Hire Me',
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
<style scoped>
.btn-dark {
  background-color: black;
}
.contact {
  color: white;
  cursor: pointer;
}
.contact:hover {
  color: cyan;
}
</style>
