<template lang="">
  <div>
    <AppHeader />
    <div id="app" class="container py-3 mt-5">
      <div class="row">
        <div class="col">
          <div class="container mt-5">
            <div class="row">
              <div class="col">
                <h3>Term Of service</h3>
                <p class="text-muted">
                  My Journey dan beberapa catatan note tentang programing
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <main>
                  <p>
                    Saya, Dev journey (“my website”), website terbatas yang
                    didirikan berdasarkan hobi, dalam Syarat dan Ketentuan
                    Penggunaan Layanan ini bertindak sebagai dev journey.
                    Halaman ini menjelaskan tentang syarat dan ketentuan
                    penggunaan situs web dan platform naagaraa.netlify.app, baik
                    sebagai pengunjung maupun pengguna (Anda). Seluruh
                    pengunjung dan pengguna wajib membaca dan mencermati Syarat
                    dan Ketentuan Penggunaan Penggunaan Layanan ini. Dengan
                    mengunjungi dan/atau menggunakan my website, maka Anda
                    dinyatakan telah memahami dan menyepakati semua Syarat dan
                    Ketentuan Layanan di bawah ini. Apabila Anda tidak
                    menyetujui salah satu, sebagian atau seluruh isi dari Syarat
                    dan Ketentuan Layanan ini, maka Anda tidak diperkenankan
                    untuk menggunakan layanan di my website. Ketentuan dapat
                    berubah sewaktu waktu untuk pembaharuan
                  </p>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppButtonScroll />
    </div>
    <AppFooter />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Dev Journey - term of service',
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
