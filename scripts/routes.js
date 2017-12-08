page('/', (ctx, next) => {
    app.Card.fetchAll(app.cardView.initIndexPage);
});

/*

    page(<route to listen STRING>, <callback to run APPLE FUNCTION>, <callback to run GRAPE FUNCTION>);
    <callback to run APPLE FUNCTION>(<context OBJECT>, <callback to run GRAPE FUNCTION>)


    1. User CLICKS link to '/cards/3'
    1. pagejs will run app.Card.fetchOne
        1. and pass it 2 things: ctx (object) and next (function = app.cardView.initDetailPage) 
        1. fetchOne will get data from database then call next function (initDetail)
        1. initDetail will run and append to DOM

*/

page('/cards/:id', app.Card.fetchOne, app.cardView.initDetailPage);


/*
TODO build a route handler for /new
that will:
    1. show a form that takes data
        1. on submit that form will create a new book in the database


TODO write app.newView.initNewPage
    1. hide all other sections
    1. show a section with a form
    1. listen for that form's submit event
        1. which will then create a new book in the database (via a POST request)

*/

page('/new', app.newView.initNewPage);

page('/about', app.aboutView.initAboutPage);

page('*', (ctx, next) => { 
    console.log(ctx);
    console.log('Nothing to see here!'); 
});
 
page.start();