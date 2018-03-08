"use strict";

const { createTables } = require("../js/makeTable");
const { assert } = require("chai");
const { getCustomers, addCustomer, deleteCustomer } = require("../js/customers");

const sampleCustomer = {
    firstName: "Pat",
    lastName: "Smith",
    city: "Effington",
    street: "Eff Street",
    state: "Eflorida",
    zip: "12345",
    phone: "555-123-4567"
};

// Create
describe("Write fnality:", () => {
    describe("addCustomer()", () => {
        it("should return a promise", () => {
            assert.typeOf(addCustomer(sampleCustomer), "promise");
        });
        it("should resolve to an integer", () => {
            addCustomer(sampleCustomer)
                .then( response => {
                    assert.typeOf(response, "integer");
                })
                .catch(err => {
                });
        });
    });
});

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

// Update

// Destroy

describe("Delete fnality", () => {
    describe("deleteCustomer()", () => {
        it("is a function", () => {
            assert.isFunction(deleteCustomer);
        });
        it("should return a promise", () => {
            addCustomer(sampleCustomer)
                .then(id => {
                    assert.typeOf(deleteCustomer(id).catch(err => {}), "promise");
                })
                .catch(err => {});
        });
    });
});