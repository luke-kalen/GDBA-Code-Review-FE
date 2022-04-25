import Vue from "vue";
import store from "@/store/index";
import VueRouter from "vue-router";
import auth from "@/middleware/auth";
// import admin from "@/middleware/admin";
import guest from "@/middleware/guest";
import middlewarePipeline from "@/router/middlewarePipeline";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        redirect: "/login",
        meta: { middleware: [guest] },
        component: () => import(/* webpackChunkName: "home" */ "../views/admin/Dashboard"),
    },
    {
      path: "/dashboard",
      redirect: "admin/dashboard",
      meta: { middleware: [auth] },
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "../layouts/Admin"),
      children: [
        {
          path: "/dashboard",
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/admin/Dashboard"),
        },
        {
          path: "/requests",
          name: "myRequests",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../components/Timeoff/RequestList"),
        },
        {
          path: "/requests/add",
          name: "Timeoff",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../components/Timeoff/RequestForm"),
        },
        {
          path: "/requests/view/:id",
          name: "RequestOverview",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/timeoff/RequestView"),
        },
        {
          path: "/departments/requests/:id",
          name: "ReviewList",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../components/Timeoff/ReviewList"),
        },
        {
          path: "/organizations",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/org/Organizations"),
        },
        {
          path: "/departments",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/dept/Departments"),
        },
        {
          path: "/staff",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/user/KalenUsers"),
        },
        {
          path: "/clients",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/user/Clients"),
        },
        {
          path: "/organization/users/:id",
          name: "orgUsers",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/org/OrgUsers"),
        },
        {
          path: "/organization/update/:id",
          name: "orgUpdate",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/org/OrgUpdateModal"),
        },
        {
          path: "/organizations/form",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/org/OrgModal"),
        },
        {
          path: "/departments/form",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/dept/DeptModal"),
        },
        {
          path: "/department/update/:id",
          name: "deptUpdate",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/dept/DeptUpdateModal"),
        },
        {
          path: "/department/users/:id",
          name: "deptUsers",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/dept/DeptUsers"),
        },
        {
          path: "/organization/user/form/:id",
          name: 'userForm',
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/user/UserForm"),
        },
        {
          path: "/staff/form",
          name: 'NewStaff',
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/user/NewStaff"),
        },
        {
          path: "/client/form",
          name: 'NewClient',
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/user/NewClient"),
        },
        {
          path: "/organization//user/update/:id",
          name: "orgUserUpdate",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/org/OrgUserUpdateForm"),
        },
        {
          path: "/staff/update/:id",
          name: "UpdateStaff",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/user/StaffUpdate"),
        },
        {
          path: "/requests/update/:id",
          name: "UpdateRequest",
          component: () => import(/* webpackChunkName: "dashboard" */ "../components/Timeoff/UpdateRequest"),
        },
        {
          path: "/user",
          name: "user",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/user/User"),
        },
        {
          path: "/profile",
          name: "profile",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/user/Profile"),
        },
        {
          path: "/upload",
          name: "upload",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../components/Uploader/Uploader"),
        },
        {
          path: "/add-project",
          name: "ProjectAdder",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../components/Proofs/ProjectAdder"),
        },
        {
          path: "/add-proof-set",
          name: "ProofSetAdder",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../components/Proofs/ProofSetAdder"),
        },
        {
          path: "/create-ad",
          name: "ProofCreate",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../components/Proofs/ProofCreate"),
        },
        // {
        //   path: "/video",
        //   name: "Video",
        //   meta: { middleware: [auth] },
        //   component: () => import(/* webpackChunkName: "user" */ "../components/Video/Video"),
        // },
        {
          path: "/project/:id",
          name: "SetList",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/proof/SetList"),
        },
        {
          path: "/projects/:id",
          name: "ProjectList",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/proof/ProjectList"),
        },
        {
          path: "/proofs/:id",
          name: "ProofList",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/proof/ProofList"),
        },
        {
          path: "organizations/delete",
          name: "DeleteOrg",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/org/DeleteOrg"),
        },
        {
          path: "departments/delete",
          name: "DeleteDept",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/dept/DeleteDept"),
        },
        {
          path: "users/delete",
          name: "DeleteUser",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/user/DeleteUser"),
        },
        {
          path: "requests/delete",
          name: "DeleteReq",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "../views/timeoff/DeleteReq"),
        },
        // {
        //   path: "/file-upload",
        //   name: "FileUpload",
        //   meta: { middleware: [auth] },
        //   component: () => import(/* webpackChunkName: "user" */ "@/components/Uploader/FileUpload"),
        // },
        {
          path: "/file-upload/:id",
          name: "UploadForm",
          meta: { middleware: [auth] },
          component: () => import(/* webpackChunkName: "user" */ "@/views/proof/UploadForm"),
        },

        // {
        //   path: "/page",
        //   name: "page",
        //   meta: { middleware: [auth] },
        //   component: () => import(/* webpackChunkName: "user" */ "@/assets/img/728x90/index.html"),
        // },
      ],
    },
    {
      path: "/auth",
      redirect: "/login",
      meta: { middleware: [guest] },
      component: () => import(/* webpackChunkName: "login" */ "../layouts/Auth"),
      children: [
        {
          path: "/login",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/auth/Login")
        },
        {
          path: "/logout",
          component: () => import(/* webpackChunkName: "dashboard" */ "@/components/Auth/Logout")
        },
        {
          path: "/auth/register",
          component: () => import(/* webpackChunkName: "dashboard" */ "../views/auth/Register"),
        },
      ],
    },


    {
        path: "/register",
        name: "register",
        meta: { middleware: [guest] },
        component: () =>
            import(/* webpackChunkName: "register" */ "../views/auth/Register"),
    },
    {
        path: "/reset-password",
        name: "resetPassword",
        meta: { middleware: [guest] },
        component: () =>
            import(/* webpackChunkName: "reset-password" */ "../views/user/ResetPassword"),
    },
    {
        path: "/forgot-password",
        name: "forgotPassword",
        meta: { middleware: [guest] },
        component: () =>
            import(
        /* webpackChunkName: "forgot-password" */ "../views/user/ForgotPassword"
            ),
    },
    {
      path: "/api/organizations",
      name: "organizations",
      meta: { middleware: [auth] },
      component: () => import(/* webpackChunkName: "register" */ "../views/org/Organizations"),
    },
    {
      path: "/departments",
      name: "departments",
      meta: { middleware: [auth] },
      component: () => import(/* webpackChunkName: "register" */ "../views/dept/Departments"),
    },
    {
      path: "/adset",
      name: "Adset",
      meta: { middleware: [auth] },
      component: () => import(/* webpackChunkName: "user" */ "../views/proof/Adset"),
    },

    {
      path: "/digital",
      name: "Digital",
      meta: { middleware: [auth] },
      component: () => import(/* webpackChunkName: "user" */ "../views/proof/Digital"),
    },
    {
      path: "/print",
      name: "Print",
      meta: { middleware: [auth] },
      component: () => import(/* webpackChunkName: "user" */ "../views/proof/Paper"),
    },
    {
      path: "/video",
      name: "Video",
      meta: { middleware: [auth] },
      component: () => import(/* webpackChunkName: "user" */ "../views/proof/Video"),
    },
    {
      path: "/social",
      name: "Social",
      meta: { middleware: [auth] },
      component: () => import(/* webpackChunkName: "user" */ "../views/proof/Social"),
    },



  // ------------------------  ALL ROUTES GO ABOVE HERE ---------------------------



    {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: () =>
            import(/* webpackChunkName: "not-found" */ "../views/NotFound"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const middleware = to.meta.middleware;
    const context = { to, from, next, store };

    if (!middleware) {
        return next();
    }

    middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1),
    });
});

export default router;