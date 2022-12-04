export const links = [
  {
    url: '/dashboard',
    icon: 'tabler:layout-dashboard',
    title: 'Dashboard',
  },
  {
    url: '/order',
    icon: 'tabler:layout-list',
    title: 'Order',
  },
  {
    url: '/customers',
    icon: 'ic:round-person-outline',
    title: 'Customers',
    children: [
      {
        url: '/customers',
        title: 'All',
      },
      {
        url: '/customers/:id',
        title: 'Oladapo Benjamin',
      },
    ],
  },
  {
    url: '/outlets/supply',
    icon: 'mdi:store-outline',
    title: 'Outlets',
  },
  {
    url: '/support',
    icon: 'material-symbols:chat-bubble-outline-rounded',
    title: 'Support',
  },
];
