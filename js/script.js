
const App = new Vue ({

  el: "#root",

  data:{
    albums: [],
    genres: [],
  },

  methods:{

  },

  mounted: function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((dischi) => {
        this.albums = dischi.data.response;
        // questa parte di funzione serve per prelevare i generi musicali e salvarli nell array genres
        dischi.data.response.forEach((item, i) => {
          if (!this.genres.includes(item.genre)) {
            this.genres.push(item.genre);
          }
        });
        console.log(this.genres)
      });
  },

});
