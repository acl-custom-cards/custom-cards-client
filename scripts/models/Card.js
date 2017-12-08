'use strict';
var app = app || {};

(function(module) {
    function Card (obj) {
        this.id = obj.id;
        this.recipient = obj.recipient;
        this.sender = obj.sender;
        this.content = obj.content;
    }

    Card.all = [];

    Card.fetchAll = (cb) => {
        $.get('https://acl-cards-demo.herokuapp.com/api/v1/cards/')
            .then(Card.loadAll)
            .then(cb)
            .fail(console.error)
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

$(document).ready(app.Card.fetchAll(app.cardView.initIndexPage));
