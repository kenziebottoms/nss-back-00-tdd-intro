"use strict";

const sqlite3 = require("sqlite3").verbose();
const { createTable } = require("./makeTable");

(function createDb() {
    new sqlite3.Database("acme.sqlite", () => {
        createTable()
            .then(data => {
            })
            .catch(err => {
            });
    });
})();