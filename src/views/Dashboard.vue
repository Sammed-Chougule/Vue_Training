<template>

  <div id="app">
  
      <div>
          <h1>This is User Dashboard</h1>
          <h2>hello Sammed</h2>
          {{data[Math.floor(Math.random() * 1643)]}}
      </div>


 <form @submit ="logout" >
      <button class="bten btn-primary">Logout</button>
 </form>

  
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      data: {}
    }
  },
  beforeMount(){
    this.getName();
  },
  
  methods: {
    async getName(){
      const res = await fetch('https://type.fit/api/quotes');
      const data = await res.json();
      this.data = data;
    },
     logout(){
      this.$router.push("/")
    },
  }
};
</script>