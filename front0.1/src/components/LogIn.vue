<template>

<<<<<<< Updated upstream
    <div id="test">
      <router-view/>
      <h1> Login </h1>
      <button @click="navCatalogArticles"> Ir al catálogo de Artículos </button>
      <button @click="navCatalogCompanies"> Ir al catálogo de Compañías </button>
      <button @click="navCatalogPrices"> Ir al catálogo de Precios </button>
      <button @click="navCatalogClients"> Ir al catálogo de Clientes </button>
      <button @click="navCaptureOrder"> Ir a la captura de Órdenes </button>
      <button @click="navOrdersInProcess"> Ir a la Consulta de Órdenes en proceso </button>
      <button @click="navCatalogAgents"> Ir al catálogo de Agentes </button>
      <button @click="navCatalogDelivered"> Ir al catálogo de Entregas </button>
      <button @click="navCatalogFacturas"> Ir al catálogo de Facturas </button>
      <button @click="navCatalogSaldo"> Ir al catálogo de Saldos </button>
      <button @click="navCatalogWarehouse"> Ir al catálogo de Almacenes </button>
      <button @click="navCatalogDeliveryAddresses"> Ir al catálogo de Direcciones de entrega </button>
      <button @click="navCatalogInventory"> Ir al catálogo de Inventario </button>
      <button @click="navProcessedOrders"> Ir a la Consulta de Órdenes Procesadas </button>
      <button @click="navOrderStatus"> Ir a la Consulta de Estatus de Órdenes </button>
      <button @click="navAuthorizeDates"> Ir a la autorizacion de fechas de entrega </button>
      <button @click="navMenuAge"> ir a menu principal de AGE </button>
=======
 <div id="fullpage">
   <div id="sidebar">
      <!--<router-view/>-->
                <div id="menuhead">
                    <h3> Menú </h3>
                </div>
                <a @click="navCatalogArticles"> <div class="element"> Catálogo de Artículos </div></a>
                <a @click="navCatalogCompanies"> <div class="element">Catálogo de Compañías </div></a>
                <a @click="navCatalogPrices"> <div class="element">Catálogo de Precios  </div></a>
                <a @click="navCatalogClients"> <div class="element">Catálogo de Clientes </div> </a>
                <a @click="navCaptureOrder"> <div class="element">Captura de Órdenes  </div></a>
                <a @click="navOrdersInProcess"> <div class="element">Consulta de Órdenes en proceso </div> </a>
                <a @click="navCatalogAgents"> <div class="element">Catálogo de Agentes  </div></a>
                <a @click="navCatalogDelivered"> <div class="element">Catálogo de Entregas  </div></a>
                <a @click="navCatalogFacturas"> <div class="element">Catálogo de Facturas </div> </a>
                <a @click="navCatalogSaldo"> <div class="element">Catálogo de Saldos  </div></a>
                <a @click="navCatalogWarehouse"> <div class="element">Catálogo de Almacenes  </div></a>
                <a @click="navCatalogDeliveryAddresses"> <div class="element">Catálogo de Direcciones de entrega  </div></a>
                <a @click="navCatalogInventory"> <div class="element">Catálogo de Inventario  </div></a>
                <a @click="navProcessedOrders"> <div class="element"> Consulta de Órdenes Procesadas  </div></a>
                <a @click="navOrderStatus"> <div class="element"> Consulta de Estatus de Órdenes  </div></a>
                <a @click="navAuthorizeDates"> <div class="element">Autorizacion de fechas de entrega  </div></a>
                <a @click="backup"> <div class="element">Generar respaldo del sistema  </div></a>
                <a @click="restore"> <div class="element"> Restaurar sistema  </div></a>
                <a @click="navMenuAge"> <div class="element"> menu principal de AGE  </div></a>
            </div>
      <div id="content">
        <iframe width="100%" height="100%" src="http://localhost:8081/#/CatalogArticles"></iframe>
      </div> 
