<template lang="">
  <div>
    <footer class="container mt-5 pt-5">
      <div class="row mb-5">
        <div class="col">
          <div class="card text-start">
            <div class="card-body text-white bg-custom">
              <div class="row d-flex">
                <div class="col-md-9">
                  <h2 class="card-title">Support Me?</h2>
                  <p class="card-text">
                    You can support me for free education and IT kontent, click that button 
                  </p>
                </div>
                <div class="col-md-2 align-self-center">
                  <NuxtLink class="btn btn-primary mx-sm-5" to="/support">
                    Support
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sosmed text-center">
        <div class="row d-flex">
          <div class="col">
            <a
              class="text-muted"
              href="https://github.com/naagaraa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github fa-2x mx-2"></i>
            </a>
            <a
              class="text-muted"
              href="https://www.youtube.com/channel/UCYsZhw6Mlk23Q-nUPP9t1YA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-youtube-play color-red fa-2x mx-2"></i>
            </a>
            <a
              class="text-muted"
              href="https://dribbble.com/naagaraa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-dribbble fa-2x mx-2"></i>
            </a>
            <!-- <a
              class="text-muted"
              href="https://www.instagram.com/naagaraa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-instagram fa-2x mx-2"></i>
            </a> -->
          </div>
        </div>
        <div class="row mt-3 d-flex justify-content-end">
          <div class="col-md-2">
            <NuxtLink to="/privacy-policy" class="nav-link">
              Privacy Policy
            </NuxtLink>
          </div>
          <div class="col-md-2">
            <NuxtLink to="/term-of-service" class="nav-link">
              Term of Service
            </NuxtLink>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <p>© 2021 DevJourney - miyuki nagara</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
