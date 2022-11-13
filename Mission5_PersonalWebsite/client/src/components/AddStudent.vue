<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Student</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="student.fullname"
          :rules="[(v) => !!v || 'Fullname is required']"
          label="Fullname"
          required
        ></v-text-field>

        <v-text-field
          v-model="student.student_id"
          :rules="[(v) => !!v || 'Student ID is required']"
          label="Student Id"
          required
        ></v-text-field>

        <v-text-field
          v-model="student.major"
          :rules="[(v) => !!v || 'Major is required']"
          label="Major"
          required
        ></v-text-field>
      </v-form>

      <v-btn color="primary" class="mt-3" @click="saveStudent">Submit</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Submitted successfully!
        </v-card-title>

        <v-card-subtitle>
          Click the button to add new Student.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newStudent">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import StudentDataService from "../services/StudentDataService";

export default {
  name: "add-student",
  data() {
    return {
      student: {
        fullname: "",
        student_id: "",
        major: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveStudent() {
      var data = {
        fullname: this.student.fullname,
        student_id: this.student.student_id,
        major: this.student.major,
      };

      StudentDataService.create(data)
        .then((response) => {
          this.student.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newStudent() {
      this.submitted = false;
      this.student = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
}
</style>
