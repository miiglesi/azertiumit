<template>
  <section class="container">
    <div>
      <img src="~/static/img/logotipo-azertium.png" />
      <Buscador/>
    </div>
  </section>
</template>

<script>
import Buscador from '~/components/Buscador.vue'
export default {
  components: {
    Buscador
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/global';
.container{
  @include containerMix;
}
#logoAzertium{
  @include transformar(rotate(22deg))
}
</style>

