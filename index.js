// Cluster [NodeJS]
var os = require('os');
var cluster = require('cluster');
module.exports = function(amn, restart){
    amn = amn || 1;
    if (amn === true)
    amn = os.cpus().length;
    restart = restart || false;
    if (cluster.isMaster) {
        for (var i = 0; i < amn; i++) {
            cluster.fork();
        }
    }
    if (restart) {
        cluster.on('exit', function() {
            cluster.fork();
        });
    }
    return cluster;
}
