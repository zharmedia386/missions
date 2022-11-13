<template>
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please register</h1>
  
      <input v-model="data.user" type="text" class="form-control" placeholder="Username" required>
  
      <input v-model="data.pwd" type="password" class="form-control" placeholder="Password" required>
  
      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </template>
  
  <script lang="ts">
  import {reactive} from 'vue';
  import {useRouter} from "vue-router";
  
  export default {
    name: "Register",
    setup() {
      const data = reactive({
        user: '',
        pwd: ''
      });
      const router = useRouter();
  
      const submit = async () => {
        await fetch('http://localhost:3500/register', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        });
  
        await router.push('/login');
      }
  
      return {
        data,
        submit
      }
    }
  }
  </script>