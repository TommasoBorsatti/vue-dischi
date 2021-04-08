
const App = new Vue ({

  el: "#root",

  data:{
    albums: [],
    genres: [],
    chosenGenre: "All",

  },

  methods:{

  },

  mounted: function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((dischi) => {
        //assegno i dati ottenuto dall' API tramitre richiesta AJAX a una const, per semplificare i passaggi successivi.
        const Dati = dischi.data.response;
        //questa parte di funzione usa Sort per ordinare gli oggetti di un array secondo il valore di una delle loro proprietà - MDN WEBDOCS
        Dati.sort(function (a, b) {
          return a.year - b.year;
        });
        // attribuisco i dati estrapolati dall'API e ordinati secondo l'anno alla variabie albums data che mi permetterà di stamparli
          this.albums = Dati;
        // questa parte di funzione serve per prelevare i generi musicali e salvarli nell array genres
        Dati.forEach((item, i) => {
          if (!this.genres.includes(item.genre)) {
            this.genres.push(item.genre);
          }
        });
        // lascio qui questi console log che servono per controllo
        console.log(this.albums);
        console.log(this.genres);
      });
  },

});
