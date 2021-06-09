<template>

  <div id="content">

    <h1 id="header1"> Catálogo de Precios </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <div id="error">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>

        <form>
          <label>Compañia</label>
          <br>
          <input v-model="aCompania" placeholder="Compañia">
          <br>
          <label>Lista de Precios</label>
          <br>
          <input v-model="aLista" placeholder="Lista de precios" type="number">
          <br>
          <label>Articulo</label>
          <br>
          <input v-model="aArticulo" placeholder="Articulo">
          <br>
          <label>Nivel de Descuento</label>
          <br>
          <input v-model="aNivDescuento" placeholder="0" type="number">
          <label>Cantidad</label>
          <br>
          <input v-model="aCantidad" placeholder="Cantidad" type="number">
          <br>
          <label>Precio</label>
          <br>
          <input v-model="aPrecio" placeholder="Precio" type="number">
          <br>
          <label>Descuento</label>
          <br>
          <input v-model="aDescuento" placeholder="0" type="number">
          <br>
          <label>Descripcion</label>
          <br>
          <input v-model="aDescripcion" placeholder="Descripcion del producto">
          <br>
          <label>Fecha de inicio</label>
          <br>
          <datepicker placeholder="Fecha de entrega" v-model="aFechaInicio" :format="customFormatter" :disabledDates="disabledDates"></datepicker>
          <br>
          <label>Fecha de caducidad</label>
          <br>
          <datepicker placeholder="Fecha de entrega" v-model="aFechaCaducidad" :format="customFormatter" :disabledDates="disabledDates"></datepicker>
          <br>
          <br>
        </form>
      </div>

      <div id="buttons">
        <button @click="signUpPrice"> Dar de alta </button>
        <button @click="signDownPrice"> Dar de baja </button>
        <button @click="loadPrices"> Actualizar </button>
        <button @click="generateReport"> Reportes </button>
      </div>

      <div id="table">
        <vue-table-dynamic :params="params"
            @select="onSelect"
            @selection-change="onSelectionChange"
            ref="table">
        </vue-table-dynamic>
        <br>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default {
  name: 'CatalogPrices',
  data() {
    return {
      aCompania:'',
      aLista:0,
      aArticulo:'',
      aNivDescuento:0,
      aCantidad:0,
      aPrecio:0,
      aDescuento:0,
      aDescripcion:'',
      aFechaInicio:'',
      aFechaCaducidad:'',
      disabledDates: {
      to: new Date(Date.now() - 8640000)
      },
      errors:[],
      params: {
        data: [
          ['Compañia','Lista de precios','Articulo','Nivel de Descuento','Cantidad','Precio','Descuento','Descripción','Fecha de inicio','Fecha de caducidad'],
          ['ejemplo0','lista0','123','0','100','12.3','1','Descripcion 0','12/12/20','12/12/21'],
          ['ejemplo1','lista0','123','0','111','13.3','2','Descripcion 1','12/11/20','12/11/21'],
          ['ejemplo2','lista1','124','2','123','32.3','1','Descripcion 2','12/12/20','12/12/21'],
        ],
        deleteData:[],
        header: 'row',
        border: true,
        stripe: true,
        showCheck: true,
        enableSearch: true,
        sort: [0, 1,2],
        pagination: true,
        pageSize: 10,
      }
    }
  },
  methods: {
    onSelect (isChecked, index, data) {
      console.log('onSelect: ', isChecked, index, data)
      console.log('Checked Data:', this.$refs.table.getCheckedRowDatas(true))
    },
    onSelectionChange (checkedDatas, checkedIndexs, checkedNum) {
      console.log('onSelectionChange: ', checkedDatas, checkedIndexs, checkedNum)
      this.params.deleteData=checkedIndexs
    },
    signUpPrice(){
        this.errors=[]
        //there will be a method here to establish connection with backend and sign up the articles' id and name, some day....
        if(this.aCompania && this.aLista && this.aArticulo && this.aNivDescuento && this.aCantidad && this.aPrecio && this.aDescuento && this.aDescripcion && this.aFechaInicio && this.aFechaCaducidad){
          this.params.data.push([this.aCompania, this.aLista, this.aArticulo, this.aNivDescuento, this.aCantidad, this.aPrecio, this.aDescuento, this.aDescripcion, this.aFechaInicio, this.aFechaCaducidad])
        }else{
          if(!this.aCompania){
            this.errors.push('Campo compañía esta vacio')
          }
          if(!this.aLista){
            this.errors.push('Campo lista esta vacio')
          }
          if(!this.aArticulo){
            this.errors.push('Campo articulo esta vacio')
          }
          if(!this.aNivDescuento){
            this.errors.push('Campo nivel de Descuento esta vacio')
          }
          if(!this.aCantidad){
            this.errors.push('Campo cantidad esta vacio')
          }
          if(!this.aPrecio){
            this.errors.push('Campo precio esta vacio')
          }
          if(!this.aDescuento){
            this.errors.push('Campo descuento esta vacio')
          }
          if(!this.aDescripcion){
            this.errors.push('Campo descripcion esta vacio')
          }
          if(!this.aFechaInicio){
            this.errors.push('Campo fecha de inicio esta vacio')
          }
          if(!this.aFechaCaducidad){
            this.errors.push('Campo fecha de caducidad esta vacio')
          }
        }
        this.aCompania='';
        this.aLista='';
        this.aArticulo='';
        this.aNivDescuento='';
        this.aCantidad='';
        this.aPrecio='';
        this.aDescuento='';
        this.aDescripcion='';
        this.aFechaInicio='';
        this.aFechaCaducidad='';
    },
    signDownPrice(){
        //there will be a method here to establish connection with backend and sign down the articles' id and name, some day....
        this.aCompania='';
        this.aLista='';
        this.aArticulo='';
        this.aNivDescuento='';
        this.aCantidad='';
        this.aPrecio='';
        this.aDescuento='';
        this.aDescripcion='';
        this.aFechaInicio='';
        this.aFechaCaducidad='';
        for (var i = this.params.deleteData.length-1; i>0 ; i--) {
          this.params.data.splice(this.params.deleteData[i], 1)
        }
    },
    loadPrices(){
        //there will be a method here to establish connection with backend and update the table, some day....
        if(this.aCompania && this.aLista && this.aArticulo && this.aNivDescuento && this.aCantidad && this.aPrecio && this.aDescuento && this.aDescripcion && this.aFechaInicio && this.aFechaCaducidad){
          alert('aqui va la logica de update')
        }else{
          if(!this.aCompania){
            this.errors.push('campo compañía esta vacio')
          }
          if(!this.aLista){
            this.errors.push('campo lista esta vacio')
          }
          if(!this.aArticulo){
            this.errors.push('campo articulo esta vacio')
          }
          if(!this.aNivDescuento){
            this.errors.push('campo nivel de Descuento esta vacio')
          }
          if(!this.aCantidad){
            this.errors.push('campo cantidad esta vacio')
          }
          if(!this.aPrecio){
            this.errors.push('campo precio esta vacio')
          }
          if(!this.aDescuento){
            this.errors.push('campo descuento esta vacio')
          }
          if(!this.aDescripcion){
            this.errors.push('campo descripcion esta vacio')
          }
          if(!this.aFechaInicio){
            this.errors.push('campo fecha de inicio esta vacio')
          }
          if(!this.aFechaCaducidad){
            this.errors.push('campo fecha de caducidad esta vacio')
          }
        }
        this.aCompania='';
        this.aLista='';
        this.aArticulo='';
        this.aNivDescuento='';
        this.aCantidad='';
        this.aPrecio='';
        this.aDescuento='';
        this.aDescripcion='';
        this.aFechaInicio='';
        this.aFechaCaducidad='';
        alert('Actualizando tabla con Base de datos')
    },
    generateReport(){
      //aqui se mandara a llamar la pagina de reportes
    },
    customFormatter(date) {
     return moment(date).format('YYYY/MM/DD');
   }
  },
  components: { VueTableDynamic,Datepicker }
}
</script>

<style scoped>
.inputForm{
  width: 90%;
  clear: both;
  color: #213485;
  margin: 3%;
  font-size: 20px;
  font-family: Verdana;
  font-size: 20px;
}

.inputForm input{
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
  color: #213485;
}

.inputForm textarea{
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
  background-color: rgba(14,44,164,0.30);
}

#header1{
  margin: 2%;
  font-family: Verdana;
  font-size: 60px;
  color: #FFFF;
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

#error{
  color: red;
}
</style>
