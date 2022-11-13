<template>
    <div v-if="currentStudent" class="delete-form py-3">
      <p class="headline">Delete student</p>
  
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="currentStudent._id"
          :rules="[(v) => !!v || '_id is required']"
          label="_id"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="currentStudent.fullname"
          :rules="[(v) => !!v || 'fullname is required']"
          label="fullname"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="currentStudent.student_id"
          :rules="[(v) => !!v || 'student_id is required']"
          label="student_id"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="currentStudent.major"
          :rules="[(v) => !!v || 'major is required']"
          label="major"
          required
        ></v-text-field>
  
        <v-btn color="success" small @click="deleteStudent">
          Delete
        </v-btn>
      </v-form>
  
      <p class="mt-3">{{ message }}</p>
    </div>
  
    <div v-else>
      <p>Please click on a student...</p>
    </div>
  </template>
  
  <script>
  import StudentDataService from "../services/StudentDataService";
  
  export default {
    name: "student",
    data() {
      return {
        currentStudent: null,
        message: "",
      };
    },
    methods: {
      getStudent(id) {
        StudentDataService.get(id)
          .then((response) => {
            this.currentStudent = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      deleteStudent() {
        var data = {
          id: this.currentStudent._id,
        };

        // console.log(data.id)
  
        StudentDataService.delete(data)
          .then((response) => {
            console.log(response.data);
            this.message = "The student was deleted successfully!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
    },
    mounted() {
      this.message = "";
      this.getStudent(this.$route.params.id);
    },
  };
  </script>
  
  <style>
  .delete-form {
    max-width: 300px;
    margin: auto;
  }
  </style>
  