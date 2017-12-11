page('/', app.Card.fetchAll, app.cardView.initIndexPage);
// page('/', app.cardView.initNewPage);

page('/cards', app.Card.fetchAll, app.cardView.initIndexPage);
page('/cards/:id', app.Card.fetchOne, app.cardView.initDetailPage);
page('/cards/:id/update', app.Card.fetchOne, app.cardView.initUpdatePage);

page('/new', app.cardView.initNewPage);

page('/about', app.aboutView.initAboutPage);

page('*', (ctx, next) => { 
    console.log('Nothing to see here!'); 
});
 
// add base path for production: YOUR REPO NAME!
page.base('/custom-cards-client');
page.start();