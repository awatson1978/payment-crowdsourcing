(function () {

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/stripe-meteor/stripe_server.js                                             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
                                                                                       // 1
//var StripeAPI = Npm.require('stripe');                                               // 2
var StripeAPI = Npm.require('stripe');                                                 // 3
                                                                                       // 4
// VONVO PRIVATE KEY:  sk_test_ryTpkYFpQrkpeUG7g6p1ZULi                                // 5
// var Stripe = StripeAPI('sk_test_ryTpkYFpQrkpeUG7g6p1ZULi');                         // 6
                                                                                       // 7
// PENTASYLLABIC PRIVATE KEY:  sk_test_D75N4lmRPfpc49Ok4tLbwExF                        // 8
// test key                                                                            // 9
var Stripe = StripeAPI('sk_test_D75N4lmRPfpc49Ok4tLbwExF');                            // 10
                                                                                       // 11
// live key                                                                            // 12
//var Stripe = StripeAPI('sk_live_VYj7PwFoUxJownwrgqawvnTb');                          // 13
                                                                                       // 14
Meteor.methods({                                                                       // 15
    createNewCharge: function (options) {                                              // 16
        try{                                                                           // 17
            console.log('received a new charge: ' + JSON.stringify(options));          // 18
                                                                                       // 19
            options = options || {};                                                   // 20
                                                                                       // 21
            // TODO:  add validation functions                                         // 22
            //        if (!(typeof options.text === "string" && options.text.length)){ // 23
            //            throw new Meteor.Error(400, "Required parameter missing");   // 24
            //        }                                                                // 25
            //                                                                         // 26
            //        if (options.text.length > 100){                                  // 27
            //            throw new Meteor.Error(413, "Title too long");               // 28
            //        }                                                                // 29
            //                                                                         // 30
            //        if (! options.list_id ){                                         // 31
            //            throw new Meteor.Error(413, "No list id!");                  // 32
            //        }                                                                // 33
            //                                                                         // 34
            //        if (! this.userId){                                              // 35
            //            throw new Meteor.Error(403, "You must be logged in");        // 36
            //        }                                                                // 37
                                                                                       // 38
            var result = "...";                                                        // 39
            Stripe.charges.create({                                                    // 40
                amount: 2000,                                                          // 41
                currency: "USD",                                                       // 42
                card: {                                                                // 43
                    number: "4242424242424242",                                        // 44
                    exp_month: "03",                                                   // 45
                    exp_year: "2014"                                                   // 46
                }                                                                      // 47
            }, function (err, res) {                                                   // 48
                console.log(err, res);                                                 // 49
                result = res;                                                          // 50
            });                                                                        // 51
                                                                                       // 52
            return Charges.insert({                                                    // 53
                CardType: options.CardType,                                            // 54
                Name: options.Name,                                                    // 55
                CardNumber: options.CardNumber,                                        // 56
                ExpiresMonth: options.ExpiresMonth,                                    // 57
                ExpiresYear: options.ExpiresYear,                                      // 58
                Security: options.Security,                                            // 59
                Zip: options.Zip,                                                      // 60
                Result: result                                                         // 61
            });                                                                        // 62
        }catch(error){                                                                 // 63
            console.log(error);                                                        // 64
        }                                                                              // 65
    },                                                                                 // 66
    validateCharge: function (rawFormData) {                                           // 67
        try{                                                                           // 68
            console.log('received a rawFormData: ' + JSON.stringify(rawFormData));     // 69
                                                                                       // 70
            rawFormData = rawFormData || {};                                           // 71
                                                                                       // 72
            //var validationObject = Mesosphere.creditCardForm.validate(rawFormData);  // 73
                                                                                       // 74
            //var newCharge;                                                           // 75
            //if (!validationObject.errors) {                                          // 76
                //console.log("no errors");                                            // 77
                                                                                       // 78
                //newCharge = processUser(validationObject.formData);                  // 79
                var result = "...";                                                    // 80
                Stripe.charges.create({                                                // 81
                    amount: rawFormData.chargeAmount * 100,                            // 82
                    currency: "USD",                                                   // 83
                    card: {                                                            // 84
                        number: rawFormData.creditCardNumber,                          // 85
                        exp_month: rawFormData.creditCardMonth,                        // 86
                        exp_year: rawFormData.creditCardYear                           // 87
                    }                                                                  // 88
                }, function (error, result) {                                          // 89
                    console.log(error, result);                                        // 90
                    if(error){                                                         // 91
                        console.log('Stripe returned an error...');                    // 92
                        return error;                                                  // 93
                    }else{                                                             // 94
                        console.log('Stripe returned an result...');                   // 95
                        return result;                                                 // 96
                    }                                                                  // 97
                });                                                                    // 98
                                                                                       // 99
//                //db.users.insert(newUser);                                          // 100
//                return Charges.insert({                                              // 101
//                    Name: options.creditCardName,                                    // 102
//                    CardNumber: options.creditCardNumber,                            // 103
//                    ExpiresMonth: options.creditCardMonth,                           // 104
//                    ExpiresYear: options.creditCardYear,                             // 105
//                    Security: options.creditCardSecurity,                            // 106
//                    Result: result                                                   // 107
//                });                                                                  // 108
                                                                                       // 109
            //    return('success!');                                                  // 110
            //}                                                                        // 111
            //else {                                                                   // 112
            //    console.log("errors:" + JSON.stringify(validationObject.errors));    // 113
            //    return validationObject.errors;                                      // 114
            //}                                                                        // 115
        }catch(error){                                                                 // 116
            console.log(error);                                                        // 117
        }                                                                              // 118
    }                                                                                  // 119
                                                                                       // 120
});                                                                                    // 121
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
