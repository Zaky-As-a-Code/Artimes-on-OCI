const express = require('express');
const app = express();
const signupRoute = require('./routes/signup');

app.use('/signup', signupRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
