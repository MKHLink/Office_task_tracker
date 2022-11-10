async function deleteFormHandler(event){
    event.preventDefault();

    const id=window.location.toString().split('/')[
        window.location.toString().split('/').length-1
    ];

    const response = await fetch(`/api/task/${id}`,{
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/employee-dashboard');
      } else {
        alert(response.statusText);
      }
}

document.querySelector('.delete-task-btn').addEventListener('click', deleteFormHandler);