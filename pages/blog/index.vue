<template lang="">
  <div>
    <!-- <pre> -->
    <!-- {{articles}} -->
    <!-- <div v-for="item in articles" :key="item.index">
      <ul>
        <li>{{ item.id }}</li>
        <li>{{ item.title }}</li>
        <li>{{ item.description }}</li> -->
    <!-- <li>
                  <img :src="item.cover_image !== null ? item.cover_image : 'https://i.stack.imgur.com/cK3LL.png'" />
               </li> -->
    <!-- <li>
          <a :href="'journey/' + item.id">detail</a>
        </li>
      </ul>
    </div> -->
    <!-- </pre> -->
    <AppHeader />
    <div id="app" class="container mt-md-5 py-3">
      <!-- <h5 class="my-3">Search here</h5> -->
      <!-- <AppSearch /> -->

      <h3 class="text-center mx-auto my-3 mt-3">Blog</h3>
      <p class="text-center mb-5">
        personal Dev Story, I think they need know about me and what i'm doing
        in day by days i programming. this pages consume API
      </p>
      <div class="container-fluid">
        <div class="row">
          <!-- <div  > -->
          <!-- mark down blog -->
          <div
            v-for="article of articles"
            :key="article.slug"
            class="col-12 col-md-3 col-lg-3 mb-4"
          >
            <div class="card mx-auto text-center">
              <a
                class="text-dark nuxt-link"
                :href="'/blog/' + article.id"
                @click="refresh"
              >
                <img
                  class="card-img-top"
                  :src="
                    article.cover_image !== null
                      ? article.cover_image
                      : 'https://caraguna.com/wp-content/uploads/2022/02/perbedaan-programmer-dan-developer.jpg'
                  "
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
              </a>
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
import axios from 'axios'
export default {
  name: 'JourneyPage',
  async asyncData({ req, res, error }) {
    const config = {
      headers: {
        'api-key': 'dm73KpZjoUxcKHA351zT4bUi',
      },
    }
    const url = 'https://dev.to/api/articles/'
    const devto = await axios.get(`${url}me/published`, config)
    console.log(devto.status === 200)
    if (devto.status !== 200) {
      return {
        statusCode: devto.status,
        message: devto.statusText,
      }
    }

    if (devto.status === 200) {
      return {
        articles: devto.data,
      }
    }
    // console.log(devto.data);
  },
  refresh() {
    this.$nuxt.refresh()
  },
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
      ],
    }
  },
}
</script>
<style lang=""></style>
