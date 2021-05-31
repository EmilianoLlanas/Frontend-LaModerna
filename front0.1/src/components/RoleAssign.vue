<template>

  <div id="content">

    <h1 id="header1"> Roles de Empleados </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm" style="width: 80%" >
        <form>

          <div style="margin-bottom: 15px">
            <label>Usuario</label>
          </div>

          <input v-model="aUser" placeholder="Usuario del Empleado a modificar">

          
          <br>
          <div class="checkboxes">
            <input type="checkbox" id="Cl1" name="ADM" value="ADM">
            <label for="ADM"> ADM </label>
            <input type="checkbox" id="Cl2" name="ADC" value="ADC">
            <label for="ADC"> ADC </label>
            <input type="checkbox" id="Cl3" name="AGE" value="AGE">
            <label for="AGE"> AGE </label>
            <input type="checkbox" id="Cl4" name="CST" value="CST">
            <label for="CST"> CST </label>
            <br>
            <input type="checkbox" id="Cl5" name="CXC" value="CXC">
            <label for="CXC"> CXC </label>
            <input type="checkbox" id="Cl6" name="DIR" value="DIR">
            <label for="DIR"> DIR </label>
            <input type="checkbox" id="Cl7" name="EMB" value="EMB">
            <label for="EMB"> EMB </label>
            <input type="checkbox" id="Cl8" name="FAC" value="FAC">
            <label for="FAC"> FAC </label>
            <input type="checkbox" id="Cl9" name="FEC" value="FEC">
            <label for="FEC"> FEC </label>
            <br>
            <input type="checkbox" id="Cl10" name="ING" value="ING">
            <label for="ING"> ING </label>
            <input type="checkbox" id="Cl11" name="PLN" value="PLN">
            <label for="PLN"> PLN </label>
            <input type="checkbox" id="Cl12" name="REA" value="REA">
            <label for="REA"> REA </label>
            <input type="checkbox" id="Cl13" name="VTA" value="VTA">
            <label for="VTA"> VTA </label>
          </div>
          <br>
          <label>Motivo (Si aplica)</label>
          <br>
          <textarea v-model="aReason" placeholder="Motivo del cambio a realizar"></textarea>
          <br>
        </form>

        <div id="buttons">
          <button @click="changeRoles"> Aplicar Cambios </button>
        </div>
      </div>

      <div id="table" style="width: 80%" >
        <vue-table-dynamic :params="params"
         @select="onSelect"
         @selection-change="onSelectionChange"
         ref="table">
        </vue-table-dynamic>
        <br>
      </div>

      <div id="buttons">
        <button @click="showReport"> Reporte de Empleados </button>
        <button @click="showChecklist"> Cambiar roles de Empleado </button>
      </div>

    </div>
  </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
export default {
  name: 'EmployeeReport',
  data() {
    return {
      aUser:'',
      aRoles:'',
      aLastDesc:'',
      aModUser:'',
      aReason:'',
      params: {
        data: [
          ['Usuario', 'Roles', 'UltModificación', 'UsuarioModificó', 'Motivo'],
          ['juanesparza@gmail.com', 'ADC', '21-05-2021', 'Pedro', '-'],

        ],
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
    },
    showReport(){
      document.getElementById("dropdown").style.display = "none";
      document.getElementById("table").style.display = "block";
    },
    showChecklist(){
      document.getElementById("table").style.display = "none";
      document.getElementById("dropdown").style.display = "block";
    },
    changeRoles(){

    },
  },
  components: { VueTableDynamic }
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

#dropdown {
  display: none;
  margin: 7%;
  color: #213485;
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
