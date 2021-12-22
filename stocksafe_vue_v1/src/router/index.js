import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LikeStock from "../views/LikeStock.vue";
import MyStock from "../views/MyStock.vue";
import TodayIssue from "../views/TodayIssue.vue";
import User from "../views/User.vue";
import UserLogin from "@/components/userinfo/UserLogin.vue";
import UserUpdate from "@/components/userinfo/UserUpdate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/likestock",
    name: "LikeStock",
    component: LikeStock,
  },
  {
    path: "/mystock",
    name: "MyStock",
    component: MyStock,
  },
  {
    path: "/todayissue",
    name: "TodayIssue",
    component: TodayIssue,
  },
  {
    path: "/user",
    name: "User",
    component: User,
    redirect: "/user/login",
    children: [
      {
        path: "login",
        name: "UserLogin",
        component: UserLogin,
      },
      {
        path: "update",
        name: "UserUpdate",
        component: UserUpdate,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
