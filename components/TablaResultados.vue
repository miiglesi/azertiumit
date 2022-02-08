<template>
  <div>
    <b-table striped hover :fields="fields" :items="items">
    </b-table>
  </div>
</template>

<script>
  export default {
    props:{
        resultados: Array()
    },
    data() {
      return {
        fields: [
            { key: 'nombre', label: 'Nombre repositorio', },
            { key: 'url', label: 'URL' },
        ],
        items: []
      }
    },
    mounted(){
        this.loadResults()
    },
    watch: {
        // Cada que cambian los resultados incovo la funcion 'loadResults' para recargar la tabla con los resultados
        resultados(change){
            this.loadResults()
        }
    },
    methods: {
        loadResults(){
            this.items=[]
            for(var r in this.resultados){
                const resultRow  = {
                    nombre: this.resultados[r].name,
                    url: this.resultados[r].url
                };
                this.items.unshift(resultRow);
            }
        }
    }
  }
</script>