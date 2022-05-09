<template lang="">
  <div>
    <AppHeader />
    <div id="app" class="container mt-5">
      <h3 class="text-center mx-auto pt-5 my-5">Service</h3>
      <div class="container-fluid d-flex justify-content-center ps-3">
        <div class="row">
          <div class="col-12 mx-auto">
            <h5>   
               open for my service
            </h5>
            <p>
               contact me if you interested in my service, free to ask question and i will answer you as soon as possible, fluent in indonesian and not fluent in english, don't worry about that ,keep possible with pasif english like email or chat. <nuxt-link to="/hire-me">contact me</nuxt-link>
            </p>
            <ul class="list-group mt-2">
              <li class="list-group-item">
                Implementation Template HTML to Laravel Blade | price :
              </li>
              <li class="list-group-item">Make Company Profile Website | price :</li>
              <li class="list-group-item">Make Landing Page Website | price :</li>
              <li class="list-group-item">Make Website used Wordpress | price :</li>
              <li class="list-group-item">Bug Fixed Web Apps | price :</li>
              <li class="list-group-item">Change background pas Photo | price : </li>
              <li class="list-group-item">Commision for Building Web Apps | price : </li>
              <li class="list-group-item">Copy Writing | comming soon | price : </li>
            </ul>
            <h5 class="mt-3">
               Skill Set
            </h5>
            <ul class="list-group mt-3">
              <li class="list-group-item">
                Programming Language : PHP and Javascript
              </li>
              <li class="list-group-item">Tools : Vscode, git, filezilla, winscp, putty, trello</li>
              <li class="list-group-item">Backend Framework : CI 3, LARAVEL 8</li>
              <li class="list-group-item">Frontend Framework : Vuejs</li>
              <li class="list-group-item">css Framework : Boostrap 4 or 5</li>
              <li class="list-group-item">Operating system : windows 10, kali linux, parrots Os (VM)</li>
              <li class="list-group-item">Graphic Design : Photoshop, Figma </li>
              <li class="list-group-item">Database : Mysql</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  name: 'ServiceView',
  head() {
    return {
      title: 'Dev Journey - service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'developper story and my journey in software engineering',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: '', href: '/favicon.ico' }],
    }
  },
}
</script>
<style lang=""></style>
