<template>
  <div id="fullpage">
      <NavBar></NavBar>
  <div id="content">

    <h1 id="header1"> Autorizacion VTA </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div id="table">
        <vue-table-dynamic :params="params"
          @select="onSelect"
          @selection-change="onSelectionChange"
          ref="table">
        </vue-table-dynamic>

        <br>

      </div>

      <div id="buttons">
        <button @click="authOrder"> Autorizar orden </button>
        <button @click="update"> Actualizar </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic';
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'AuthorizeVTA',
  data() {
    return {
      select:-1,
      params: {
        data: [
          ['ID','Cliente','Cantidad','Precio','FechaOC','FechaCliente','Autorizada'],
          [1, 'Zara', '500', '2500', '1/12/2021', '8/12/2021', 'NO'],
          [2, 'WalMart', '250', '3000', '1/12/2021', '8/12/2021', 'NO'],
          [3, 'Soriana', '800', '4200', '1/12/2021', '8/12/2021', 'NO'],
        ],
        deleteData:[],
        header: 'row',
        border: true,
        stripe: true,
        edit:{
            row: [1, 2],
            column: [1],
            cell:[[1,1]]
        },
        showCheck: true,
        enableSearch: true,
        sort: [0, 1, 2],
        pagination: true,
        pageSize: 10,
      }
    }
  },
  methods: {
    onSelect (isChecked, index, data) {
      this.select=index;
      console.log('onSelect: ', isChecked, index, data)
      console.log('Checked Data:', this.$refs.table.getCheckedRowDatas(true))
    },
    onSelectionChange (checkedDatas, checkedIndexs, checkedNum) {
      console.log('onSelectionChange: ', checkedDatas, checkedIndexs, checkedNum)
      this.params.deleteData=checkedIndexs
    },
    authOrder(){
       if(this.params.data[this.select][6]=='NO'){
          this.params.data[this.select][6]='SI'
          this.params.data.push(this.params.data[this.select])
          this.params.data.splice(this.select, 1)
        }
  },
    update(){
            alert("Actualizando informacion...");
    }
  },
  components: { VueTableDynamic, NavBar}
}
</script>

<style scoped>
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
#fullpage{
  display: flex;
}

#content{
  width: 100%;
  height: 100%;
  background-image: url('~@/components/fondito.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}

</style>
