const router = require('express').Router();
const sequelize = require('../config/connection');
const {Manager, Employee, Task} = require('../models');

router.get('/',(req,res)=>{
    Task.findAll({
        attributes: ['id', 'title', 'deadline', 'created_at'],
        include: [
          {
              model: Manager,
              attributes: ['first_name', 'last_name']
          }, 
          {
              model: Employee,
              attributes: ['first_name', 'last_name']
          }
        ]
      })
        .then(dbTaskData => {
            const tasks = dbTaskData.map(task => task.get({plain:true}));
            res.render('homepage',{tasks});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;