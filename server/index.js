const fastify = require('fastify');
const mongoose = require('mongoose');
const app = fastify();

const mongo_url = process.env.MONGODB_URI || 'mongodb://localhost:27017/hackdtu3';
const port = process.env.PORT || 8000;

app.get('*', (req, res) => {
    res.send('HELLO');
});

mongoose.connect(mongo_url, {useNewUrlParser: true})
    .then(
        () => {
            console.log("Connected to DB")
            app.listen(port, '0.0.0.0', function(err, address) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                console.log(`Server listening on ${address}`);
            });
        }
    )
    .catch(err => console.log(err.message))