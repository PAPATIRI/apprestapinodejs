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

//menambahkan data mahasiswa
exports.tambahmahasiswa = function (req, res) {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?, ?, ?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("berhasil menambahkan data mahasiswa", res);
            }
        });
};

//mengubah data mahasiswa berdasarkan id mahasiswa
exports.editmahasiswa = function (req, res) {
    let id = req.body.id;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',
        [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("berhasil mengubah data mahasiswa", res);
            }
        });
};

//menghapus data mahasiswa berdasarkan id
exports.hapusmahasiswa = function (req, res) {
    let id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok('berhasil menghapus data mahasiswa', res);
            }
        });
};