const router = require('express').Router();
const sequelize = require('../config/connection');
const { Task,Manager, Employee } = require('../models');
const employeeAuth = require('../utils/employeeAuth');

router.get('/',employeeAuth,  (req, res) => {
    Task.findAll({
        where: {
          // use the ID from the session
          employee_id: req.session.employee_id
        },
        attributes: [
          'id',
          'title',
          'deadline',
          'created_at',
        ],
        include: [
          {
              model: Manager,
              attributes: ['first_name', 'last_name'],
          },
          {
            model: Employee,
            attributes: ['id', 'first_name', 'last_name'],
            }
        ]
      })
        .then(dbTaskData => {
          // serialize data before passing to template
          const tasks = dbTaskData.map(task => task.get({ plain: true }));
          res.render('employee-dashboard', { tasks, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

  router.get('/edit/:id',employeeAuth,(req,res)=>{
    Task.findByPk(req.params.id,{
      attributes:[
        'title',
        'deadline'
      ]
    })
    .then(dbTaskData =>{
      if(dbTaskData)
      {
        const task = dbTaskData.get({plain:true});

      res.render('employee-delete-task',{
        task,
        loggedIn: true
      });
      }
      else
      {
        res.status(404).end();
      }
    })
    .catch(err=>{
      res.status(500).json(err);
    });
  });

module.exports=router;

/*
  
*/