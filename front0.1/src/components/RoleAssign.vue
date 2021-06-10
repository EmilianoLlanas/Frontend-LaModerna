<template>
    <div>
      <h1> Roles de Empleados </h1>
      <br>
      <button @click="showReport"> Reporte de Empleados </button>
      <button @click="showChecklist"> Cambiar roles de Empleado </button>
      <div id="dropdown" style="width: 80%" >
        <form>
          <label>Usuario</label>
          <br>
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
          <button @click="changeRoles"> Aplicar Cambios </button>
        </form>
      </div>
      <div id="table" style="width: 80%" >
        <vue-table-dynamic :params="params"
         @select="onSelect"
         @selection-change="onSelectionChange"
         ref="table"></vue-table-dynamic>
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
.inputForm {

  width: 300px;
  clear: both;
}

.inputForm  input {
  width: 100%;
  clear: both;
}

.inputForm  textarea {
  width: 100% ;
  height: 100px;
}

#dropdown {
  display: none;
}
</style>
