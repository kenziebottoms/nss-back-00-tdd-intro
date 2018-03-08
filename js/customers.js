"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("acme.sqlite");

module.exports.getCustomers = () => {
    return new Promise((resolve, reject) => {
        let customers = [{}];
        db.all(`SELECT * FROM customers`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
};

module.exports.addCustomer = () => {
    return {};
}