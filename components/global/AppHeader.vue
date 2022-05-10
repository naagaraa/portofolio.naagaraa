<template lang="">
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      class="fixed-top navbar-dark bg-custom"
    >
      <b-container>
        <!-- Content here -->
        <b-navbar-brand>
          <NuxtLink class="navbar-brand" to="/">
            <b> <i class="fa fa-terminal"></i> Dev Journey </b>
          </NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <NuxtLink class="nav-item nav-link" to="/journey">
              Journey
            </NuxtLink> -->
            <NuxtLink class="nav-item nav-link" to="/blog"> Blog </NuxtLink>
            <NuxtLink class="nav-item nav-link" to="/dev"> Dev </NuxtLink>

            <NuxtLink class="nav-item nav-link" to="/portofolio">
              Portofolio
            </NuxtLink>

            <NuxtLink class="nav-item nav-link" to="/services"> Services </NuxtLink>
            <NuxtLink class="nav-item nav-link" to="/about"> About </NuxtLink>

            <NuxtLink class="nav-item nav-link" to="/hire-me">
              Hire Me
            </NuxtLink>

            <NuxtLink class="nav-item nav-link" to="/resource">
              Resource
            </NuxtLink>

            <a
              class="nav-item nav-link"
              href="https://www.youtube.com/channel/UCYsZhw6Mlk23Q-nUPP9t1YA"
            >
              <i class="fa fa-youtube-play color-red fa-2x mx-2"></i>
            </a>
            <!-- <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form> -->

            <!-- <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->

            <!-- <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
