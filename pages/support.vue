<template lang="">
  <div>
    <AppHeader />
    <div id="app" class="container mt-5">
      <h3 class="text-center mx-auto pt-5 my-5">Support</h3>
      <div class="container-fluid d-flex justify-content-center ps-3">
        <div class="row">
          <div class="col mx-auto">
            Oh yea, you can also support me from this, check in the below
            <ul class="list-group mt-5">
              <li class="list-group-item">
                <a target="_blank" href="https://trakteer.id/naagaraa"
                  >Trakteer</a
                >
              </li>
              <li class="list-group-item">
                <a target="_blank" href="https://saweria.co/naagaraa"
                  >Saweria</a
                >
              </li>
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
  name: 'SupportView',
  head() {
    return {
      title: 'Dev Journey - Support',
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
