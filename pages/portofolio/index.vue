<template lang="">
  <div>
    <!-- this page home blog
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div>
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul> -->
    <!-- <pre>{{ articles }}</pre> -->
    <AppHeader />
    <div id="app" class="container mt-md-5 mt-5 py-3">
      <!-- <h5 class="my-3">Search here</h5> -->
      <!-- <AppSearch /> -->
      <h3 class="text-center mx-auto mt-3">Personal Project Dev</h3>
      <p class="text-center mb-5">
        this project about developer to developper like libraries and native
        framework
      </p>
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="row">
            <div
              v-for="item in Projectdev"
              :key="item.id"
              class="col-12 col-md-3 col-lg-3 mb-4"
            >
              <nuxt-link class="text-dark" :to="item.path">
                <div class="card mx-auto text-center">
                  <div class="card-body">
                    <h6 class="card-title text-center">{{ item.name }}</h6>
                    <p class="card-text mt-3 mb-5">{{ item.description }}</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <!-- apps project -->
          <h3 class="text-center mx-auto my-3 mt-3">Project App</h3>
          <p class="text-center mb-5">this project for user used</p>
          <div class="container-fluid">
            <p>this page for project application mobile and webapps</p>
            <div class="row">
              <div
                v-for="item in ProjectApp"
                :key="item.id"
                class="col-12 col-md-3 col-lg-3 mb-4"
              >
                <a class="text-dark" target="_blank" :href="item.path">
                  <div class="card mx-auto text-center">
                    <div class="card-body">
                      <h6 class="card-title text-center">
                        {{ item.name }}
                      </h6>
                      <p class="card-text mt-3 mb-5">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <h3 class="text-start mx-auto my-3 mt-3">Demo Video</h3>
          <p class="text-start mx-auto my-3 mt-3">
            LMAO i am try put my demo in here pages
          </p>
          <div class="container-fluid d-flex justify-content-center">
            <div class="row">
              <div v-for="item in DemoVideo" :key="item.id" class="col-md">
                <iframe
                  class="img-fluid"
                  :src="item.source"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div class="card-body">
                  <p class="card-title text-center">{{item.name}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppButtonScroll />
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  name: 'PortofolioView',
  data() {
    return {
      Projectdev: [
        {
          name: 'Mini MVC PHP Native',
          description:
            'native framework OOP MVC, inspiration project from code igniter and laravel',
          path: '/portofolio/mini-mvc-php',
        },
        {
          name: 'Metode Skripsi',
          description:
            'libraries PHP for skripsi, write algorithm by native code, like SAW or winnowing',
          path: '/portofolio/metode-skripshit',
        },
        {
          name: 'Shell Script',
          description: 'shell script for installation setup in ubuntu',
          path: '/portofolio/shell-script',
        },
        {
          name: 'Orion Scanner',
          description:
            'text processing or presentas index of similarity detection used winnowing and rabin karb',
          path: '/portofolio/orion-scanner',
        },
      ],
      ProjectApp: [
        {
          name: 'Whastaspp Lightning',
          path: 'https://whatsapp-lightning.netlify.app/',
        },
      ],
      DemoVideo:[
        {
          name: 'Mini MVC PHP Native',
          source: 'https://www.youtube-nocookie.com/embed/3WmttdPN1n4',
        },
        {
          name: 'Shell Script',
          source: 'https://www.youtube-nocookie.com/embed/skZic5uUwqI?start=2',
        },
        {
          name: 'Metode Skripsi',
          source: 'https://www.youtube-nocookie.com/embed/kcDqNJxyX5s?start=4',
        },
        {
          name: 'Orion Scanner',
          source: 'https://www.youtube-nocookie.com/embed/videoseries?list=PLK5_CL-hAKCcmIEUZiWmPDK-FlC4-TAGn',
        },
      ]
    }
  },
  head() {
    const url = 'https://naagaraa.netlify.app/'
    const article = {
      title: 'Dev Journey - Portofolio',
      image: 'dev-journey.png',
      description:
        'dev journey my portfolio, this is my journey to become a developer',
      url: 'https://naagaraa.netlify.app/blog/',
    }
    return {
      title: 'Dev Journey - Portofolio',
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
<style></style>
