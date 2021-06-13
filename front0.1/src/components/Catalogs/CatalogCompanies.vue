<template>
  <div id="fullpage">
      <NavBar></NavBar>
  <div id="content">

    <h1 id="header1"> Catálogo de Compañías </h1>

    <div id="card">

      <div id="cardheader"></div>

      <div class="inputForm">

        <div id="error">
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>

        <form>
          <label>ID</label>
          <br>
          <input v-model="aId" type="number" min="0" placeholder="Identificador de la Compañía">
          <br>
          <label>Nombre</label>
          <br>
          <input v-model="aName" placeholder="Nombre de la Compañía">
        </form>

      </div>

      
      <div id="buttons">
      <button @click="checkForm"> Dar de alta </button>
      <button @click="signDownCompany"> Dar de baja </button>
      <button @click="loadCompanies"> Actualizar </button>
      </div>

      <section v-if="loading">
      <div v-if="loading">Loading...</div>
      </section>

      <section v-else>
      <div id="table">
        <vue-table-dynamic :params="params"
          @select="onSelect"
          @selection-change="onSelectionChange"
          ref="table">
        </vue-table-dynamic>
        <br>
      </div>
      </section>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import VueTableDynamic from 'vue-table-dynamic'
import 'es6-promise/auto'
import auth from "@/auth"

export default {
  name: 'CatalogArticles',
  data() {
    return {
      aId:'',
      aName:'',
      responseObject:null,
      loading:true,
      //tokn:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Implc3N5QGdtYWlsLmNvbSIsImV4cCI6MTYyMzYxNzYwNiwiZW1haWwiOiJqZXNzeUBnbWFpbC5jb20ifQ.g9KDKqYqD911FzGz0D1yRE_3qrA_L6eLZuOSalM9VmA',
      errors:[],
      dataTable:'',
      params: {
        data: [
          ['ID', 'Nombre']
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
    checkForm(){
        this.errors=[];
        if(this.aId && this.aName){
          this.signUpCompany();
        }
        else{
          alert("Por favor, llene todos los campos correctamente para agregar un registro");
           if(!this.aId)
          {
            this.errors.push('Introduce un ID de compañía');
          }
          if(!this.aName)
          {
            this.errors.push('Introduce el nombre de la compañía');
          }
        }
    },
    async signUpCompany(){
        
        try {
        this.responseObject= ((await auth.createCompany(this.$store.getters.token, this.aId, this.aName)).data);
        this.params.data.push([this.responseObject.company_id, this.responseObject.name]);

        } catch (error) {
          this.error=true;
          console.log(error);
          this.errors.push(error);
        }

        this.aId='';
        this.aName='';
    },
    signDownCompany(){
        //there will be a method here to establish connection with backend and sign down the companies' id and name, some day....
        this.aId='';
        this.aName='';

        for (var i = this.params.deleteData.length-1; i>0 ; i--) {
          this.params.data.splice(this.params.deleteData[i], 1)
        }

    },
    async loadCompanies(){
        this.loading=true;
        try {
          console.log(this.$store.getters.token)
          //this.dataTable=((await auth.listCompanies(this.$store.getters.token)));
          //console.log(this.dataTable);
          this.loading=false;
          this.aId='';
          this.aName='';
          this.responseObject= ((await auth.listCompanies(this.$store.getters.token)).data);
          //console.log(this.responseObject[0].company_id);

          this.params.data=['ID', 'Nombre'];
        for (var i=0; i<this.responseObject.length;i++)
        {
          this.params.data.push([this.responseObject[i].company_id, this.responseObject[i].name]);
          //console.log(this.responseObject[i].company_id);
        }

         } catch (error) {
           this.error=true;
          console.log(error);
          this.errors.push(error);
          }
    },

  },

  async mounted(){
        try{
        this.aId='';
        this.aName='';
        this.responseObject= ((await auth.listCompanies(this.$store.getters.token)).data);
        //console.log('Data found');
        for (var i=0; i<this.responseObject.length;i++)
        {
          this.params.data.push([this.responseObject[i].company_id, this.responseObject[i].name]);
        }
        this.loading=false;

        }catch (error) {
          this.error=true;
          console.log(error);
          this.errors.push(error);
        }

    },
  components: { VueTableDynamic,NavBar }
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
