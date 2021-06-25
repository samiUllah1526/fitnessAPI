
const excercise_table = require('./../models/model');

const createExcercisePlan = async (req, res, next) => {
  console.log(req.headers)
  console.log(req.body)
  const plans = await excercise_table.create({
    // excercise_id: req.body.excercise_id,
    excercise_name: req.body.excercise_name,
    calories_burn: req.body.calories_burn,
 
  });
  return res.json({message:"Excercise has been created!"});
};

const getAllExcercisePlan = async (req, res, next) => {
  const plans = await excercise_table.findAll();
  console.log(plans)
  return res.json(plans);
  
};
const getExcercisePlanByID = async (req, res, next) => {
  let { id } = req.params;
  const plan = await excercise_table.findByPk(id);
  return res.json(plan);

};

const updateExcercisePlan = async (req, res, next) => {
  let { id } = req.params;
  const updated = await excercise_table.update(
    {
        // excercise_id: req.body.excercise_id,
        excercise_name: req.body.excercise_name,
        calories_burn: req.body.calories_burn,
     
    },
    {
      where: {
        id: id,
      },
    }
  );
  return updated;

};
const deleteExcercisePlan = async (req, res, next) => {
  let { id } = req.params;
  const plan_droped = await excercise_table.destroy({
    where: {
      id: id,
    },
  });
  return plan_droped;

};

module.exports = {
  createExcercisePlan,
  getAllExcercisePlan,
  getExcercisePlanByID,
  updateExcercisePlan,
  deleteExcercisePlan,
};