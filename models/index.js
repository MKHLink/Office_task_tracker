const Manager = require('./Manager');
const Employee = require('./Employee');
const Task = require('./Task');

//many to one relationship between the task and manager tables
Manager.hasMany(Task,{
    foreignKey: 'manager_id'
});

Task.belongsTo(Manager, {
    foreignKey: 'manager_id',
    onDelete: 'cascade'
});

//many to one relationship between the task and employee table
Employee.hasMany(Task, {
    foreignKey: 'employee_id'
});

Task.belongsTo(Employee, {
    foreignKey: 'employee_id',
    onDelete: 'cascade'
});

module.exports = {Manager, Employee, Task};