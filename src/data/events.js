export default [
  {
    title: 'It will be here',
    date: new Date(),
    location: 'Yusuf Ishak House;ladls',
    description:
      ':S DjJ ;lakJD;flkds;lfja;mx clkvnsghsdfja;dlskjfa;dlkj fa;lkjd ;alknvlcnva;lsdn fasdf;laskjd f;alkmvlxcnv;',

    start: new Date(),
    end: new Date(),
  },
  {
    title: 'It will be there yeah',
    location: 'NUS School of Computing',
    date: new Date('01/27/2022'),
    description:
      ':S DjJ ;lakJD;flkds;lfja;mx clkvnsghsdfja;dlskjfa;dlkj fa;lkjd ;alknvlcnva;lsdn fasdf;laskjd f;alkmvlxcnv;',
    start: new Date('01/27/2022 01:00'),
    end: new Date('01/27/2022 02:00'),
    imageUrl:
      'https://images.unsplash.com/photo-1643037906067-e79f62e8f58c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Today',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    description: 'Near to today',
    location: 'here',
    imageUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Tomorrow',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    end: new Date(new Date().setDate(new Date().getDate() + 1)),
    description: 'Near to tomorrow',
    location: 'nus',
  },
  {
    title: 'XIt will be there yeah',
    location: 'NUS School of Computing',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    description:
      ':S DjJ ;lakJD;flkds;lfja;mx clkvnsghsdfja;dlskjfa;dlkj fa;lkjd ;alknvlcnva;lsdn fasdf;laskjd f;alkmvlxcnv;',
    start: new Date('01/27/2022 01:00'),
    end: new Date('01/27/2022 02:00'),
    imageUrl:
      'https://images.unsplash.com/photo-1643037906067-e79f62e8f58c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'XToday',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    description: 'Near to today',
    location: 'here',
    imageUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'XTomorrow',
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    end: new Date(new Date().setDate(new Date().getDate() + 1)),
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    description: 'Near to tomorrow',
    location: 'nus',
  },
]
