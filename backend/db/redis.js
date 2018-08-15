const redis = require('redis');
const {redisurl} = require('./db.config')
const client = redis.createClient(redisurl)

client.on("error", function (err) {
    console.log("Error " + err);
});

module.exports = {
    client
}