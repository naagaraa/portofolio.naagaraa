<template>
  <div>
    <!-- <AppSearchInput /> -->
    <AppHeader />
    <!-- start banner -->
    <AppBanner />
    <!-- end banner -->
    <div id="app" class="container mt-5 mb-5">
      <h3 class="text-center mx-auto my-5">About Topic</h3>
      <div class="container-fluid d-flex justify-content-center ps-3">
        <div class="row">
          <div class="col-md">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                class="card-img-top"
                alt="gambar"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Programing</h5>
                <p class="card-text">
                  Some quick story about Programming when i'am learn something
                </p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1560415755-bd80d06eda60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=991&q=80"
                class="card-img-top"
                alt="gambar"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Develop story</h5>
                <p class="card-text">
                  Some quick story about Develop when i'am learn something
                </p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                class="card-img-top"
                alt="gambar"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Security</h5>
                <p class="card-text">
                  Some quick story about Security when i'am learn something
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
import cacheControl from '../helper/cacheControl'
export default {
  name: 'IndexView',
  middleware: cacheControl({
    'max-age': 60,
    'stale-when-revalidate': 5,
  }),
}
</script>
