const embed = require('../API/embed');

embeds = require('../API');
express = require('express');
endpoint = express();

var embedl = [];

endpoint.get('/api/new', (req, res) => {
    let n = new embed();
    n.properties = JSON.parse(req.body);
    embedl.push(n);
    res.send(`{"id":${embedl.length-1}}`);
});

endpoint.listen(8080);