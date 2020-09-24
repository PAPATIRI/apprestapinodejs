'use strict';

const {
    json
} = require('body-parser');

module.exports = function (app) {
    const jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilmhs')
        .get(jsonku.tampildatamahasiswa);

    app.route('/tampilmhs/:id')
        .get(jsonku.tampildataberdasarkanid);

    app.route('/tambahmhs')
        .get(jsonku.tambahmahasiswa);

    app.route('/editmhs')
        .put(jsonku.editmahasiswa);

    app.route('/hapusmhs')
        .delete(jsonku.hapusmahasiswa);
}