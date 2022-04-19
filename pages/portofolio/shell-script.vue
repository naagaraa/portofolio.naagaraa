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
    <div id="app" class="container mt-md-5 py-3">
      <div class="container container-porto">
        <div class="row mt-4">
          <div class="col">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f0/FreeBSD_10_vi_RC_Firewall.png"
              class="mt-5 img-fluid mx-auto d-block"
              alt="banner"
            />
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <!-- <h2 class="text-center" >MINI MVC PHP NATIVE</h2> -->
            <ul class="list-group mt-4">
              <li class="list-group-item">Title : Shell Scripting</li>
              <li class="list-group-item">Tag : script, project</li>
              <li class="list-group-item">Language : PHP</li>
              <li class="list-group-item">
                Source :
                <a href="https://github.com/naagaraa/bash-shell-toolkit"
                  >github</a
                >
              </li>
            </ul>
            <h3>Description</h3>
            <p>
              bash shell script collection is a repository for development tools with script automation for help fast setting up machine, it's minimalize for installation one by one. when i'am used linux distribution for development.
            </p>
            <h3>Installation</h3>
             <p>you can download with wget like this : </p>
            <p><b>wget -O webtool.sh https://raw.githubusercontent.com/naagaraa/bash-shell-script-collection/main/shell/web-developmet-toolkit.sh</b></p>
            <p>
              or you can check more detail about this project in this link below
            </p>
            <h3>Documentation</h3>
             <p>and this Documentation for this project, I'm not only build but I'm also write Documentation, because Documentation is very important, maybe it can say technical writer job. but in this docs.</p>
            <p>
              <a href="https://github.com/naagaraa/bash-shell-toolkit"
                >github</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.container-porto{
  width: 50em;
}
</style>
