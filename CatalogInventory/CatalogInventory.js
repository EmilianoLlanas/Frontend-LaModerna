Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data:
    function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }

  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})


var demo = new Vue({
  el: '#demo',
  data: {
    inventario:{
      compania:'',
      almacen:'',
      articulo:'',
      stock:''},
    searchQuery: '',
    gridColumns: ['Compañía', 'Almacén', 'Artículo', 'Stock'],
    gridData: [
      {Compañía: "Zara", Almacén:"1024", Artículo:"200109 CORR. MARQUETA 5KG", Stock:"4320.0"},
      {Compañía: "Barcel", Almacén:"1024", Artículo:"200167 CORR. UNIVERSAL GRANEL", Stock:"40.0"},
      {Compañía: "MC PLASTICOS DE MEXICO", Almacén:"2410", Artículo:"LAMINA CARTON CH-1", Stock:"2000.0"},
    ]
  },
  methods:{

    addInventory(){
        //da de alta con conexión a backend
        /*
        //¿post o put?
        axios.post('AQUI-VA-LA-URL', this.inventario)
                         .then(response=> console.log(response))
                         .then(error=> console.log(error))*/
        alert('Agregado');
    },
    deleteInventory(){
      //da de alta con conexión a backend
      /*
      axios.delete('AQUI-VA-LA-URL', this.inventario)
                       .then(response=> console.log(response))
                       .then(error=> console.log(error))*/
      alert('Borrado');
    },
    updateInventory(){
      //da de alta con conexión a backend
      /*
      //¿post o put?
      axios.post('AQUI-VA-LA-URL', this.inventario)
                       .then(response=> console.log(response))
                       .then(error=> console.log(error))*/
      alert('Actualizado');
    },
    reportInventory(){
      //da de alta con conexión a backend
      /*
      //¿post o put?
      axios.post('AQUI-VA-LA-URL', this.inventario)
                       .then(response=> console.log(response))
                       .then(error=> console.log(error))*/
      alert('Generando reporte');
    }
  }
})