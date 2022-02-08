export default {
    async searchword({ commit, dispatch }, data) {
        // Genero una URL según los datos del componente
        /*
        Aquí puede ser también que obtenga sólo una vez los resultados sin enviar ningún parámetro y después haciendo un mapeo de lo que escriba el usuario y retornando las coincidencias, pero decidí modificar la forma de consumir la API según la palabra buscada
        */
        const result = await this.$axios.$get(
            "https://api.github.com/search/repositories?q=framework%2Blanguage%3A"+data.word+"&page=1&per_page="+data.per_page+"&sort=stars&order=desc",
        );
        return result;
    },
};
  