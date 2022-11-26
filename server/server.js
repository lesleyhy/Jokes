const express = require('express');
const cors = require('cors');
const port = 8000;
const app = express();

const {jokeRouter} = require('./routes/jokes.routes')

require('./config/mongoose.config');

// avoid CORS error since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
app.use(cors());

//in order to receive json
app.use(express.json());

app.use('/api/jokes', jokeRouter)

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);