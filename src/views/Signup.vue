<template>
  <div>
    <form @submit.prevent="register">
      <div>
        <span class="input-group-text" id="basic-addon1">@</span>
        <input
          v-model="userName"
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <span class="input-group-text" id="basic-addon1">Enter Email</span>
        <input
          v-model="userEmail"
          type="email"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
        <span class="input-group-text" id="basic-addon1">Enter City</span>
        <input
          v-model="userCity"
          type="text"
          class="form-control"
          placeholder="City"
          aria-label="City"
          aria-describedby="basic-addon1"
        />
        <span class="input-group-text" id="basic-addon1">Enter Password</span>
        <input
          v-model="userPassword"
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
        <span v-show=" userPassword && conPassword ? userPassword !==conPassword : false">
            password dont match
        </span>
        <span  class="input-group-text" id="basic-addon1">Confirm Password</span>
        <input
          v-model="conPassword"
          type="password"
          class="form-control"
          placeholder="ConPassword"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
        <br />
        <button class="bten btn-primary">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            userName:"",
            userEmail:"",
            userCity:"",
            userPassword:"",
            conPassword:"",
        }
    },
  methods: {
    register() {
        if(!this.userName ||!this.userName ||!this.userCity ||!this.userPassword){
            alert("Fill all the data")
        }
        else{
      this.$router.push("/");
        }
    },
  },
};
</script>

<style>
</style>