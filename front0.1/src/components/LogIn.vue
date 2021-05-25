<template>
 <div id="fullpage">
   <div id="sidebar">
      <!--<router-view/>-->
            <div id="menuhead">
                <h3> Menú </h3>
            </div>
            <div id="menu-buttons">
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
                <a @click="navRoles"> <div class="element"> Asignacion de roles </div></a>
                <a @click="navBackup"> <div class="element"> Generar respaldo </div></a>
                <a @click="navMenuAge"> <div class="element"> Menu principal de AGE  </div></a>
                <a @click="navConsultSalesOrder"> <div class="element"> Consultar órdenes de venta </div></a>
                <a @click="navAuthorizationING"> <div class="element"> Autorización de ING </div></a>
                <a @click="navAuthorizeVTA"> <div class="element"> Autorizacion de VTA </div></a>
                <a @click="navAuthorizeOrderCxC"> <div class="element"> Autorización de ordenes CxC </div></a>
                <a @click="navBlock"> <div class="element"> Bloqueo de Clientes </div></a>
                <a @click="navAuthorizeOrderCST"> <div class="element"> Autorización de ordenes CST </div></a>
                <a @click="ordenesTodas"> <div class="element"> Todas las Ordenes </div></a>
                <a @click="sharedItems"> <div class="element"> Catálogo Artículos Compartidos </div></a>
                <a @click="navSearchOrdersperClient"> <div class="element"> Búsqueda de artículo por cliente (ING)</div></a>
            </div>


    </div>
   <div id="content">
     <iframe width="100%" height="100%" :src="this.source"></iframe>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data: function() {
        return {
            dateS: "",
            source:'',
        }
    },
  methods: {

      navCatalogArticles () {
      this.source='http://localhost:8081/#/CatalogArticles';
    },
      navCatalogCompanies () {
      this.source='http://localhost:8081/#/CatalogCompanies';
    },
      navCatalogPrices () {
    this.source='http://localhost:8081/#/CatalogPrices';
    },
      navCatalogClients() {
      this.source='http://localhost:8081/#/CatalogClients';
    },
      navCaptureOrder() {
      this.source='http://localhost:8081/#/CaptureOrder';
    },
      navOrdersInProcess() {
      this.source='http://localhost:8081/#/OrdersInProcess';
    },
      navCatalogAgents() {
      this.source='http://localhost:8081/#/CatalogAgents';
    },
      navCatalogDelivered() {
      this.source='http://localhost:8081/#/CatalogDelivered';
    },
      navCatalogFacturas() {
      this.source='http://localhost:8081/#/CatalogFacturas';
    },
      navCatalogSaldo() {
      this.source='http://localhost:8081/#/CatalogSaldo';
    },
      navCatalogWarehouse() {
      this.source='http://localhost:8081/#/CatalogWarehouse';
    },
      navCatalogDeliveryAddresses() {
      this.source='http://localhost:8081/#/CatalogDeliveryAddresses';
    },
      navCatalogInventory() {
      this.source='http://localhost:8081/#/CatalogInventory';
    },
      navProcessedOrders() {
      this.source='http://localhost:8081/#/ProcessedOrders';
    },
      navOrderStatus() {
      this.source='http://localhost:8081/#/OrderStatus';
    },
      navAuthorizeDates() {
      this.source='http://localhost:8081/#/AuthorizeDates';
    },
      navRoles() {
      this.source='http://localhost:8081/#/RoleAssign';
    },
      navBackup () {
      this.source='http://localhost:8081/#/Backup';
    },
      navMenuAge() {
      this.source='http://localhost:8081/#/MenuAGE';
    },

    navConsultSalesOrder() {
      this.source='http://localhost:8080/#/ConsultSalesOrders';

    },
      navAuthorizationING() {
      this.source='http://localhost:8081/#/AuthorizationING';
    },
    navAuthorizeVTA() {
      this.source='http://localhost:8081/#/AuthorizeVTA';
    },
    navAuthorizeOrderCxC() {
      this.source='http://localhost:8081/#/AuthorizeOrderCxC';
    },
    navBlock() {
      this.source='http://localhost:8081/#/BlockClient';
    },
    navAuthorizeOrderCST() {
      this.source='http://localhost:8081/#/AuthorizeOrderCST';
    },
    ordenesTodas() {
      this.source='http://localhost:8081/#/AllSalesReport';
    },
    sharedItems() {
      this.source='http://localhost:8081/#/CatalogSharedArticles';
    },
    navSearchOrdersperClient(){
      this.source='http://localhost:8080/#/SearchArticlesING';
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

#menu-buttons {
  max-height: 800px;
  overflow: scroll;
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
