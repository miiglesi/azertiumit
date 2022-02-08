<template>
  <div role="group">
    <label for="input-live" class="test">Búsqueda:</label>
    <b-form-input
      id="input-live"
      v-model="word"
      :state="wordState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Ingresa nombre de repositorio"
      trim
    ></b-form-input>
    <b-form-invalid-feedback id="input-live-feedback">
      Escribe al menos 3 letras
    </b-form-invalid-feedback>
      <b-form-text id="input-live-help">Repositorios.</b-form-text>
      <!-- Se obtiene el componente sólo si la bandera de resultado es verdadera y le envío un arreglo con los resultados -->
      <TablaResultados :resultados="resultados" v-if="flagResultados"/>
    </div>
</template>
<script>
import TablaResultados from '~/components/TablaResultados.vue'
export default {
  name: 'Buscador',
  components:{
    TablaResultados
  },
  data () {
    return {
      word: '',
      flagResultados:false,
      resultados: {}
    }
  },
  computed: {
    wordState() {
      return this.word.length > 2 ? true : false
    }
  },
  watch: {
    word(change){
      if(this.wordState){
        this.search(change)
      }
    }
  },
  methods: {
    async search(){
      // Creo un arreglo con los parámetros para consumir la API
      const parametros = {
        'word': this.word,
        'per_page': 10,
        'order': 'desc'
      }
      // Hago una petición a la API enviando el arreglo parametros
      const res = await this.$store.dispatch('busqueda/searchword', parametros)
      // Si la longitud de la respuesta de la API es mayor a cero, le asigna a la variable 'resultados' los resultados obtneidos y enciende la bandera
      if(res.items.length>0){
        this.resultados = res.items
        this.flagResultados = true
      } else {
        this.flagResultados = false
      }
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/global';
label {
  color: $darkBlue;
}
</style>

