<template lang="">
  <div>
    <AppHeader />
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-xs-12">
          <div class="share">
            <p>Share</p>
            <ul>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-youtube-play color-black fa-2x"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-instagram color-black fa-2x"></i>
                </a>
              </li>
            </ul>
            <div class="sep"></div>
          </div>
        </div>
        <div class="col-md-8 col-md-offset-2 col-xs-12">
          <h5 class="my-3">Search here</h5>
          <AppSearch />
          <div class="mainheading mt-5">
            <div class="row post-top-meta">
              <div class="col-md-2 d-flex">
                <a target="_blank" href="https://github.com/naagaraa">
                  <img
                    class="author-thumb"
                    :src="article.profile"
                    alt="Sal"
                  />
                </a>
              </div>
              <div class="col-md-10">
                <NuxtLink class="link-dark" to="/about"> Miyuki Nagara </NuxtLink>
                <span class="author-description">
                  {{ article.author.bio }}
                </span>
                <span class="post-date"
                  >created at {{ formatDate(article.createdAt) }}</span
                >
                <span class="dot"></span>
                <!-- <span class="post-read">6 min read</span> -->
              </div>
            </div>
            <h1 class="posttitle">
              {{ article.title }}
            </h1>
            <span>Post updated at {{ formatDate(article.updatedAt) }}</span>
          </div>
          <!-- <img
              class="featured-image img-fluid"
              :src="assets/img/demopic/10.jpg"
              alt=""
            /> -->
          <div class="article-post">
            <article>
              <nuxt-content
                class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
                :document="article"
              />
            </article>
          </div>
          <!-- <div class="after-post-tags">
              <ul class="tags">
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Growth Mindset</a>
                </li>
                <li>
                  <a href="#">Productivity</a>
                </li>
                <li>
                  <a href="#">Personal Growth</a>
                </li>
              </ul>
            </div> -->
              <!-- footer ads -->
              <!-- <ins class="adsbygoogle"
                  style="display:block"
                  data-ad-client="ca-pub-8243005452898565"
                  data-ad-slot="1371505380"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins> -->

              <adsbygoogle ad-slot="1371505380" ad-format="auto" analytics-uacct='UA-172028584-1' />

        </div>
      </div>
    </div>
    <!-- <div class="hideshare"></div> -->
    <AppFooter />
  </div>
</template>
<script>
import '../../assets/css/artikel.css'
import AppHeader from '../../components/global/AppHeader.vue'
import AppFooter from '../../components/global/AppFooter.vue'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    debug (event) {
      console.log(event.target.name)
    }
  },
  head() {
    let article = this.article

    return {
      title: article.title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: article.title,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: article.img,
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
      ],
    }
  },
}
</script>
<style>
ins {
    background: #bbb;
}
</style>
