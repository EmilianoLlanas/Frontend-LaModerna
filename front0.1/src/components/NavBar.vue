<template>
       <div id="sidebar">
           <div id="menuhead">
               <img :src="require('@/assets/logotipo1.jpg')">
           </div>
           <div id="menu-buttons">

             <a @click="openDrop"> <div class="element"> Cambiar de Rol </div></a>
             <div id="myDropdown" style="display:none;">
               <a @click="updateRoles(0)"><div class="element">ADC</div></a>
               <a @click="updateRoles(1)"><div class="element">AGE</div></a>
               <a @click="updateRoles(2)"><div class="element">CXC</div></a>
               <a @click="updateRoles(3)"><div class="element">PLN</div></a>
               <a @click="updateRoles(4)"><div class="element">ING</div></a>
               <a @click="updateRoles(5)"><div class="element">CST</div></a>
               <a @click="updateRoles(6)"><div class="element">VTA</div></a>
               <a @click="updateRoles(7)"><div class="element">EMB</div></a>
               <a @click="updateRoles(8)"><div class="element">REA</div></a>
               <a @click="updateRoles(9)"><div class="element">DIR</div></a>
             </div>
             <div v-if="this.role === 'ADC'" style="margin: 0%; padding: 0%;">
               <a @click="navCatalogArticles"> <div class="element"> Catálogo de Artículos </div></a>
               <a @click="navCatalogCompanies"> <div class="element"> Catálogo de Compañías</div></a>
               <a @click="navCatalogPrices"> <div class="element">Catálogo de Precios </div></a>
               <a @click="navCatalogClients"> <div class="element">Catálogo de Clientes </div></a>
               <a @click="navCatalogAgents"> <div class="element">Catálogo de Agentes </div></a>
               <a @click="navCatalogDelivered"> <div class="element">Catálogo de Entregas </div></a>
               <a @click="navCatalogFacturas"> <div class="element">Catálogo de Facturas </div></a>
               <a @click="navCatalogSaldo"> <div class="element">Catálogo de Saldos  </div></a>
               <a @click="navCatalogWarehouse"> <div class="element">Catálogo de Almacenes </div></a>
               <a @click="navCatalogDeliveryAddresses"> <div class="element">Catálogo de Direcciones de entrega  </div></a>
               <a @click="navCatalogInventory"> <div class="element">Catálogo de Inventario </div></a>
               <a @click="navConsultSalesOrder"> <div class="element"> Consultar órdenes de venta </div></a>
               <a @click="sharedItems"> <div class="element"> Artículos Compartidos</div></a>
               <a @click="navRoles"> <div class="element"> Asignacion de roles </div></a>
               <a @click="navBackup"> <div class="element"> Generar respaldo </div></a>
             </div>
             <div v-if="this.role === 'AGE'" style="margin: 0%; padding: 0%;">
               <a @click="navCaptureOrder"> <div class="element"> Captura de Órdenes </div></a>
               <a @click="navEditOrder"> <div class="element"> Editar Órdenes </div></a>
               <a @click="navOrdersInProcess"> <div class="element"> Consulta de Órdenes en proceso </div></a>
               <a @click="navProcessedOrders"> <div class="element"> Consulta de Órdenes Procesadas </div></a>
               <a @click="navOrderStatus"> <div class="element"> Consulta de Estatus de Órdenes  </div></a>
              <a @click="navAllSalesReport"> <div class="element"> Reporte de todas las Órdenes </div></a>

             </div>
             <div v-if="this.role === 'CXC'" style="margin: 0%; padding: 0%;">
               <a @click="navAuthorizeOrderCxC"> <div class="element"> Autorización de ordenes CxC </div></a>
               <a @click="navBlock"> <div class="element"> Bloqueo de Clientes </div></a>
               <a @click="navConsultSalesOrder"> <div class="element"> Consultar órdenes de venta </div></a>
             </div>
             <div v-if="this.role === 'PLN'" style="margin: 0%; padding: 0%;">
               <a @click="navAuthorizeDates"> <div class="element">Autorizacion de fechas de entrega  </div></a>
               <a @click="navConsultSalesOrder"> <div class="element"> Consultar órdenes de venta </div></a>
               <a @click="navTimeReport"> <div class="element"> Reporte de Tiempo por Departamento </div></a>
             </div>
             <div v-if="this.role === 'ING'" style="margin: 0%; padding: 0%;">
               <a @click="navAuthorizationING"> <div class="element"> Autorización de ING </div></a>
               <a @click="navConsultSalesOrder"> <div class="element"> Consultar órdenes de venta </div></a>
               <a @click="navSearchOrdersperClient"> <div class="element"> Búsqueda de artículo por cliente (ING)</div></a>
             </div>
             <div v-if="this.role === 'CST'" style="margin: 0%; padding: 0%;">
               <a @click="navAuthorizeOrderCST"> <div class="element"> Autorización de ordenes CST </div></a>
               <a @click="ordenesTodas"> <div class="element"> Todas las Órdenes </div></a>
               <a @click="navConsultSalesOrder"> <div class="element"> Consultar órdenes de venta </div></a>
             </div>
             <div v-if="this.role === 'VTA'" style="margin: 0%; padding: 0%;">
               <a @click="navAuthorizeVTA"> <div class="element"> Autorizacion de VTA </div></a>
               <a @click="ordenesTodas"> <div class="element"> Todas las Órdenes </div></a>
               <a @click="navConsultSalesOrder"> <div class="element"> Consultar órdenes de venta </div></a>
             </div>
             <div v-if="this.role === 'EMB'" style="margin: 0%; padding: 0%;">
               <a @click="ordenesTodas"> <div class="element"> Todas las Órdenes </div></a>
               <a @click="navConsultSalesOrder"> <div class="element"> Consultar órdenes de venta </div></a>
             </div>
             <div v-if="this.role === 'REA'" style="margin: 0%; padding: 0%;">
               <a @click="sharedItems"> <div class="element"> Artículos Compartidos </div></a>
             </div>
             <div v-if="this.role === 'DIR'" style="margin: 0%; padding: 0%;">
               <a @click="ordenesTodas"> <div class="element"> Todas las Órdenes </div></a>
               <a @click="navConsultSalesOrder"> <div class="element"> Consultar órdenes de venta </div></a>
               <a @click="CatalogSharedItems"> <div class="element"> Catálogo de Artículos Compartidos </div></a>
               <a @click="navAuthorizeOrderCxC"> <div class="element"> Autorización de órdenes CxC</div></a>
               <a @click="navAuthorizationING"> <div class="element"> Autorización de órdenes ING </div></a>
               <a @click="navAuthorizeOrderCST"> <div class="element"> Autorización de órdenes CST </div></a>
               <a @click="navAuthorizeVTA"> <div class="element"> Autorizacion de órdenes VTA </div></a>
               <a @click="navTimeReport"> <div class="element"> Reporte de Tiempo por Departamento </div></a>
               <a @click="navReportGen"> <div class="element"> Generación de Reportes </div></a>
             </div>
                 <div v-if="this.role === 'Null'" style="margin: 0%; padding: 0%;">
             </div>


           </div>


   </div>

