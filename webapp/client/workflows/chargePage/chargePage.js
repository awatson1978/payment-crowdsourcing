Session.setDefault('is_admin', false);



Template.chargeHistory.chargeHistory = function(){
    return Charges.find();
}
Template.crowdSourcingForm.events({
    'click .validate-donation': function(){

        console.log(Mesosphere.creditCardForm);


        var formData = [
            {"name":"creditCardName", "value": $('#creditCardName').val()},
            {"name":"creditCardNumber", "value": $('#creditCardNumber').val()},
            {"name":"creditCardMonth", "value": $('#creditCardMonth').val()},
            {"name":"creditCardYear", "value": $('#creditCardYear').val()},
            {"name":"creditCardSecurity", "value": $('#creditCardSecurity').val()}
        ];

        console.log('this is the formData we have so far....');
        console.log(formData);

        var validationObject = Mesosphere.creditCardForm.validate(formData);


        console.log('received a validation object....');
        console.log(validationObject);

    },
    'click .process-donation':function(){
        console.count('click .process-donation');

        var formData = {
            chargeAmount: Session.get('donation_level'),
            creditCardName: $('#creditCardName').val(),
            creditCardNumber: $('#creditCardNumber').val(),
            creditCardMonth: $('#creditCardMonth').val(),
            creditCardYear: $('#creditCardYear').val(),
            creditCardSecurity: $('#creditCardSecurity').val()
    };

        Meteor.call('validateCharge', formData, function(err, result) {
            if (err) {
                console.log(err);
                Session.set('current_donation_step', 'error');
            }else{
                console.log(result);
                Session.set('current_donation_step', 'thankyou');
            }
        });
    }
});




//-----------------------------------------------------------

Session.setDefault('current_donation_step', 'intro');
Session.setDefault('donation_level', 0);
Session.setDefault('donation_frequency', 'once');
Session.setDefault('email_receipt', "");


var creditCardNumber = "";
var creditCardName = "";
var creditCardMonth = "";
var creditCardYear = "";
var creditCardSecurity = "";
var creditCardReceiptEmail = "";
var subscriptionPeriod = "oneTime";


Template.crowdSourcingForm.events({
    'click .donation-step-intro': function(){
        Session.set('current_donation_step', 'intro');
        Session.set('donation_level', 0);
    },
    'click .donation-step-amount': function(){
        Session.set('current_donation_step', 'amount');
        Session.set('donation_level', 0);
    },
    'click .donation-step-card': function(){
        if(Session.get('is_admin')){
            Session.set('current_donation_step', 'card');
        }
    },
    'click .donation-step-thankyou': function(){
        if(Session.get('is_admin')){
            Session.set('current_donation_step', 'thankyou');
        }
    },
    'click .donation-step-frequency': function(){
        if(Session.get('is_admin')){
            Session.set('current_donation_step', 'frequency');
        }
    },
    'click .donation-step-recipient': function(){
        if(Session.get('is_admin')){
            Session.set('current_donation_step', 'recipient');
        }
    },
    'click .donation-step-receipt': function(){
        if(Session.get('is_admin')){
            Session.set('current_donation_step', 'receipt');
        }
    },




    'click #fundingLevelsContinue':function(){
        Session.set('current_donation_step', 'amount');
    },

    'click #donation-5':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 5);
    },
    'click #donation-20':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 20);
    },
    'click #donation-100':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 100);
    },
    'click #donation-200':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 200);
    },
    'click #donation-400':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 400);
    },
    'click #donation-500':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 500);
    },
    'click #donation-1000':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 1000);
    },
    'click #donation-2500':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 2500);
    },
    'click #donation-5000':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 5000);
    },
    'click #donation-10000':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 10000);
    },
    'click #donation-25000':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 25000);
    },
    'click #donation-30000':function(){
        Session.set('current_donation_step', 'frequency');
        Session.set('donation_level', 30000);
    },

    'click #detailsCancel':function(){
        Session.set('current_donation_step', 'amount');
    },


    'click #donation-frequency-once':function(){
        Session.set('current_donation_step', 'receipt');
        Session.set('donation_frequency', 'once');
    },
    'click #donation-frequency-monthly':function(){
        Session.set('current_donation_step', 'receipt');
        Session.set('donation_frequency', 'monthly');
    },
    'click #donation-frequency-seasonal':function(){
        Session.set('current_donation_step', 'receipt');
        Session.set('donation_frequency', 'seasonal');
    },
    'click #donation-frequency-annual':function(){
        Session.set('current_donation_step', 'receipt');
        Session.set('donation_frequency', 'annual');
    },


    'click #backToFrequency':function(){
        Session.set('current_donation_step', 'frequency');
    },
    'click #skipReceipt':function(){
        Session.set('current_donation_step', 'card');
    },
    'click #confirmAddress':function(){
        Session.set('current_donation_step', 'card');
        Session.set('email_receipt', $('#receiptAddressInput').val());
    },

