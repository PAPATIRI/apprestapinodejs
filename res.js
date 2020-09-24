// berfungsi kode javascript lebih diketatkan agar baik
'use strict';

exports.ok = function (values, res) {
    let data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
}