const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Welcome express!!')
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));

