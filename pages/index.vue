<template>
  <div>
    <!-- <AppSearchInput /> -->
    <AppHeader />
    <!-- start banner -->
    <AppBanner />
    <!-- end banner -->
    <div id="app" class="container mt-5">
      <h3 class="text-center mx-auto my-5">About Topic</h3>
      <div class="container-fluid d-flex justify-content-center ps-3">
        <div class="row">
          <div class="col-md">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                class="card-img-top"
                alt="gambar"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Programing</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1577974869458-58f694694aad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                class="card-img-top"
                alt="gambar"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Develop story</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1603632088148-3680d7e5dda2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
                class="card-img-top"
                alt="gambar"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Security</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
