document.addEventListener('DOMContentLoaded', function () {
   

    const logoutButton=document.getElementById('logoutButton');
    // Handle Logout button click event
    logoutButton.addEventListener('click', function () {
        // Redirect the user to another page (e.g., login page)
        // window.location.href = 'index.html';
        window.location.replace('index.html');
    });

    

      const pageSelector = document.getElementById('pageSelector');
      console.log(pageSelector.value);

    // Add an event listener to the select element
    pageSelector.addEventListener('submit', function() {
      // Get the selected option's value
      const selectedOption = pageSelector.value;

      // If a valid option is selected, redirect to the corresponding page
      if (selectedOption) {
        window.location.href = "selectedOption";
      }
    });
      


        });

