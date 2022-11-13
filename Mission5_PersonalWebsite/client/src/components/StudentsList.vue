<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="fullname" label="Search by FullName"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchFullName">
        Search
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Students</v-card-title>

        <v-data-table
          :headers="headers"
          :items="students"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editStudent(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteStudent(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions v-if="students.length > 0">
          <v-btn small color="error" @click="removeAllStudents">
            Remove All
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import StudentDataService from "../services/StudentDataService";
export default {
  name: "students-list",
  data() {
    return {
      students: [],
      fullname: "",
      headers: [
        { text: "Fullname", align: "start", sortable: false, value: "fullname" },
        { text: "Student ID", value: "student_id", sortable: false },
        { text: "Major", value: "major", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    retrieveStudents() {
      StudentDataService.getAll()
        .then((response) => {
          this.students = response.data.map(this.getDisplayStudent);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveStudents();
    },

    removeAllStudents() {
      StudentDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchFullName() {
      StudentDataService.findByFullName(this.fullname)
        .then((response) => {
          this.students = response.data.map(this.getDisplayStudent);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editStudent(id) {
      this.$router.push({ name: "student-details", params: { id: id } });
    },

    deleteStudent(id) {
      this.$router.push({ name: "student-delete", params: { id: id } });
    },

    getDisplayStudent(student) {
      return {
        id: student._id,
        fullname: student.fullname.length > 30 ? student.fullname.substr(0, 30) + "..." : student.fullname,
        student_id: student.student_id.length > 30 ? student.student_id.substr(0, 30) + "..." : student.student_id,
        major: student.major.length > 30 ? student.major.substr(0, 30) + "..." : student.major,
      };
    },
  },
  mounted() {
    this.retrieveStudents();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>
