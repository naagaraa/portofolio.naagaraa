<template lang="">
    <button @click="scrollToTop()" class="btn btn-primary btn-sticky">
      <i class="fa fa-arrow-up"></i>
   </button>
</template>
<script>
export default {
   scrollToTop: true,
   methods:{
      scrollToTop() {
         window.scrollTo({
         top: 0,
         })
    },
   }
}
</script>
<style>
.btn-sticky{
  width: 4em;
  height: 4em;
  border-radius: 50%;
  z-index: 5 !important;
  position: fixed !important;
  right: 30px;
  bottom: 30px;
}
</style>