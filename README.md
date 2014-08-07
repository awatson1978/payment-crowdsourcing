payment-crowdsourcing
=====================

Meteor package to drop in a crowdsourcing payment page using Stripe.


==============================
#### Installation

A.  Clone the repo to your local computer.

````js
git clone https://github.com/awatson1978/payment-per-service.git payment-crowdsourcing
````

B.  Create your Stripe Account at https://manage.stripe.com/account  
C.  Update your private and public keys with the data from your Stripe Account.

````js
// packages/stripe-meteor/stripe_server.js
var Stripe = StripeAPI('sk_test_adhfniabgvdafvdfv');

// client/stripe.js
Stripe.setPublishableKey('pk_test_janvanweo[ignaodfinboidfj');

````

D.  Edit copy and parameters to suite your business needs.
E.  Maybe update the email template.
F.  Publish

==============================
### Licensing

MIT License. Use as you wish, including for commercial purposes.
