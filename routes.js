'use strict';

module.exports = function (app) {
    const jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampildatamahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampildataberdasarkanid);

    app.route('/tambahmhs')
        .get(jsonku.tambahmahasiswa);
}