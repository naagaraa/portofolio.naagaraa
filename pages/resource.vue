<template lang="">
  <div>
    <AppHeader />
    <div id="app" class="container py-3 mt-5 pt-4">
      <h1 class="pt-3 text-center">Resource</h1>
      <p>
        this good resource for me when i want grow up learn programming. improve
        knowledge in programming it not same, with improve your skill, because
        for skill you need solve real problem. where I should getting the
        problem ? you can problem job, with job, you have a huge problem, you
        don't know and you must solve that with your knowledge and algorithm and
        also learn in every you getting the problem. oke this my resource
      </p>

      <div class="container-fluid mt-5">
        <div class="container-fluid">
          <div class="row">
            <div v-for="item in resource" :key="item.id" class="col-12 col-md-3 col-lg-3 mb-4">
              <a class="text-dark" :href="item.url" target="_blank">
                <div class="card mx-auto text-center">
                  <div class="card-body">
                    <h6 class="card-title text-center">{{item.title}}</h6>
                    <p class="card-text mt-3 mb-5">
                      {{item.description}}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <AppButtonScroll />
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppButtonScroll from '../components/global/AppButtonScroll.vue'
export default {
  name: 'ResourceView',
  components: {
    AppButtonScroll,
  },
  data(){
    return {
      resource : [
        {
          title : "Udemy",
          description: "good platform for paid online learning with metode video",
          url : "https://www.udemy.com/",
        },
        {
          title : "Coursera",
          description: "good platform for paid online learning with metode video and good professional teacher",
          url : "https://www.coursera.org/",
        },
        {
          title : "Dicoding Academy",
          description: "good platform for paid online learning with metode reading in indonesia",
          url : "https://www.dicoding.com/",
        },
        {
          title : "Dev To",
          description: "free artikel dev story a lot software engineer sharing about experince in this platform",
          url : "https://dev.to/",
        },
        {
          title : "W3school",
          description: "free documentation about programming language",
          url : "https://www.w3schools.com/",
        },
        {
          title : "javascript info",
          description: "free documentation about javascript language",
          url : "https://javascript.info/",
        },
        {
          title : "roadmap.sh",
          description: "free learning path if your wanna start new journey in software enginner",
          url : "https://roadmap.sh/",
        },
        {
          title : "youtube",
          description: "best platform for find free tutorial and learning for free",
          url : "https://www.youtube.com/",
        },
        {
          title : "github",
          description: "open source platform for code and repository",
          url : "https://github.com/",
        },
        {
          title : "google",
          description: "search engine what you need find anything this is tools",
          url : "https://www.google.com/",
        },
        {
          title : "owasp",
          description: "community for security risk",
          url : "https://owasp.org/",
        },
        {
          title : "google exploit",
          description: "google hacking database you must to know about vurnerable",
          url : "https://www.exploit-db.com/google-hacking-database",
        },
        {
          title : "CTF Learn",
          description: "this platform free for learn about CTF (Capture the Flag)",
          url : "https://ctflearn.com/",
        },
        {
          title : "leet code",
          description: "this platform free for improve your logic algorithm and coding",
          url : "https://leetcode.com/",
        },
        {
          title : "devhints",
          description: "this platform free for cheatsheet and tips for developer",
          url : "https://devhints.io/",
        },
        {
          title : "vulnhub",
          description: "the best platform for find free vulnerability VM dan test them",
          url : "https://www.vulnhub.com/",
        },
        {
          title : "stack overflow",
          description: "all problem developer always put here, you can find similar problem here",
          url : "https://stackoverflow.com/",
        },
        {
          title : "Web Socket API",
          description: "this documentation drom MDN mozilla about web socket",
          url : "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        },
      ]
    }
  },
  head() {
    const url = 'https://naagaraa.netlify.app/'
    const article = {
      title: 'Dev Journey - Resource',
      image: 'dev-journey.png',
      description:
        "personal Dev Story, I think they need know about me and what i'm doing in day by days i programming",
      url: 'https://naagaraa.netlify.app/blog/',
    }
    return {
      title: 'Dev Journey - Resource',
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
