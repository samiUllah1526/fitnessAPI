const Sequelize = require('sequelize');
const excercise_table = require('../models/model');
const express = require('express');
const router = express.Router();

const {
  createExcercisePlan,
  getAllExcercisePlan,
  getExcercisePlanByID,
  updateExcercisePlan,
  deleteExcercisePlan,} = require('./../controller/excercise_controller');

// router.get("/allExcercisePlan", async function (req, res) {
//     try {
//       const excercises = await excercise_table.findAll({attributes: ['excercise_id','excercise_name', 'calories_burn']});
//       if (excercises){
//           res.status(400);
//           return res.json(excercises)
//       }
        
  
//     } catch (e) {
//         res.status(404);
//         return { ErrorMessage: e }
//     }
//   });

router.post('/createExcerciese', createExcercisePlan)

router.get('/getAll', getAllExcercisePlan);

router.get('/getByID/:id',getExcercisePlanByID);

router.put('/updatePlanByID/:id', updateExcercisePlan);

router.delete('/deleteByID/:id', deleteExcercisePlan);

module.exports = router;