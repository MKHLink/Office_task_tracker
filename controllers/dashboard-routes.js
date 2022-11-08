const router = require('express').Router();
const sequelize = require('../config/connection');
const { Task,Manager, Employee } = require('../models');

router.get('/', (req, res) => {
    Task.findAll({
      where: {
        // use the ID from the session
        manager_id: req.session.manager_id
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
        res.render('dashboard', { tasks, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;