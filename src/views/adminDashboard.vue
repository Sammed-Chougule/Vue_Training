<template>
<div>
  <h1>
      This is admin Dashboard
  </h1>
  <h2> Hello Admin</h2>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Password</th>   
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Shivprasad</td>
      <td>shiv123@gmail.com</td>
      <td>Hingoli</td>
      <td>shiv@123</td>
    </tr>
    <tr>
      <th scope="row">2</th>
       <td>Arvind</td>
      <td>arvind123@gmail.com</td>
      <td>Patna</td>
      <td>arvind@123</td>
    </tr>
    <tr>
      <th scope="row">3</th>
       <td>Swapnil</td>
      <td>swapnil123@gmail.com</td>
      <td>Nashik</td>
      <td>swapnil@123</td>
    </tr>
    <tr>
      <th scope="row">4</th>
       <td>Sammed</td>
      <td>sammed123@gmail.com</td>
      <td>Kolhapur</td>
      <td>sammed@123</td>
    </tr>
  </tbody>
</table>

    <form @submit.prevent ="logout" >
      <button class="bten btn-primary">Logout</button>
    </form>
    </div>
</template>

<script>
export default {
    
     methods:{
        logout(){
      this.$router.push("/")
      console.log("hello")
    }
     }
}
</script>

<style>

</style>