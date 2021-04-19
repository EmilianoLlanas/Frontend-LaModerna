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
      saldo:{
        orden:'',
        cliente:'',
        numFactura:'',
        saldoOrden:'',
        saldoFactura:''},
      searchQuery: '',
      gridColumns: ['Orden', 'Cliente', 'NumeroFactura','SaldoOrden','SaldoFactura'],
      gridData: [
        {Orden: "1024", Cliente:"Zara", NumeroFactura:"7",SaldoOrden:"7777",SaldoFactura:"7000"},
        {Orden: "2410", Cliente:"Barcel", NumeroFactura:"45",SaldoOrden:"4500",SaldoFactura:"2500"},
        {Orden: "5342", Cliente:"Totis", NumeroFactura:"88",SaldoOrden:"6400",SaldoFactura:"500"}
      ]
    },

    methods:
    {
        addSaldo(){
            //da de alta con conexión a backend
            /*
            axios.post('URL', this.saldo)
                             .then(response=> console.log(response))
                             .then(error=> console.log(error))*/
            alert('Agregado');
        },
        deleteSaldo(){
          //da de alta con conexión a backend
          /*
          axios.delete('URL', this.saldo)
                           .then(response=> console.log(response))
                           .then(error=> console.log(error))*/
          alert('Borrado');
        },
        updateSaldo()
        {
        //da de alta con conexión a backend
        /*
        //¿post o put?
        axios.post('URL', this.saldo)
                         .then(response=> console.log(response))
                         .then(error=> console.log(error))*/
        alert('Actualizado');
        },
        reportSaldo()
        {
            //da de alta con conexión a backend
            /*
            axios.post('URL', this.saldo)
                            .then(response=> console.log(response))
                            .then(error=> console.log(error))*/
        alert('Generando reporte');
      }
    }
  })