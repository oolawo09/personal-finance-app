
const all_debts =  [
      {
        'id': 1,
        'debtor': 'JD',
        'amount': 50000,
        'creditor': 'Sonko Malong', 
        'description': 'Kusaidia raia',
        'avatar': require('../assets/images/avatar.png'),
      },
      {
        'id': 2,
        'debtor': 'Musa Jakadala',
        'amount': 2500, 
        'creditor': 'JD', 
        'description': 'Friday night drinks',
        'avatar': require('../assets/images/avatar.png'),
      },  
      {
        'id': 3,
        'debtor': 'JD',
        'amount': 500,
        'creditor': 'Jay z', 
        'description': 'Lunch at the kibandaski',
        'avatar': require('../assets/images/avatar.png'),
      },
  ]

const profile = {
    username: 'jd',
    location: 'Nairobi',
    email: 'john.doe@gmail.com',
    avatar: require('../assets/images/avatar.png'),
    budget: 5000,
    monthly_cap: 7000,
    notifications: true,
    newsletter: false,
  };

export{
    profile,
    all_debts,
}; 