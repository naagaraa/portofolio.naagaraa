<template lang="">
  <div>
    <AppHeader />
    <div id="app" class="container mt-5 pt-5">
      <div class="container-fluid justify-content-center ps-3">
        <div class="row mt-3">
          <div class="col text-center">
            <h2>Hire Me</h2>
            <button class="btn btn-dark contact" onclick="window.open('mailto:ekajayanagaraa@.com')">contact me, Now</button>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Dev Journey - hire me',
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
<style scoped>
.btn-dark {
  background-color: black;
}
  .contact {
    color: white;
    cursor: pointer;
  }
  .contact:hover {
    color: cyan;
  }
</style>