</template>

<script>
export default {
  name: 'NavBar',
  components:{
  },

  data: function() {
        return {
            dateS: "",
            source:'',
            role: ""
        }
    },
  created: function(){
      this.role = "Null"
    },
  methods: {

    navCatalogArticles () {
      this.$router.push({ name:'CatalogArticles' });
    },
      navCatalogCompanies () {
      this.$router.push({ name:'CatalogCompanies' });
    },
      navCatalogPrices () {
      this.$router.push({ name:'CatalogPrices' });
    },
      navCatalogClients() {
      this.$router.push({ name:'CatalogClients' });
    },
      navCaptureOrder() {
      this.$router.push({ name:'CaptureOrder' });
    },
      navOrdersInProcess() {
      this.$router.push({ name:'OrdersInProcess' });
    },
      navCatalogAgents() {
      this.$router.push({ name:'CatalogAgents' });
    },
      navCatalogDelivered() {
      this.$router.push({ name:'CatalogDelivered' });
    },
      navCatalogFacturas() {
      this.$router.push({ name:'CatalogFacturas' });
    },
      navCatalogSaldo() {
      this.$router.push({ name:'CatalogSaldo' });
    },
      navCatalogWarehouse() {
      this.$router.push({ name:'CatalogWarehouse' });
    },
      navCatalogDeliveryAddresses() {
      this.$router.push({ name:'CatalogDeliveryAddresses' });
    },
      navCatalogInventory() {
      this.$router.push({ name:'CatalogInventory' });
    },
      navProcessedOrders() {
      this.$router.push({ name:'ProcessedOrders' });
    },
      navOrderStatus() {
      this.$router.push({ name:'OrderStatus' });
    },
      navAuthorizeDates() {
      this.$router.push({ name:'AuthorizeDates' });
    },
      navRoles() {
      this.$router.push({ name:'RoleAssign' });
    },
      navBackup () {
      this.$router.push({ name:'Backup' });
    },
      navMenuAge() {
      this.$router.push({ name:'MenuAGE' });
    },
    navConsultSalesOrder() {
    this.$router.push({ name:'ConsultSalesOrders' });
    },
      navAuthorizationING() {
      this.$router.push({ name:'AuthorizationING' });
    },
    navAuthorizeVTA() {
      this.$router.push({ name:'AuthorizeVTA' });
    },
    navAuthorizeOrderCxC() {
      this.$router.push({ name:'AuthorizeOrderCxc' });
    },
    navBlock() {
      this.$router.push({ name:'BlockClient' });
    },
    navAuthorizeOrderCST() {
      this.$router.push({ name:'AuthorizeOrderCST' });
    },
    navAllSalesReport() {
      this.$router.push({ name:'AllSalesReport' });
    },
    sharedItems() {
      this.$router.push({ name:'SharedArticles' });
    },
    CatalogSharedItems() {
      this.$router.push({ name:'CatalogSharedArticles' });
    },
    navSearchOrdersperClient(){
        this.$router.push({ name:'SearchArticlesING' });
    },
    navEditOrder(){
        this.$router.push({ name:'OrderEdit' });
    },
    navTimeReport(){
        this.$router.push({ name:'TimeReport' });
    },

    navReportGen(){
      this.$router.push({ name:'ReportGenerator' });
    },

    updateRoles(x){
      switch(x){
        case 0:
          this.role = "ADC";
          break;
        case 1:
          this.role = "AGE";
          break;
        case 2:
          this.role = "CXC";
          break;
        case 3:
          this.role = "PLN";
          break;
        case 4:
          this.role = "ING";
          break;
        case 5:
          this.role = "CST";
          break;
        case 6:
          this.role = "VTA";
          break;
        case 7:
          this.role = "EMB";
          break;
        case 8:
          this.role = "REA";
          break;
        case 9:
          this.role = "DIR";
          break;
        case 10:
          this.role = "Null";
          break;
      }
      document.getElementById("myDropdown").style.display = "none";
    },
    openDrop(){
      document.getElementById("myDropdown").style.display = "block";
    },

  }
}

</script>

<style>
#menuhead{
  background: #FFFF;
  padding: 1em;

}
#menu-buttons {
  max-height: 78%;
  overflow: scroll;
  overflow-x: hidden;
}

#sidebar{
  background: #f7f7f7;
  height: 100vh;
  width: 22%;
}
#sidebar .element:hover{
  background: rgba(14,44,164,0.30);
  color: white;
  font-weight: bold;
}
</style>
