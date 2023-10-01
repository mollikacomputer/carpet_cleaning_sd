export const commonNavData = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
    {
      path: "/services",
      title: "Services",
    },
  ];
  
  export const afterLoginNavData = [
    ...commonNavData,
    {
      path: "/dashboard",
      title: "Dashboard",
    },
    // {
    //   path: "/profile",
    //   title: "Profile",
    // },
  ];
  
  export const beforeLoginNavData = [
    ...commonNavData,
    {
      path: "/signup",
      title: "Signup",
    },
    {
      path: "/login",
      title: "Login",
    },
  ];