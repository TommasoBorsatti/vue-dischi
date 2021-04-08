
const App = new Vue ({

  el: "#root",

  data:{
    albums: [],
  },

  methods:{

  },

  mounted: function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((dischi) => {
        this.albums = dischi.data.response;
      });
  },

});
