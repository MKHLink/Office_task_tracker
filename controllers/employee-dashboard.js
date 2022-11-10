const router = require('express').Router();
const sequelize = require('../config/connection');
const { Task,Manager, Employee } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
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
module.exports=router;