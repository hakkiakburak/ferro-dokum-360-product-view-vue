<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-4 card p-0">
          <vue-three-sixty
            :amount="35"
            imagePath="https://raw.githubusercontent.com/hakkiakburak/ferro-360-photos/master"
            fileName="ferro{index}.jpg"
            spinReverse
            autoplay
            paddingIndex
            buttonClass="dark"
          >
            <template v-slot:header>
              <div class="v360-header text-light">
                <span class="v360-header-title">Ürün Adı ve Fiyatı</span>
                <span class="v360-header-description"></span>
              </div>
            </template>
          </vue-three-sixty>
        </div>
        <!--/ Example 1 - Car -->

        <div class="col-12 mb-4 text-center card">
          <h3>Açıklama</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            libero, similique tempora consequatur vero perspiciatis, ab
            perferendis maiores doloremque dolores debitis deleniti quaerat
            cumque sunt illum molestias quisquam veritatis laborum?
          </p>
          <h4>Kategori</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam,
            natus adipisci deleniti placeat, voluptate quia est facilis vel,
            magnam eum a dignissimos omnis. Nam repudiandae impedit doloremque
            quae illo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import I360Viewer from './components/I360Viewer.vue'

export default {
  name: 'app',
  mounted() {
    //safari zoom bug fix
    this.disableZoomin()
  },
  methods: {
    disableZoomin() {
      document.addEventListener('gesturestart', function (e) {
        e.preventDefault()
        document.body.style.zoom = 0.99
      })
      document.addEventListener('gesturechange', function (e) {
        e.preventDefault()
        document.body.style.zoom = 0.99
      })

      document.addEventListener('gestureend', function (e) {
        e.preventDefault()
        document.body.style.zoom = 1
      })
    }
  }
}
</script>

<style scoped>
#app {
  background-color: #ffffff;
  margin: 50px;
  padding: 20px;
}
</style>
