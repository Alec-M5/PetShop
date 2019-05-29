const pet = require('../controllers/pets');
const path = require('path');
module.exports = function(app) {
  console.log('loading routes..');
  app.get('/api/pets', pet.allPets);
  app.get('/api/pets/:id', pet.findPet)
  app.post('/api/pets/new', pet.createPet);
  app.put('/api/pets/:id/edit', pet.updatePet);
  app.delete('/api/pets/:id/adopt', pet.adoptPet);
  app.all('*', function(req,res){
      const fileName = path.join(__dirname,'../../dist/pets/index.html');
      res.sendFile(fileName);
  })
}
