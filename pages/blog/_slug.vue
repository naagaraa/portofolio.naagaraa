<template lang="">
  <div>
    <AppHeader />
    <div class="container mt-5 pt-5">
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
          <div class="mainheading">
            <div class="row post-top-meta">
              <div class="col-md-2">
                <a href="author.html">
                  <img
                    class="author-thumb"
                    src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="Sal"
                  />
                </a>
              </div>
              <div class="col-md-10">
                <a class="link-dark" href="author.html"> Miyuki Nagara </a>
                <span class="author-description">
                  {{ article.author.bio }}
                </span>
                <span class="post-date"
                  >created at {{ formatDate(article.createdAt) }}</span
                >
                <span class="dot"></span>
                <span class="post-read">6 min read</span>
              </div>
            </div>
            <h1 class="posttitle">
              {{ article.title }}
            </h1>
            <span>Post updated at {{ formatDate(article.updatedAt) }}</span>
          </div>
          <!-- <img
              class="featured-image img-fluid"
              src="assets/img/demopic/10.jpg"
              alt=""
            /> -->
          <div class="article-post">
            <article>
                <nuxt-content
                  class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
                  :document="article"
                />
            </article>
            <!-- <p>
                Holy grail funding non-disclosure agreement advisor ramen
                bootstrapping ecosystem. Beta crowdfunding iteration assets
                business plan paradigm shift stealth mass market seed money
                rockstar niche market marketing buzz market.
              </p>
              <p>
                Burn rate release facebook termsheet equity technology.
                Interaction design rockstar network effects handshake creative
                startup direct mailing. Technology influencer direct mailing
                deployment return on investment seed round.
              </p>
              <p>
                Termsheet business model canvas user experience churn rate low
                hanging fruit backing iteration buyer seed money. Virality
                release launch party channels validation learning curve paradigm
                shift hypotheses conversion. Stealth leverage freemium venture
                startup business-to-business accelerator market.
              </p>
              <blockquote>
                Gen-z strategy long tail churn rate seed money channels user
                experience incubator startup partner network low hanging fruit
                direct mailing. Client backing success startup assets responsive
                web design burn rate A/B testing metrics first mover advantage
                conversion.
              </blockquote>
              <p>
                Freemium non-disclosure agreement lean startup bootstrapping
                holy grail ramen MVP iteration accelerator. Strategy market
                ramen leverage paradigm shift seed round entrepreneur
                crowdfunding social proof angel investor partner network
                virality.
              </p> -->
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
  },
}
</script>
<style lang=""></style>
