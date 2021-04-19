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
  
  
  var demo = new Vue(
    {
    el: '#demo',
    data: {
      entregada:{
        orden:'',
        company:'',
        fecha:''},
      searchQuery: '',
      gridColumns: ['Orden', 'Compañia', 'Fecha'],
      gridData: [
        {Orden: "1024", Compañia:"Zara", Fecha:"12/02/19"},
        {Orden: "0235", Compañia:"Barcel", Fecha:"01/10/20"},
        {Orden: "0066", Compañia:"Totis", Fecha:"27/08/19"}
      ]
    },

    methods:
    {
        addEntregada(){
            //da de alta con conexión a backend
            /*
            axios.post('URL', this.entregada)
                             .then(response=> console.log(response))
                             .then(error=> console.log(error))*/
            alert('Agregado');
        },
        deleteEntregada(){
          //da de alta con conexión a backend
          /*
          axios.delete('URL', this.entregada)
                           .then(response=> console.log(response))
                           .then(error=> console.log(error))*/
          alert('Borrado');
        },
        updateEntregada()
        {
        //da de alta con conexión a backend
        /*
        //¿post o put?
        axios.post('URL', this.entregada)
                         .then(response=> console.log(response))
                         .then(error=> console.log(error))*/
        alert('Actualizado');
        },
        reportEntregada()
        {
            //da de alta con conexión a backend
            /*
            axios.post('URL', this.entregada)
                            .then(response=> console.log(response))
                            .then(error=> console.log(error))*/
        alert('Generando reporte');
      }
    }
  })