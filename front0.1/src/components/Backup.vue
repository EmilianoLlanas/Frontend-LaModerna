<template>
    <div id="test">
    <h1 id="header1"> Menu de respaldos </h1>
      <div class="inputForm">
        <button @click="backup">Hacer respaldo</button>
        <button @click="restore">Restaurar última versión</button>
      </div>
    </div>
</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
export default {
  name: 'Backup',
  methods: {
    backup(){
      var date = new Date();
      this.dateS = date.toISOString().substring(0,19);
      alert("Generando respaldo del sistema");
    },
    restore(){
      alert("Sistema restaurado desde el respaldo hecho el: "+this.dateS);
    }
}
}
</script>

<style scoped>
.inputForm {
  width: 400px;
  clear: both;
  color: #213485;
  margin: 3%;
}

.inputForm  input {
  width: 100%;
  clear: both;
  margin-top: 2%;
  margin-bottom: 5%;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
}

.inputForm  textarea {
  width: 150%;
  height: 90px;
  color: #213485;
  margin-top: 2%;
  margin-bottom: 0%;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
  opacity: 50%;
  border-radius: 6px;
  border: transparent;
}

#test{
  background-color: rgba(33,52,133,0.20);
  margin: 1%;
  color: #3B0EA4;
  font-family: "GOTY0", "GOTY1", "GOTY2", verdana;
}

#table{
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
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
  font-size: 12px;
  border-radius: 6px;
  border: transparent;
}

button:hover{
  background-color: rgba(14,44,164,0.30) ;
}

#header1{
  margin: 2%;
  font-size: 30px;
}
</style>
