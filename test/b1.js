var TestUtils = require('./testutils')
var Ballot = artifacts.require("./Ballot.sol");

contract('B1', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2];

        var ac1_end;
        var ac2_end;
        var ac3_end;

        return Ballot.deployed().then(function(instance) {
            meta = instance;

            return meta.giveRightToVote(ac1);
        }).then(function() {

            return meta.giveRightToVote(ac2);
        }).then(function() {

            return meta.giveRightToVote(ac3);
        })
/*
        }).then(function() {

            return meta.delegate(ac2);
        }).then(function() {

            return meta.delegate(ac2).then(function(tx) {
                // console.log(tx);
            })
        }).then(function() {

            return meta.delegate(ac3);
        }).then(function() {

            return meta.vote(1);
        }).then(function(balance) {
            ac1_end = balance.toNumber();
            console.log('1e', ac1_end);

            return meta.vote(1);
        }).then(function(balance) {
            ac2_end = balance.toNumber();
            console.log('2e', ac2_end);

            return meta.vote(1);
        }).then(function(balance) {
            ac3_end = balance.toNumber();
            console.log('3e', ac3_end);
        });
*/
    });
});
