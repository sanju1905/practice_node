const express = require('express');
const auth = require('express-basic-auth');
const authenticate = auth({
    users: { 'user': 'password' },
     challenge: true,
    realm: 'Private Area'
   });
   const app = express();  

app.get('/secure', authenticate, (req, res) => {
 res.send('Access granted to the secure route');
});

app.listen(3000, () => {
 console.log('Server is running on port 3000');
});