<template lang="">
  <div>
    <AppHeader />
    <div id="app" class="container mt-5">
      <h3 class="text-center mx-auto pt-5 my-5">Support</h3>
      <div class="container-fluid d-flex justify-content-center ps-3">
        <div class="row">
          <div class="col mx-auto">
            Oh yea, you can also support me give donation from this page, check in the below
            <ul class="list-group mt-5">
              <li class="list-group-item">
                <a target="_blank" href="https://trakteer.id/naagaraa"
                  >Trakteer</a
                >
              </li>
              <li class="list-group-item">
                <a target="_blank" href="https://saweria.co/naagaraa"
                  >Saweria</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="text-center mx-auto pt-5 my-5">Shop or Merchandise</h3>
      <div class="container-fluid d-flex justify-content-center ps-3">
        <div class="row">
          <div class="col mx-auto">
            comming soon
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  name: 'SupportView',
  head() {
    const url = 'https://naagaraa.netlify.app/'
    const article = {
      title: 'Dev Journey - Blog',
      image: 'dev-journey.png',
      description:
        "personal Dev Story, I think they need know about me and what i'm doing in day by days i programming",
      url: 'https://naagaraa.netlify.app/blog/',
    }
    return {
      title: 'Dev Journey - Support',
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
<style lang=""></style>
