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

    Card.fetchAll = () => {
        $.get('https://acl-cards-demo.herokuapp.com/api/v1/cards/')
            .done(console.log);
    }

    module.Card = Card;
})(app);

app.Card.fetchAll();
