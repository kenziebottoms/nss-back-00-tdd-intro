"use strict";

const { createTables } = require("../js/makeTable");
const { assert } = require("chai");
const { getCustomers, addCustomer } = require("../js/customers");

// Create

// Read
describe("Read fnality:", () => {
    describe("getCustomers()", () => {
        it("should return a promise", () => {
            assert.typeOf(getCustomers(), "promise");
        });
        it("should resolve into an array", () => {
            getCustomers().then(response => {
                assert.isArray(response);
            });
        });
    });
});

describe("Write fnality:", () => {
    describe("addCustomer()", () => {
        it("should return an object", () => {
            assert.isObject(addCustomer());
        });
    });
});

// Update

// Destroy