const withAuth = (req,res,next) => {
    if(!req.session.manager_id)
    {
        res.redirect('/login');
    }
    else
    {
        next();
    }
};

const employeeAuth = (req,res,next) => {
    if(!req.session.employee_id)
    {
        res.redirect('/login');
    }
    else
    {
        next();
    }
};

module.exports = withAuth;
module.exports = employeeAuth;