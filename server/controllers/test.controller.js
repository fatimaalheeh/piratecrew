const {Pirate} = require('../models/test.model')
module.exports.index = (request, response) => {
    response.json({
        message: "Good Luck"
    });
}
module.exports.all = (request, response) => {
    Pirate.find({})
    .then(pirates => response.json(pirates))
    .catch(err => response.json(err));
}
module.exports.create = (request, response) =>{
    const { name, imgUrl, chests, catchPhrase, crewPosition, eyePatch, hook, pegLeg} = request.body;
    Pirate.create({ name, imgUrl,chests,catchPhrase, crewPosition, eyePatch, hook, pegLeg})
    .then(pirate => response.json(pirate))
    .catch(err => response.status(400).json(err));
}
module.exports.findPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
    .then(pirate => response.json(pirate))
    .catch(err => response.json(err));
}
module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({_id:request.params.id})
    .then(deletePirate => response(deletePirate))
    .catch(err => response.json(err));
}
