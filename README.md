# Cluster [NodeJS]
Cluster process

### Install
```
npm install kc-cluster
```

### Use
```js
var cluster = require('kc-cluster')(4);
process.title = 'App';
if (cluster.isMaster) {
    console.log(`[${process.pid}] ${process.title} - master`);
}
if (cluster.isWorker) {
    console.log(`[${process.pid}] ${process.title} - slave`);
}
```
