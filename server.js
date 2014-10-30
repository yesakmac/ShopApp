/**
 * Created by KJ79607 on 10/30/2014.
 #!/usr/bin/env node
 */

var debug = require('debug')('ShopApp');
var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});
