var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var requestify = require('requestify'); 

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(request, response) {
    var payload = {
        text: "Someone said '" + request.body.text + "'",
        channel: request.body.channel_id
    };
    
    requestify.post(process.env.POSTBACK_URL, payload).then(function() {
        response.end("");
    }, function() {
        response.end("");
    });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});