//    'click #detailsConfirm':function(){
//        creditCardName = $('#creditCardNameInput').val();
//        creditCardNumber = $('#creditCardNumberInput').val();
//        creditCardMonth = $('#creditCardMonthInput').val();
//        creditCardYear = $('#creditCardYearInput').val();
//        creditCardSecurity = $('#creditCardSecurityInput').val();
//
//        Session.set('current_donation_step', 'thankyou');
//    },
//
//    'click #confirmCancel':function(){
//        Session.set('current_donation_step', 'card');
//    },
//    'click #confirmSubmit':function(){
//        Session.set('current_donation_step', 'thankyou');
//    },

    'keyup #creditCardNameInput':function(){
        creditCardName = $('#creditCardNameInput').val();
    },
    'keyup #creditCardNumberInput':function(){
        creditCardNumber = $('#creditCardNumberInput').val();
    },
    'keyup #creditCardMonthInput':function(){
        creditCardMonth = $('#creditCardMonthInput').val();
    },
    'keyup #creditCardYearInput':function(){
        creditCardYear = $('#creditCardYearInput').val();
    },
    'keyup #creditCardSecurityInput':function(){
        creditCardSecurity = $('#creditCardSecurityInput').val();
    }
});



Session.setDefault('form_is_validated', false);
Template.crowdSourcingForm.isValidated = function(){
    return Session.get('form_is_validated');
}
Template.crowdSourcingForm.validatedStyle = function(){
    if(Session.get('form_is_validated')){
        return 'btn-default';
    }else{
        return 'btn-info';
    };
}

Template.crowdSourcingForm.showEmailReceiptInfo = function(){
    if(Session.get('email_receipt') === ""){
        return false;
    }else{
        return true;
    }
}


Template.crowdSourcingForm.getCardName = function(){
    return creditCardName;
}
Template.crowdSourcingForm.getCardNumber = function(){
    return creditCardNumber;
}
Template.crowdSourcingForm.getCardMonth = function(){
    return creditCardMonth;
}
Template.crowdSourcingForm.getCardYear = function(){
    return creditCardYear;
}
Template.crowdSourcingForm.getCardSecurity = function(){
    return creditCardSecurity;
}



Template.crowdSourcingForm.getEmailReceipt = function(){
    return Session.get('email_receipt');
}
Template.crowdSourcingForm.getDonationLevel = function(){
    return '$' + Session.get('donation_level') + " Donation";
}

Template.crowdSourcingForm.getDonationFrequency = function(){
    switch(Session.get('donation_frequency')){
        case 'once':
            return 'One Time';
            break;
        case 'monthly':
            return 'Monthly';
            break;
        case 'seasonal':
            return 'Seasonal';
            break;
        case 'annual':
            return 'Annual';
            break;
        default:
            return 'One Time';
            break;
    }
}



Template.crowdSourcingForm.getIntroStepVisibility = function(){
    if(Session.get('current_donation_step') == 'intro'){
        return 'visible';
    }else{
        return 'hidden';
    }
}
Template.crowdSourcingForm.getAmountStepVisibility = function(){
    if(Session.get('current_donation_step') == 'amount'){
        return 'visible';
    }else{
        return 'hidden';
    }
}
Template.crowdSourcingForm.getFrequencyStepVisibility = function(){
    if(Session.get('current_donation_step') == 'frequency'){
        return 'visible';
    }else{
        return 'hidden';
    }
}
Template.crowdSourcingForm.getReceiptStepVisibility = function(){
    if(Session.get('current_donation_step') == 'receipt'){
        return 'visible';
    }else{
        return 'hidden';
    }
}
Template.crowdSourcingForm.getCardStepVisibility = function(){
    if(Session.get('current_donation_step') == 'card'){
        return 'visible';
    }else{
        return 'hidden';
    }
}
Template.crowdSourcingForm.getThankYouStepVisibility = function(){
    if(Session.get('current_donation_step') == 'thankyou'){
        return 'visible';
    }else{
        return 'hidden';
    }
}
Template.crowdSourcingForm.getErrorStepVisibility = function(){
    if(Session.get('current_donation_step') == 'error'){
        return 'visible';
    }else{
        return 'hidden';
    }
}



Template.crowdSourcingForm.isIntroStepActive = function(){
    if(Session.get('current_donation_step') == 'intro'){
        return 'active';
    }else{
        return '';
    }
}
Template.crowdSourcingForm.isAmountStepActive = function(){
    if(Session.get('current_donation_step') == 'amount'){
        return 'active';
    }else{
        return '';
    }
}
Template.crowdSourcingForm.isFrequencyStepActive = function(){
    if(Session.get('current_donation_step') == 'frequency'){
        return 'active';
    }else{
        return '';
    }
}
Template.crowdSourcingForm.isRecipientStepActive = function(){
    if(Session.get('current_donation_step') == 'recipient'){
        return 'active';
    }else{
        return '';
    }
}
Template.crowdSourcingForm.isReceiptStepActive = function(){
    if(Session.get('current_donation_step') == 'receipt'){
        return 'active';
    }else{
        return '';
    }
}
Template.crowdSourcingForm.isCardStepActive = function(){
    if(Session.get('current_donation_step') == 'card'){
        return 'active';
    }else{
        return '';
    }
}
Template.crowdSourcingForm.isStepThreeBActive = function(){
    return '';
}
Template.crowdSourcingForm.isThankYouStepActive = function(){
    if(Session.get('current_donation_step') == 'thankyou'){
        return 'active';
    }else{
        return '';
    }
}

