'use strict';

const response = require('./res');
const connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("aplikasi REST API ku berjalan", res);
};

//menampilkan data semua mahasiswa
exports.tampildatamahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//menampilkan data mahasiswa berdasarkan id
exports.tampildataberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};