
//var StripeAPI = Npm.require('stripe');
var StripeAPI = Npm.require('stripe');

// VONVO PRIVATE KEY:  sk_test_ryTpkYFpQrkpeUG7g6p1ZULi
// var Stripe = StripeAPI('sk_test_ryTpkYFpQrkpeUG7g6p1ZULi');

// PENTASYLLABIC PRIVATE KEY:  sk_test_D75N4lmRPfpc49Ok4tLbwExF
// test key
var Stripe = StripeAPI('sk_test_D75N4lmRPfpc49Ok4tLbwExF');

// live key
//var Stripe = StripeAPI('sk_live_VYj7PwFoUxJownwrgqawvnTb');

Meteor.methods({
    createNewCharge: function (options) {
        try{
            console.log('received a new charge: ' + JSON.stringify(options));

            options = options || {};

            // TODO:  add validation functions
            //        if (!(typeof options.text === "string" && options.text.length)){
            //            throw new Meteor.Error(400, "Required parameter missing");
            //        }
            //
            //        if (options.text.length > 100){
            //            throw new Meteor.Error(413, "Title too long");
            //        }
            //
            //        if (! options.list_id ){
            //            throw new Meteor.Error(413, "No list id!");
            //        }
            //
            //        if (! this.userId){
            //            throw new Meteor.Error(403, "You must be logged in");
            //        }

            var result = "...";
            Stripe.charges.create({
                amount: 2000,
                currency: "USD",
                card: {
                    number: "4242424242424242",
                    exp_month: "03",
                    exp_year: "2014"
                }
            }, function (err, res) {
                console.log(err, res);
                result = res;
            });

            return Charges.insert({
                CardType: options.CardType,
                Name: options.Name,
                CardNumber: options.CardNumber,
                ExpiresMonth: options.ExpiresMonth,
                ExpiresYear: options.ExpiresYear,
                Security: options.Security,
                Zip: options.Zip,
                Result: result
            });
        }catch(error){
            console.log(error);
        }
    },
    validateCharge: function (rawFormData) {
        try{
            console.log('received a rawFormData: ' + JSON.stringify(rawFormData));

            rawFormData = rawFormData || {};

            //var validationObject = Mesosphere.creditCardForm.validate(rawFormData);

            //var newCharge;
            //if (!validationObject.errors) {
                //console.log("no errors");

                //newCharge = processUser(validationObject.formData);
                var result = "...";
                Stripe.charges.create({
                    amount: rawFormData.chargeAmount * 100,
                    currency: "USD",
                    card: {
                        number: rawFormData.creditCardNumber,
                        exp_month: rawFormData.creditCardMonth,
                        exp_year: rawFormData.creditCardYear
                    }
                }, function (error, result) {
                    console.log(error, result);
                    if(error){
                        console.log('Stripe returned an error...');
                        return error;
                    }else{
                        console.log('Stripe returned an result...');
                        return result;
                    }
                });

//                //db.users.insert(newUser);
//                return Charges.insert({
//                    Name: options.creditCardName,
//                    CardNumber: options.creditCardNumber,
//                    ExpiresMonth: options.creditCardMonth,
//                    ExpiresYear: options.creditCardYear,
//                    Security: options.creditCardSecurity,
//                    Result: result
//                });

            //    return('success!');
            //}
            //else {
            //    console.log("errors:" + JSON.stringify(validationObject.errors));
            //    return validationObject.errors;
            //}
        }catch(error){
            console.log(error);
        }
    }

});