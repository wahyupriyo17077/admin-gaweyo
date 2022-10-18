/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
    routes: [
      // submenu
      {
        path: "/app/dashboard",
        name: "General Dashboard",
      },
      {
        path: "/app/job-dashboard",
        name: "Job Dashbooard",
      },
      {
        path: "/app/location-dashboard",
        name: "Location Dashboard",
      },
      {
        path: "/app/finance-dashboard",
        name: "Finance Dashboard",
      },
      {
        path: "/app/dashboard-user-active",
        name: "User Active Dashboard",
      },
    ],
  },
  {
    path: "/app/forms",
    icon: "FormsIcon",
    name: "Setting",

    routes: [
      // submenu
      {
        path: "/app/setting/general-setting",
        name: "Genaral Setting",
      },
      {
        path: "/app/setting/previleges",
        name: "Privileges",
      },
      {
        path: "/app/setting/menus",
        name: "Menus",
      },
      {
        path: "/app/setting/users",
        name: "Users",
      },
      {
        path: "/app/setting/permissions",
        name: "Permissions",
      },
      {
        path: "/app/setting/mobile-app",
        name: "Mobile App",
      },
      {
        path: "/user-togging",
        name: "User Togging",
      },
      {
        path: "/app/setting/mobile-setting",
        name: "Mobile Setting",
      },
      {
        path: "/withdraw-setting",
        name: "Withdraw Setting",
      },
      {
        path: "/referral-setting",
        name: "Referral Setting",
      },
      {
        path: "/image-setting",
        name: "Image Recognition Setting",
      },
    ],
  },
  {
    path: "/app/cards",
    icon: "CardsIcon",
    name: "Management",
    routes: [
      // submenu
      {
        path: "/perusahaan",
        name: "Perusahaan",
      },
      {
        path: "/pekerjaan",
        name: "Pekerjaan",
      },
      {
        path: "/pekerja",
        name: "Pekerja",
      },
      {
        path: "/share-banner",
        name: "Share Banner",
      },
      {
        path: "/bahasa",
        name: "Bahasa",
      },
      {
        path: "/tim",
        name: "Tim",
      },
      {
        path: "/skill",
        name: "Skill",
      },
      {
        path: "/ads",
        name: "Ads",
      },
      {
        path: "/bank",
        name: "Bank",
      },
      {
        path: "/wd-incremental",
        name: "Withdraw Incrementar",
      },
      {
        path: "/tag",
        name: "Tag",
      },
      {
        path: "/highlight",
        name: "Highlight",
      },
      {
        path: "/tipe-reported-komentar",
        name: "Tipe Reported Komentar",
      },
      {
        path: "/server",
        name: "Server",
      },
      {
        path: " Artikel",
        name: "Tag",
      },
    ],
  },
  {
    path: "/app/charts",
    icon: "ChartsIcon",
    name: "Report",
    routes: [
      // submenu
      {
        path: "/perusahaan",
        name: "Perusahaan",
      },
      {
        path: "/pekerjaan",
        name: "Pekerjaan",
      },
    ],
  },

  {
    path: "/app/modals",
    icon: "ModalsIcon",
    name: "Modals",
    routes: [
      // submenu
      {
        path: "/pembayaran",
        name: "Pembayaran",
      },
    ],
  },
  {
    path: "/app/tables",
    icon: "TablesIcon",
    name: "Komunitas",
    routes: [
      // submenu
      {
        path: "/manajement-komunitas",
        name: "Manajement Komunitas",
      },
      {
        path: "/manajement-event",
        name: "Manajement Event",
      },
      {
        path: "/management-news",
        name: "Manajement News",
      },
      {
        path: "/manajement-loyality",
        name: "Manajement Loyality",
      },
      {
        path: "/manajement-feature",
        name: "Manajement Features",
      },
      {
        path: "/manajement-pengumuman",
        name: "manajement Pengumuman",
      },
    ],
  },
  {
    icon: "PagesIcon",
    name: "Pages",
    routes: [
      // submenu
      {
        path: "/login",
        name: "Login",
      },
      {
        path: "/create-account",
        name: "Create account",
      },
      {
        path: "/forgot-password",
        name: "Forgot password",
      },
      {
        path: "/app/404",
        name: "404",
      },
      {
        path: "/app/blank",
        name: "Blank",
      },
    ],
  },
];

export default routes;
