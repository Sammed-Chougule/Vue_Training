<template>
  <div class="home" >
    <h1 id="Header">User Login</h1>
    <Form id="login" :validation-schema ="schema" @submit="login" >
      <div>
        userName: <Field v-model="userName" name="userName" />
      <ErrorMessage name="userName"/>
      </div>
      Password: <Field name="password" type="password" />
      <ErrorMessage name="password"/> <br>
     <div> <button class="bten btn-primary" >Login</button></div>
    </Form>
    <form id="Signup" @submit ="signup" >
     New User register here:<button class="bten btn-secondary">SignUp</button>
    </form>
    <form id="admin" @submit ="admin" >
     <button class="bten btn-secondary">Admin Login</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { Field, Form,ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Home",
  components: {
    Field,
    Form,
    ErrorMessage
  },
  methods :{
    admin(){
      this.$router.push("/adminHome")
    },
    signup(){
      this.$router.push("/signup")
    },
    login(){
      // alert('login ho gya ');
     
      if(this.userName.normalize()!=="Sammed".normalize()){
        alert("invalid user")
      }
      else{
      this.$store.dispatch("login",{
          userName:"userName"
        }).then(()=>{
        if(this.$store.getters.getToken)
        this.$router.push("/dashboard");

        else
        console.log("Get the Token");

      })
      }}
    },
   data(){
    const schema = yup.object({
      userName: yup.string().required(),
      password: yup.string().required().min(8),
    });
    return {
      schema,
    };
  },
};
</script>


<style scoped>

#Header{
  align-self: center;
  background-color: black;
  color: white;
}

#login{
  align-self: center;
  background-color:aliceblue;
}


#Signup{
  align-self: center;
  background-color: antiquewhite;
}
#admin{
  align-self: center;
  background-color: bisque;
}


</style>