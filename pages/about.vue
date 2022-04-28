<template lang="">
  <div>
    <AppHeader />
    <div id="app" class="container mt-5 pt-5">
      <h3 class="text-center mx-auto my-5">About</h3>
      <div class="container-fluid justify-content-center ps-3">
        <div class="row">
          <div class="col-md-3 text-center">
            <h4>Miyuki Nagara</h4>
            <img
              src="/img.jpg"
              class="text-center mb-3 img-profile rounded-br-full img-thumbnail"
              alt="profile"
            />
            <p>Web Developper & Learner</p>
          </div>
          <div class="col">
            <p>
              Hi, I'm Miyuki you can call me Yuki Or Nagara this my username in
              Internet for Identity but you if came from linkedln or another
              social media to here. it's my website portofolio. I'm Web
              Developper, Main Stack Is PHP and Javascript Language, for
              framework I'm Flexible use, sometime I used Code Igniter sometime
              I'm used Laravel 8, and For Front End I'm used Vuejs 3, for UI
              Component I just used Boostrap.
            </p>
            <p>
              Actually, This Website has been finish with Code Igniter 3 at 2020
              but in 2021 i'm migration to reactjs learn by doing, but currenly
              this website has been migration to SSR Vue + Nuxt Js, or it can
              static markdown post, deploy with serverless at netlify
            </p>
            <p>
              Im not good programmer or software enggineer, but i love learn,
              literarrly programmer is problem solving, good in learn somethink
              and very fast. like this. i'm learn vuejs for 2 week and migration
              my old website. if i'm build from zero it's will make a lot of
              time for finish
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col text-center">
          <h2>Connect</h2>
          <p>
            Maybe You wanna connect with me, you can visit my linkedln
            <a href="https://www.linkedin.com/in/nagara/" target="_blank"
              >here</a
            >
            or you wanna know about my github repository
            <a href="https://github.com/naagaraa" target="_blank">here</a>
          </p>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  name: 'AboutView',
}
</script>
<style>
.img-profile {
  border-radius: 50%;
  width: 20vh;
}
</style>
