const allowedUsers = [
  {
    email: 'test@test.pl',
    password: 'Password1'
  }
];

export default {
  post: body => new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = allowedUsers.find(e => e.email === body.email && e.password === body.password);
      if (user) {
        resolve({ email: body.email, message: 'Login successful' });
      } else {
        reject({ message: 'Invalid e-mail or password' });
      }
    }, 2000);
  })
};