>>>>>>> Stashed changes
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  methods: {
      navCatalogArticles () {
      this.$router.push({ name:'CatalogArticles' });
    },
      navCatalogCompanies () {
      this.$router.push({ name:'CatalogCompanies' });
    },
    navCatalogPrices () {
      this.$router.push({name:'CatalogPrices'});
    },
    navCatalogClients() {
      this.$router.push({name:'CatalogClients'})
    },
    navCaptureOrder() {
      this.$router.push({name: 'CaptureOrder'})
    },
    navOrdersInProcess() {
      this.$router.push({name: 'OrdersInProcess'})
    },
    navCatalogAgents() {
      this.$router.push({name: 'CatalogAgents'})
    },
    navCatalogDelivered() {
      this.$router.push({name: 'CatalogDelivered'})
    },
    navCatalogFacturas() {
      this.$router.push({name: 'CatalogFacturas'})
    },
    navCatalogSaldo() {
      this.$router.push({name: 'CatalogSaldo'})
    },
    navCatalogWarehouse() {
      this.$router.push({name: 'CatalogWarehouse'})
    },

    navCatalogDeliveryAddresses() {
      this.$router.push({name: 'CatalogDeliveryAddresses'})
    },
    navCatalogInventory() {
      this.$router.push({name: 'CatalogInventory'})
    },
    navProcessedOrders() {
      this.$router.push({name: 'ProcessedOrders'})
    },
    navOrderStatus() {
      this.$router.push({name: 'OrderStatus'})
    },
    navAuthorizeDates(){
      this.$router.push({name:'AuthorizeDates'})
    },
    navMenuAge(){
      this.$router.push({name:'MenuAGE'})
    }
    }
  }
</script>

<style scoped>

*{
  padding: 0;
  margin: 0;
}

#fullpage{
  display: flex;
}

#sidebar{
  background: #f7f7f7;
  height: 100vh;
  width: 22%;
}

#content{
  background: rgba(33,52,133,0.20);
  width: 100%;
  height: 100vh;
}

#menuhead{
  background: #3B0EA4;
  padding: 1em;
}

h3{
  text-align: center;
  font-size: 2.4em;
  font-family:  "GOTY0","GOTY1","GOTY2",verdana;
  color: #f7f7f7;
}

#sidebar div{
  text-align: center;
  padding: 20px;
  border-bottom: solid 1px #7a7a7a;
  font-size: 16px;
  font-family:  "GOTY0","GOTY1","GOTY2",verdana;
}

#sidebar .element:hover{
  background: rgba(14,44,164,0.30);
  color: white;
  font-weight: bold;
}

.inputForm {
  width: 90%;
  clear: both;
  color: #213485;
  margin: 3%;
  font-size: 20px;
  font-family: Verdana;
  font-size: 20px;
}
        
.inputForm  input {
  width: 100%;
  clear: both;
  margin-top: 2%;
  margin-bottom: 5%;
  height: 50px;
  font-size: 20px;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
  background: #f2f2f2;
  padding: 10px;
}
        
.inputForm  textarea {
  padding: 10px;
  width: 150%;
  height: 90px;
  color: #213485;
  margin-top: 2%;
  margin-bottom: 0%;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
  background: #f2f2f2;
  width: 100%; 
  font-family: Verdana;
  font-size: 20px;
}
        
button{
  margin-top: 0%;
  margin-left: 3%;
  color: #0E2CA4;
  opacity: 70%;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  text-shadow: 1px 1px rgba(14,44,164,0.50);
  background-color: transparent;
  padding: 5px;
  font-weight: 700;
  font-size: 24px;
  border-radius: 6px;
  border: transparent;
  margin-bottom: 40px;
}
        
button:hover{
  background-color: rgba(14,44,164,0.30) ;
}
        
#test{
  background-color: rgba(33,52,133,0.20);
  margin: 1%;
  color: #3B0EA4;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
}
        
#header1{
  margin: 2%;
  font-family: Verdana;
  font-size: 60px;
  color: #3B0EA4;
  text-align: center;
}
        
#table{
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}

label{
  font-family: Verdana;
  font-weight: bold;
}

#card{
  background: #fff;
  width: 80%;
  margin: 5em;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.14);
  border-radius: 15px;
}

#cardheader{
  height: 20px;
  width: 100%;
  background: #3B0EA4;
}

#buttons{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
