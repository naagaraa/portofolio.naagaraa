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
      <h3 class="text-center mx-auto my-3 mt-3">Personal Project Dev</h3>
      <p class="text-center mb-5">
        this project about developer to developper like libraries and native
        framework
      </p>
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-3 col-lg-3 mb-4">
              <nuxt-link class="text-dark" to="/portofolio/mini-mvc-php">
                <div class="card mx-auto text-center">
                  <div class="card-body">
                    <h6 class="card-title text-center">Mini MVC PHP Native</h6>
                    <p class="card-text mt-3 mb-5">
                      Native framework OOP MVC PHP, inpiration project from code
                      iginiter and laravel
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="col-12 col-md-3 col-lg-3 mb-4">
              <nuxt-link class="text-dark" to="/portofolio/metode-skripshit">
                <div class="card mx-auto text-center">
                  <div class="card-body">
                    <h6 class="card-title text-center">Metode Skripsi</h6>
                    <p class="card-text mt-3 mb-5">Libraries PHP for skripsi, like algorithm SAW or Winnowing</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="col-12 col-md-3 col-lg-3 mb-4">
              <nuxt-link class="text-dark" to="/portofolio/shell-script">
                <div class="card mx-auto text-center">
                  <div class="card-body">
                    <h6 class="card-title text-center">Shell Script</h6>
                    <p class="card-text mt-3 mb-5">
                      shell script for instalation in linux ubuntu
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="col-12 col-md-3 col-lg-3 mb-4">
              <nuxt-link class="text-dark" to="/portofolio/orion-scanner">
                <div class="card mx-auto text-center">
                  <div class="card-body">
                    <h6 class="card-title text-center">Orion Scanner</h6>
                    <p class="card-text mt-3 mb-5">
                      Sistem plagiat or similarity index detection
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <!-- apps project -->
          <h3 class="text-center mx-auto my-3 mt-3">Project App</h3>
          <p class="text-center mb-5">this project for user used</p>
          <div class="container-fluid">
            <p>
              this page for project application mobile and webapps
            </p>
            <div class="row">
              <div class="col-12 col-md-3 col-lg-3 mb-4">
                <a class="text-dark" target="_blank" href="https://whatsapp-lightning.netlify.app/">
                  <div class="card mx-auto text-center">
                    <div class="card-body">
                      <h6 class="card-title text-center">
                        Whatsapp Lightning
                      </h6>
                      <p class="card-text mt-3 mb-5">
                        you can start chat in Whatsapp without save the number just copy and paste and start open chat
                      </p>
                    </div>
                  </div>
                </a>
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
