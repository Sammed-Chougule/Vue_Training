<template>
  <div class="home" >
      <h1 id="Header">
          Admin Login
      </h1>
    <Form id="login" :validation-schema ="schema" @submit="login" >
      <div>
          userName: <Field v-model="userName" name="userName" />
      <ErrorMessage name="userName"/>
      </div>
     <div>
          Password: <Field name="password" type="password"  />
      <ErrorMessage name="password"/>
     </div>
      <button class="bten btn-primary" >Login</button>
    </Form>
  </div>
</template>

<script>
// @ is an alias to /src
import { Field, Form,ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "adminHome",
  components: {
    Field,
    Form,
    ErrorMessage
  },
  methods :{
    
    login(){
      if(this.userName.normalize()!=="Admin".normalize()){
        alert("invalid admin")
      }
      // alert('login ho gya ');
      else{
      console.log("login")
      this.$store.dispatch("login").then(()=>{
        if(this.$store.getters.getToken)
        this.$router.push("/admindashboard");
        else
        console.log("Get the Token")
      })
    }}
  },
  data() {
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
#login{
  align-self: center;
  background-color:aliceblue;
}

#Header{
    align-self: center;
    background-color: black;
    color: white;
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