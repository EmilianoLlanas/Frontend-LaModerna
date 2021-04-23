<template>
    <div>
      <router-view/>
      <h1> Login </h1>
      <div id="myPrincipalDiv">
        <div id="left">
           <img src="asssets/CAJASS.jpg">
        </div>
    <div id="right">
      <form id="auth"
      @submit.prevent="checkForm"
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
          <span v-if="!$v.user.required && $v.user.$dirty" class="text-danger"> Se requiere el usuario</span>
          <span v-if="!$v.user.email && $v.user.$dirty" class="text-danger">Sin formato de correo</span>

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
          <span v-if="!$v.password.required && $v.user.$dirty" class="text-danger"> Se requiere la contraseña</span>
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
    </div>


</template>

<script>
import { required,email } from 'vuelidate/lib/validators'


export default {
  data:()=>({
    user:'',
    password:''
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
  methods:{
    checkForm(){
      this.$v.$touch();
      if(!this.$v.$invalid){
        console.log(
          `User:${this.user}, Password:${this.password}`
        );
      }

    }
  },


}

</script>

<style scoped>
#content {
  overflow:auto;
  width: 600px;
  background: gray;
}

#left, #right {
  width: 47%;
  margin: 1px;
  padding: 1em;
  border: 1px solid ;
  border-color: black;
  min-height: 300px;
  overflow: auto;
}

#left  { float:left;  }
#right { float:right; }


</style>
