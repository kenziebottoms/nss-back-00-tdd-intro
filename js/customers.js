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

module.exports.addCustomer = ({ firstName, lastName, city, street, state, zip, phone }) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO customers VALUES (
            null,
            "${firstName}",
            "${lastName}",
            "${city}",
            "${street}",
            "${state}",
            "${zip}",
            "${phone}"
        )`, function (err, data) {
            if (err) return reject(err);
            resolve(this.lastID);
        })
    });
};

module.exports.deleteCustomer = id => {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM customers
        WHERE customer_id = ${id};`, function(err, data) {
            if (err) return reject(err);
            resolve(data);
        });
    });
};

module.exports.editCustomer = (id, customer) => {
    return new Promise((resolve, reject) => {
        let properties = Object.entries(customer);
        let sql = `UPDATE customers SET `;
        for (let prop in properties) {
            sql += `${properties[prop][0].toString()} = "${properties[prop][1].toString()}", `;
        }
        sql = sql.slice(0, sql.length-2);
        sql += ` WHERE customer_id = ${+id}`;
        db.run(sql, function (err, data) {
            if (err) return reject(err);
            resolve(data);
        });
    });
};