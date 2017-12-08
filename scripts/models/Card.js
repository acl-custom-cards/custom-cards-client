'use strict';
var app = app || {};
// const API_URL = 'https://acl-cards-demo.herokuapp.com';
const API_URL = 'http://localhost:3000';

(function(module) {
    function Card (obj) {
        this.id = obj.id;
        this.recipient = obj.recipient;
        this.sender = obj.sender;
        this.content = obj.content;
    }

    Card.all = [];

    Card.fetchOne = (ctx, cb) => {
        $.get(`${API_URL}/api/v1/cards/${ctx.params.id}`)
            .then(data => {
                // data is an array, so we need the first object in it
                // and we need to morph into a Card instance so we can call its .toHtml method
                
                ctx.card = new Card(data[0]);
                cb();
            })
            .fail(console.error)
    };

    Card.fetchAll = (cb) => {
        $.get(`${API_URL}/api/v1/cards/`)
            .then(Card.loadAll)
            .then(cb)
            .fail(console.error);
    }

    Card.loadAll = (data) => {
        Card.all = data.map(obj => new Card(obj));
    }

    Card.prototype.toHtml = function () {
        let fillTemplate = Handlebars.compile($('#card-template').text());
        return fillTemplate(this);
    }

    module.Card = Card;
})(app);