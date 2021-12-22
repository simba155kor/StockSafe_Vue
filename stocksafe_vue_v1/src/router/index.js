import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LikeStock from "../views/LikeStock.vue";
import MyStock from "../views/MyStock.vue";
import TodayIssue from "../views/TodayIssue.vue";
import User from "../views/User.vue";
import UserLogin from "@/components/userinfo/UserLogin.vue"
import UserUpdate from "@/components/userinfo/UserUpdate.vue"
import UserJoin from "@/components/userinfo/UserJoin.vue"
import UserPassword from "@/components/userinfo/UserPassword.vue"

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
    redirect:"/login",
    children: [
    {
      path: "/login",
      name: "UserLogin",
      component : UserLogin,
      },
      {
        path: "/update",
        name: "UserUpdate",
        component : UserUpdate,
      },
      {
        path: "/Join",
        name: "UserJoin",
        component : UserJoin,
      },
      {
        path: "/password",
        name: "UserPassword",
        component : UserPassword,
      },
  ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
