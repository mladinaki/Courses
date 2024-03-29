const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = 3000;

//Handlebars configurations
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');


//Setup static files

app.use(express.static(path.resolve(__dirname, 'public')))

//Setup static files End


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));

