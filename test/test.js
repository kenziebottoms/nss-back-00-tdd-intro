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
        let customer = {
            firstName: "Pat",
            lastName: "Smith",
            city: "Effington",
            street: "Eff Street",
            state: "Eflorida",
            zip: "12345",
            phone: "555-123-4567"
        };
        it("should return a promise", () => {
            assert.typeOf(addCustomer(customer), "promise");
        });
        it("should resolve to an integer", () => {
            addCustomer(customer)
                .then( response => {
                    assert.typeOf(response, "integer");
                })
                .catch(err => {
                });
        });
    });
});

// Update

// Destroy