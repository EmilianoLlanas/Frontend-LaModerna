<template>
    <div>
      <router-view/>
      <div id="myPrincipalDiv">
        <div id="left">
           <img :src="require('@/assets/CAJASS.jpg')">
        </div>
    <div id="right">
      <div style="background-color: white ">
          <img :src="require('@/assets/logotipo.png')" class="center">
      </div>

      <p class="enca_chico" style="font-size: 36px; color: #2AB3E5; font-style: normal;">Inicio de Sesión</p>
      <form id="auth"
      @submit.prevent="register"
      method="post"
      >
      <div>
      </div>
        <p>
          <label for="user">Usuario</label>
        </p>
        <p>
          <input
          id="user"
          v-model="user"
          type="text"
          name="user"
          style="width: 100%;"
          >
          <span v-if="!$v.user.required && $v.user.$dirty" class="text-danger" style="color:#d42828"> Se requiere el usuario</span>
          <span v-if="!$v.user.email && $v.user.$dirty" class="text-danger" style="color:#d42828">Sin formato de correo</span>

        </p>
        <p>
          <label for="password">Contraseña</label>
        </p>
        <p>
          <input
          id="password"
          v-model="password"
          type="password"
          name="passw"
          style="width: 100%;"
          >
          <span v-if="!$v.password.required && $v.user.$dirty" class="text-danger" style="color:#d42828"> Se requiere la contraseña</span>
          <span v-if="error" class="error" style="color:#d42828">La contraseña y/o correo son invalidos</span>
          </p>
        <p>
        <input
        type="submit"
        value="Ingresar"
        style="border-width: 6px; border-color: #71962d; background-color: #85b52d; border-radius: 15px; color: white"
        >
      </p>
      </form>
    </div>
    </div>
    <div id="bottom">
       Papeles Corrugados S.A. de C.V. Vialidad Toluca Tenango Km 6 San Lorenzo Coacalco, Metepec, Estado de México. C.P. 52140.    Una empresa del Grupo
       <img :src="require('@/assets/moderna.png')" style="height: min-content; height: min-content; width: min-content; margin-left: 10px;">
    </div>
  </div>


</template>

<script>
import { required,email } from 'vuelidate/lib/validators'
import 'es6-promise/auto'
import auth from "@/auth";
export default
{
  data:()=>({
    user:'',
    password:'',
  token:'Bearer ',
    auth:'',
    error:false
  }),
  validations:{
    user:{
      required,
      email
    },
    password:{
      required
    }
  },
  methods:
  {
    async register()
    {
      this.$v.$touch();
      if(!this.$v.$invalid){
        try {
        this.token+= ((await auth.login(this.user, this.password)).data.token);
        this.$store.commit('change',this.token)
        console.log(this.$store.getters.token)
        this.auth=((await auth.authToken(this.token)).data);
        console.log(this.auth)
        this.$router.push("/")
        } catch (error) {
          this.error=true;
          console.log(error);
        }
      }
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  margin-left: 8%;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
#bottom {
    margin: 5px;
    text-align: center;
    margin-top: 10px;
    display:flex;
    margin-left: 15%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 11px;
}
#errors {
    color: red;
    font-size: 80%;
}
#myPrincipalDiv {
    display: flex;
    height: 700px;
}
#content {
  overflow: auto;
  width: 600px;
  background: gray;
}
#left {
  width: 70%;
  margin: 1px;
  padding: 0em;
  border: 1px solid ;
  min-height: 300px;
  overflow: auto;
  color: white;
  border-radius: 15px;
}
img {
    display: flex;
    width:100%;
    height:100%;
}
#right {
  width: 30%;
  margin: 1px;
  padding: 2em;
  border: 1px solid ;
  border-color: black;
  min-height: 300px;
  overflow: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #8cbd32;
  background-color: #311245;
  text-align: left;
  border-radius: 15px;
  font-size: 110%;
  display:block;
  font-style: italic;
}
#left  { float:left;  }
#right { float:right; }
</style>
