<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        VUE + NODEJS JWT
      </div>

      <v-btn to="/students" text>
        Students
      </v-btn>

      <v-btn to="/add" text>
        Add
      </v-btn>

      <v-btn to="/auth" text>
        Login
      </v-btn>

      <v-btn to="/register" text>
        Register
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>
