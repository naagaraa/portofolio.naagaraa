<template lang="">
  <div>
    <!-- this page for detail
    <pre>
         {{article}}
      </pre> -->
    <AppHeader />
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-2 col-xs-12">
          <div class="share">
            <!-- <p>Share</p>
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
            <div class="sep"></div> -->
          </div>
        </div>
        <div class="col-md-8 col-md-offset-2 col-xs-12">
          <div class="mainheading mt-5">
            <div class="row post-top-meta">
              <div class="col-md-2 d-flex">
                <a target="_blank" href="https://github.com/naagaraa">
                  <img
                    class="author-thumb"
                    :src="article.user.profile_image"
                    :alt="article.user.name"
                  />
                </a>
              </div>
              <div class="col-md-10">
                <NuxtLink class="link-dark" to="/about">
                  Miyuki Nagara
                </NuxtLink>
                <span class="author-description">
                  Learner, Fullstack Web Developper main Language PHP and
                  Javascript, and Framework Stack Laravel, Vuejs 3, and for UI
                  component I'am used Boostrap.
                </span>
                <span class="post-date"
                  >created at {{ article.created_at }}</span
                >
                <span class="dot"></span>
                <!-- <span class="post-read">6 min read</span> -->
              </div>
            </div>
            <h1 class="posttitle">
              {{ article.title }}
            </h1>
            <span>Post updated at {{ article.edited_at }}</span>
          </div>
          <div class="article-post">
            <div
              class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
              v-html="article.body_html"
            ></div>
          </div>
          <AppButtonScroll />
          <!-- footer ads -->
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-8243005452898565"
            data-ad-slot="1371505380"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>

        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import '../../assets/css/artikel.css'
import axios from 'axios'
import AppHeader from '../../components/global/AppHeader.vue'
import AppFooter from '../../components/global/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  async asyncData({ params }) {
    // console.log(params.slug);
    const slug = params.slug
    const config = {
      headers: {
        'api-key': 'dm73KpZjoUxcKHA351zT4bUi',
        'Connection': 'keep-alive',
        'Accept': 'application/json',
      },
    }
    const url = 'https://dev.to/api/articles/'
    const devto = await axios.get(`${url}${slug}`, config)
    // console.log(devto.data);
    if (devto.status !== 200) {
      return {
        statusCode: devto.status,
        message: devto.statusText,
      }
    }

    if (devto.status === 200) {
      return {
        article: devto.data,
      }
    }
  },
  refresh() {
    this.$nuxt.refresh()
  },
  head() {
    const article = this.article
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
<style lang=""></style>
