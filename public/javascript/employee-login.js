async function signupFormHandler(event)
{
    event.preventDefault();

    const first_name = document.querySelector('#firstname-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    //calls the employee api to create a new employee in the database
    if(first_name && last_name && email && password)
    {
        const response = await fetch('/api/employee',{
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        
        if (response.ok) {
            console.log('success');
          } else {
            alert(response.statusText);
          }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    //calls the employee api and uses the post method to log in for an existing user in the database
    if (email && password) {
      const response = await fetch('/api/employee/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/employee-dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);