const router = require("express").Router();
var path = require("path")
const Workout = require("../models/workout")

router.get("/api/workouts", (req, res) => {
    console.log("We hit the route", __dirname) 
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    // .catch(err => {
    //   res.status(400).json(err);
    // });
}); 


  router.post("/api/workouts", (req, res) => {
    console.log("We hit the route", __dirname) 
    Workout.create({excercises:[]})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    // .catch(err => {
    //   res.status(400).json(err);
    // });
  });


  router.put("/api/workouts/:id", (req, res) => {
    console.log("We hit the params ??", req.params) 
    console.log("We hit the body ? ??", req.body) 
    // var newExercise = JSON.parse(req.body)
    
        Workout.findOneAndUpdate(
            { _id: req.params.id }, 
            { $push: { exercises: req.body } }
        ).then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
            console.log('WE GOT ERR!!!',err)
        res.status(400).json(err);
        });
    })


    router.get("/api/workouts/range", (req, res) => {
        Workout.find({})
          .limit(7)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
      });
  


  module.exports = router;