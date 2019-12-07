export default {
  routes: [
    {
      path: "/crypto",
      component: Crypto
    },
    {
      path: "/analytics/dashboard",
      component: "ADashboard",
      child: []
    },
    {
      path: "/analytics/customers",
      component: "ACustomers",
      child: []
    },
    {
      path: "/analytics/reports",
      component: "AReports",
      child: []
    }
  ],
  mni: [
    {
      id: 1,
      default: true,
      title: "Analytics",
      icon: "analytics",
      icon_alt: "Analytics Image",
      child: [
        {
          id: 1,
          path: "/analytics/dashboard",
          title: "Dashboard",
          component: "Dashboard",
          icon: "dripicons-meter"
        },
        {
          id: 2,
          path: "/analytics/customers",
          title: "Customers",
          component: "Customers",
          icon: "dripicons-user-group"
        },
        {
          id: 1,
          path: "/analytics/reports",
          title: "Reports",
          component: "Reports",
          icon: "dripicons-document"
        }
      ]
    },
    {
      id: 2,
      default: false,
      title: "Crypto",
      icon: "crypto",
      icon_alt: "Crypto Image",
      child: []
    },
    {
      id: 3,
      default: false,
      title: "Projects",
      icon: "projects",
      icon_alt: "Projects Image",
      child: []
    },
    {
      id: 4,
      default: false,
      title: "Ecommerce",
      icon: "ecommerce",
      icon_alt: "Ecommerce Image",
      child: []
    },
    {
      id: 5,
      default: false,
      title: "CRM",
      icon: "crm",
      icon_alt: "CRM Image",
      child: []
    },
    {
      id: 6,
      default: false,
      title: "UI Kit",
      icon: "uikit",
      icon_alt: "UI Kit Image",
      child: []
    },
    {
      id: 7,
      default: false,
      title: "Pages",
      icon: "pages",
      icon_alt: "Pages Image",
      child: []
    },
    {
      id: 8,
      default: false,
      title: "Authentication",
      icon: "auth",
      icon_alt: "Authentication Image",
      child: []
    }
  ]
};
