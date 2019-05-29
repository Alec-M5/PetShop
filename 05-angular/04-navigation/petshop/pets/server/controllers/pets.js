const mongoose = require('mongoose');
const pet = mongoose.model('Pet');

module.exports = {
  allPets: (req,res) => {
    pet.find({})
      .then(pets => res.json(pets))
      .catch(err => res.json(err))
  },
  createPet: (req,res) => {
    pet.create(req.body)
      .then(pet => res.json(pet))
      .catch(err => {
        const errors = Object.keys(err.errors).map(key => err.errors[key].message)
        res.status(422).json(errors)
      })
  },
  updatePet: (req,res) => {
    console.log('in controller',req.params);
    pet.findByIdAndUpdate(req.params.id , req.body, {new:true})
      .then(pet => res.json(pet))
      .catch(err => {
        const errors = Object.keys(err.errors).map(key => err.errors[key].message)
        res.status(422).json(errors)
      })
  },
  adoptPet: (req,res) => {
    console.log('in controller', req.params.id);
    pet.findByIdAndRemove(req.params.id)
    .then(pet => res.json(pet))
    .catch(error => res.json(error))
  },
  findPet: (req,res) => {
    console.log('in controller find one', req.params.id);
    pet.findById(req.params.id)
      .then(pet => res.json(pet))
      .catch(err => res.json(err))
  }
}
