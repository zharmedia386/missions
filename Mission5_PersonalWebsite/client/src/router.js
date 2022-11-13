import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/students",
      name: "students",
      component: () => import("./components/StudentsList")
    },
    {
      path: "/students/:id",
      name: "student-details",
      component: () => import("./components/Student")
    },
    {
      path: "/delete/:id",
      name: "student-delete",
      component: () => import("./components/DeleteStudent")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddStudent")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./components/Register")
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("./components/Login")
    }
  ]
});
