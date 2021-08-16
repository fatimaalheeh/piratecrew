const TestController = require('../controllers/test.controller');
module.exports = function(app){
    app.get('/api', TestController.index);
    app.post('/api/pirate/new', TestController.create);
    app.get('/api/allPirates', TestController.all);
    app.get('/api/getPirate/:id', TestController.findPirate);
    app.delete('/api/deletePirate/:id', TestController.deletePirate);
}