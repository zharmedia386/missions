<template>
    <div class="submit-form mt-6 mx-8">
      <p class="headline">Login</p>
  
      <div v-if="!submitted">
        <v-form ref="form" @submit.prevent="loginUser()" lazy-validation >
          <v-text-field
            v-model="user"
            :rules="[(v) => !!v || 'Username is required']"
            label="Username"
            required
          ></v-text-field>
  
          <v-text-field
            v-model="pwd"
            :rules="[(v) => !!v || 'Password is required']"
            label="Password"
            type="password"
            required
          ></v-text-field>
          
          <v-btn type="submit" color="primary" class="mt-3">Submit</v-btn>
        </v-form>
      </div>
    </div>
  </template>

<script>
import { mapMutations } from "vuex";
import { store } from '../store'
export default {
  data: () => {
      return {
          user: "",
          pwd: "",
        };
    },
    methods: {
        ...mapMutations(["setUser", "setToken"]),
        
        async loginUser() {
            const token = store.getters.getTokens
            console.log(token);
            
            const response = await fetch("http://localhost:3500/auth", {
                method: "POST",
                body: JSON.stringify({
                    user: this.user,
                    pwd: this.pwd,
                }),
            });
            const { accessToken } = await response.json();
            this.setToken(accessToken);
            console.log(`AccessToken: ` + accessToken);
            // console.log(refreshToken);

            this.$router.push("/");
        },
},
}
</script>