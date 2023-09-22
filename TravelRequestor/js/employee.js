document.addEventListener('DOMContentLoaded', function () {
    const travelForm = document.getElementById('travelForm');
    const travelData = []; // Array to store travel request details
    const logoutButton = document.getElementById('logoutButton');
    const date = document.getElementById('date');
    const toDAte=document.getElementById('toDate');
    const numberOfDays = document.getElementById('numberOfDays');

    // error message
    const idError=document.getElementById('IdError')
    const nameError=document.getElementById('NameError')
    const ProjectError=document.getElementById('ProjectError')
    const CauseError=document.getElementById('CauseError')
    const SourceError=document.getElementById('SourceError')
    const DestError=document.getElementById('DestError')
    const dteError=document.getElementById('dteError')
    const ModelError=document.getElementById('ModelError')
    const toError = document.getElementById('toError');
    

    // Handle Logout button click event
    logoutButton.addEventListener('click', function () {
        // Redirect the user to another page (e.g., login page)
        // window.location.href = 'index.html';
        window.location.replace("index.html");
    });


    //calculate days
    const today = new Date();
    const maxDate= new Date(today.getFullYear()+1,today.getMonth(),today.getDate());
    const minDate= new Date(today.getFullYear(),today.getMonth(),today.getDate());

    date.max=formattedDates(maxDate);
    toDAte.min=formattedDates(minDate);
    //formatted date
    function formattedDates(date){

        //yyyy-mm-dd
        const year=date.getFullYear();
        let month=(date.getMonth()+1).toString().padStart(2,"0");
        let day=date.getDate().toString().padStart(2,"0");
        return `${year}-${month}-${day}`;

    }

    function calculateDays() {
        const fromDateObj = new Date(date.value);
        const toDateObj = new Date(toDAte.value);

        if (!isNaN(fromDateObj) && !isNaN(toDateObj)) {
            const timeDifference = toDateObj - fromDateObj;
            const totalDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

            if (totalDays >= 0) {
                numberOfDays.value = totalDays;
            } else {
                numberOfDays.value = ''; // Clear the field if the dates are invalid
            }
        } else {
            numberOfDays.value = ''; // Clear the field if the dates are invalid
        }
    }

    date.addEventListener('change', calculateDays);
    toDAte.addEventListener('change', calculateDays);


    

   

    travelForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // content
        const empid = document.getElementById('empid').value;
        const empname = document.getElementById('empname').value;
        const project = document.getElementById('project').value;
        const cause = document.getElementById('cause').value;
        const source = document.getElementById('source').value;
        const destination = document.getElementById('destination').value;
        const mode = document.getElementById('mode').value;
        const date = document.getElementById('date').value;
        const numberOfDays = document.getElementById('numberOfDays').value;
        const toDAte=document.getElementById('toDate').value;


        //id validation
        if(!empid.trim()){
            idError.textContent='id is required';

        }
        else{
            idError.textContent='';
        }
        //name validation
        if(!empname.trim()){
            nameError.textContent='name is required';

        }
        else{
            nameError.textContent='';
        }
        //projet validation
        if(!project.trim()){
            ProjectError.textContent='project name is required';

        }
        else{
            ProjectError.textContent='';
        }
        //cause validation
        if(!cause.trim()){
            CauseError.textContent='cause is required';

        }
        else{
            CauseError.textContent='';
        }
        //source validation
        if(!source.trim()){
            SourceError.textContent='source is required';

        }
        else{
            SourceError.textContent='';
        }
        //dest validation
        if(!destination.trim()){
            DestError.textContent='destination is required';

        }
        else{
            DestError.textContent='';
        }
        //from date validation
        if(!date.trim()){
            dteError.textContent='date is required';

        }
        else{
            dteError.textContent='';
        }
        //to date validation
        if(!toDAte.trim()){
            toError.textContent='date is required';

        }
        else{
            toError.textContent='';
        }
        //model validation
        if(!mode.trim()){
            ModelError.textContent='mode of travel is required';

        }
        else{
            ModelError.textContent='';
        }

        // Create an object to represent the travel request
        const travelRequest = {
            empid,
            empname,
            project,
            cause,
            source,
            destination,
            mode,
            date,
            numberOfDays
        };

        // Add the travel request to the array
        travelData.push(travelRequest);

        // Clear the form fields
        travelForm.reset();
    });

    // Store the travelData array in localStorage when navigating away from the page
    window.addEventListener('beforeunload', function () {
        localStorage.setItem('travelData', JSON.stringify(travelData));
    });
});
