import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LikeStock from "../views/LikeStock.vue";
import MyStock from "../views/MyStock.vue";
import TodayIssue from "../views/TodayIssue.vue";
import UserInfo from "../views/UserInfo.vue";

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
    path: "/userinfo",
    name: "UserInfo",
    component: UserInfo,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
