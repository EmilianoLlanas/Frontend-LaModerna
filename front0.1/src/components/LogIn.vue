<template>
 <div id="fullpage">
      <!--<router-view/>-->
<NavBar></NavBar>
   <div id="content">
     <iframe scrolling="auto" width="100%" :src="this.source"></iframe>
   </div>
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'Login',
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
      this.role = "ADC"
    },
  methods: {
      navCatalogArticles () {
      this.source='http://localhost:8080/#/CatalogArticles';
    },
      navCatalogCompanies () {
      this.source='http://localhost:8080/#/CatalogCompanies';
    },
      navCatalogPrices () {
    this.source='http://localhost:8080/#/CatalogPrices';
    },
      navCatalogClients() {
      this.source='http://localhost:8080/#/CatalogClients';
    },
      navCaptureOrder() {
      this.source='http://localhost:8080/#/CaptureOrder';
    },
      navOrdersInProcess() {
      this.source='http://localhost:8080/#/OrdersInProcess';
    },
      navCatalogAgents() {
      this.source='http://localhost:8080/#/CatalogAgents';
    },
      navCatalogDelivered() {
      this.source='http://localhost:8080/#/CatalogDelivered';
    },
      navCatalogFacturas() {
      this.source='http://localhost:8080/#/CatalogFacturas';
    },
      navCatalogSaldo() {
      this.source='http://localhost:8080/#/CatalogSaldo';
    },
      navCatalogWarehouse() {
      this.source='http://localhost:8080/#/CatalogWarehouse';
    },
      navCatalogDeliveryAddresses() {
      this.source='http://localhost:8080/#/CatalogDeliveryAddresses';
    },
      navCatalogInventory() {
      this.source='http://localhost:8080/#/CatalogInventory';
    },
      navProcessedOrders() {
      this.source='http://localhost:8080/#/ProcessedOrders';
    },
      navOrderStatus() {
      this.source='http://localhost:8080/#/OrderStatus';
    },
      navAuthorizeDates() {
      this.source='http://localhost:8080/#/AuthorizeDates';
    },
      navRoles() {
      this.source='http://localhost:8080/#/RoleAssign';
    },
      navBackup () {
      this.source='http://localhost:8080/#/Backup';
    },
      navMenuAge() {
      this.source='http://localhost:8080/#/MenuAGE';
    },
    navConsultSalesOrder() {
      this.source='http://localhost:8080/#/ConsultSalesOrders';
    },
    navOrderRep(){
      this.source='http://localhost:8080/#/OrderDetails';
    },
      navAuthorizationING() {
      this.source='http://localhost:8080/#/AuthorizationING';
    },
    navAuthorizeVTA() {
      this.source='http://localhost:8080/#/AuthorizeVTA';
    },
    navAuthorizeOrderCxC() {
      this.source='http://localhost:8080/#/AuthorizeOrderCxC';
    },
    navBlock() {
      this.source='http://localhost:8080/#/BlockClient';
    },
    navAuthorizeOrderCST() {
      this.source='http://localhost:8080/#/AuthorizeOrderCST';
    },
    ordenesTodas() {
      this.source='http://localhost:8080/#/AllSalesReport';
    },
    sharedItems() {
      this.source='http://localhost:8080/#/SharedArticles';
    },
    CatalogSharedItems() {
      this.source='http://localhost:8080/#/CatalogSharedArticles';
    },
    navSearchOrdersperClient(){
      this.source='http://localhost:8080/#/SearchArticlesING';
    },
    navEditOrder(){
      this.source='http://localhost:8080/#/OrderEdit';
    },
    navTimeReport(){
      this.source='http://localhost:8080/#/TimeReport';
    },
    navReportGen(){
      this.source='http://localhost:8080/#/ReportGenerator';
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
      }
      document.getElementById("myDropdown").style.display = "none";
    },
    openDrop(){
      document.getElementById("myDropdown").style.display = "block";
    },
  },
  components: { NavBar }
}

</script>

<style scoped>
iframe {
  height: 100%;
  overflow: visible;
  border: none;
}
*{
  padding: 0;
  margin: 0;
}
img {
    display: flex;
    width:100%;
    height:100%;
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
  width: 100%;
  height: 100vh;
  background-image: url('fondito.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
#menuhead{
  background: #FFFF;
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
  max-height: 78%;
  overflow: scroll;
  overflow-x: hidden;
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
