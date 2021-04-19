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
      factura:{
        fecha:'',
        numFactura:'',
        cliente:'',
        orden:'',
        entrega:''},
      searchQuery: '',
      gridColumns: ['Fecha', 'NumeroFactura', 'Cliente','Orden','Entrega'],
      gridData: [
        {Fecha: "12/05/18", NumeroFactura:"4888", Cliente:"Zara", Orden:"7777", Entrega:"ok"},
        {Fecha: "31/12/20", NumeroFactura:"4486", Cliente:"Barcel", Orden:"9021", Entrega:"ok"},
        {Fecha: "10/01/21", NumeroFactura:"6548", Cliente:"Totis", Orden:"2312", Entrega:"ok"}
      ]
    },

    methods:
    {
        addFactura(){
            //da de alta con conexión a backend
            /*
            axios.post('URL', this.factura)
                             .then(response=> console.log(response))
                             .then(error=> console.log(error))*/
            alert('Agregado');
        },
        deleteFactura(){
          //da de alta con conexión a backend
          /*
          axios.delete('URL', this.factura)
                           .then(response=> console.log(response))
                           .then(error=> console.log(error))*/
          alert('Borrado');
        },
        updateFactura()
        {
        //da de alta con conexión a backend
        /*
        //¿post o put?
        axios.post('URL', this.factura)
                         .then(response=> console.log(response))
                         .then(error=> console.log(error))*/
        alert('Actualizado');
        },
        reportFactura()
        {
            //da de alta con conexión a backend
            /*
            axios.post('URL', this.factura)
                            .then(response=> console.log(response))
                            .then(error=> console.log(error))*/
        alert('Generando reporte');
      }
    }
  })