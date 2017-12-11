## Tasks

- GOAL: Add ability to update existing card

    - add an  "update" button in detailed card view
        - with event listener to: 
            - capture card's current info 
            - route us to the update form: /cards/:id/update
    - add a route listening for /cards/:id/update
        - hide all sections, show only the update form
    - form with inputs:
        - recipient, sender, content
        - set value of inputs to selected card's data
        - add event listener to the form - on submit will send data to server
    - add function to send PUT request to server (in Card.js)
    - add a route handler in the server listening for a PUT request to '/api/v1/cards/:id'
        - add function to query database and update (in the server)
    - get and display updated card data