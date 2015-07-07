(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/stripe-meteor/stripe_client.js                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
(function(){var e,t,n,r,i,s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},u=this;this.Stripe=function(){function e(){}return e.version=2,e.endpoint="https://api.stripe.com/v1",e.setPublishableKey=function(t){e.key=t},e.complete=function(t){return function(n,r,i){var s;if(n!=="success")return s=Math.round((new Date).getTime()/1e3),(new Image).src="http://q.stripe.com?event=stripejs-error&type="+n+"&key="+e.key+"&timestamp="+s,typeof t=="function"?t(500,{error:{code:n,type:n,message:"An unexpected error has occurred with Stripe.js. This may\nbe due to network connectivity issues, so you should try\nagain (you won't be charged twice). If you're still having\nproblems, please let us know!"}}):void 0}},e}.call(this),e=this.Stripe,this.Stripe.token=function(){function t(){}return t.validate=function(e,t){if(!e)throw t+" required";if(typeof e!="object")throw t+" invalid"},t.formatData=function(t,n){return e.utils.isElement(t)&&(t=e.utils.paramsFromForm(t,n)),e.utils.underscoreKeys(t),t},t.create=function(t,n){return t.key||(t.key=e.key||e.publishableKey),e.utils.validateKey(t.key),e.ajaxJSONP({url:""+e.endpoint+"/tokens",data:t,method:"POST",success:function(e,t){return typeof n=="function"?n(t,e):void 0},complete:e.complete(n),timeout:4e4})},t.get=function(t,n){if(!t)throw"token required";return e.utils.validateKey(e.key),e.ajaxJSONP({url:""+e.endpoint+"/tokens/"+t,data:{key:e.key},success:function(e,t){return typeof n=="function"?n(t,e):void 0},complete:e.complete(n),timeout:4e4})},t}.call(this),this.Stripe.card=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return o(n,t),n.tokenName="card",n.whitelistedAttrs=["number","cvc","exp_month","exp_year","name","address_line1","address_line2","address_city","address_state","address_zip","address_country"],n.createToken=function(t,r,i){var s;return r==null&&(r={}),e.token.validate(t,"card"),typeof r=="function"?(i=r,r={}):typeof r!="object"&&(s=parseInt(r,10),r={},s>0&&(r.amount=s)),r[n.tokenName]=e.token.formatData(t,n.whitelistedAttrs),e.token.create(r,i)},n.getToken=function(t,n){return e.token.get(t,n)},n.validateCardNumber=function(e){return e=(e+"").replace(/\s+|-/g,""),e.length>=10&&e.length<=16&&n.luhnCheck(e)},n.validateCVC=function(t){return t=e.utils.trim(t),/^\d+$/.test(t)&&t.length>=3&&t.length<=4},n.validateExpiry=function(t,n){var r,i;return t=e.utils.trim(t),n=e.utils.trim(n),/^\d+$/.test(t)?/^\d+$/.test(n)?parseInt(t,10)<=12?(i=new Date(n,t),r=new Date,i.setMonth(i.getMonth()-1),i.setMonth(i.getMonth()+1,1),i>r):!1:!1:!1},n.luhnCheck=function(e){var t,n,r,i,s,o;r=!0,i=0,n=(e+"").split("").reverse();for(s=0,o=n.length;s<o;s++){t=n[s],t=parseInt(t,10);if(r=!r)t*=2;t>9&&(t-=9),i+=t}return i%10===0},n.cardType=function(e){return n.cardTypes[e.slice(0,2)]||"Unknown"},n.cardTypes=function(){var e,t,n,r;t={};for(e=n=40;n<=49;e=++n)t[e]="Visa";for(e=r=50;r<=59;e=++r)t[e]="MasterCard";return t[34]=t[37]="American Express",t[60]=t[62]=t[64]=t[65]="Discover",t[35]="JCB",t[30]=t[36]=t[38]=t[39]="Diners Club",t}(),n}.call(this,this.Stripe.token),this.Stripe.bankAccount=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return o(n,t),n.tokenName="bank_account",n.whitelistedAttrs=["country","routing_number","account_number"],n.createToken=function(t,r,i){return r==null&&(r={}),e.token.validate(t,"bank account"),typeof r=="function"&&(i=r,r={}),r[n.tokenName]=e.token.formatData(t,n.whitelistedAttrs),e.token.create(r,i)},n.getToken=function(t,n){return e.token.get(t,n)},n.validateRoutingNumber=function(t,r){t=e.utils.trim(t);switch(r){case"US":return/^\d+$/.test(t)&&t.length===9&&n.routingChecksum(t);case"CA":return/\d{5}\-\d{3}/.test(t)&&t.length===9;default:return!0}},n.validateAccountNumber=function(t,n){t=e.utils.trim(t);switch(n){case"US":return/^\d+$/.test(t)&&t.length>=1&&t.length<=17;default:return!0}},n.routingChecksum=function(e){var t,n,r,i,s,o;r=0,t=(e+"").split(""),o=[0,3,6];for(i=0,s=o.length;i<s;i++)n=o[i],r+=parseInt(t[n])*3,r+=parseInt(t[n+1])*7,r+=parseInt(t[n+2]);return r!==0&&r%10===0},n}.call(this,this.Stripe.token),t=["createToken","getToken","cardType","validateExpiry","validateCVC","validateCardNumber"];for(r=0,i=t.length;r<i;r++)n=t[r],this.Stripe[n]=this.Stripe.card[n];typeof module!="undefined"&&module!==null&&(module.exports=this.Stripe),typeof define=="function"&&define("stripe",[],function(){return u.Stripe})}).call(this),function(){var e,t,n,r=[].slice;e=encodeURIComponent,t=(new Date).getTime(),n=function(t,r,i){var s,o;r==null&&(r=[]);for(s in t)o=t[s],i&&(s=""+i+"["+s+"]"),typeof o=="object"?n(o,r,s):r.push(""+s+"="+e(o));return r.join("&").replace(/%20/g,"+")},this.Stripe.ajaxJSONP=function(e){var i,s,o,u,a,f;return e==null&&(e={}),o="sjsonp"+ ++t,a=document.createElement("script"),s=null,i=function(t){var n;return t==null&&(t="abort"),clearTimeout(s),(n=a.parentNode)!=null&&n.removeChild(a),o in window&&(window[o]=function(){}),typeof e.complete=="function"?e.complete(t,f,e):void 0},f={abort:i},a.onerror=function(){return f.abort(),typeof e.error=="function"?e.error(f,e):void 0},window[o]=function(){var t;t=1<=arguments.length?r.call(arguments,0):[],clearTimeout(s),a.parentNode.removeChild(a);try{delete window[o]}catch(n){window[o]=void 0}return typeof e.success=="function"&&e.success.apply(e,t),typeof e.complete=="function"?e.complete("success",f,e):void 0},e.data||(e.data={}),e.data.callback=o,e.method&&(e.data._method=e.method),a.src=e.url+"?"+n(e.data),u=document.getElementsByTagName("head")[0],u.appendChild(a),e.timeout>0&&(s=setTimeout(function(){return f.abort("timeout")},e.timeout)),f}}.call(this),function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};this.Stripe.utils=function(){function t(){}return t.trim=function(e){return(e+"").replace(/^\s+|\s+$/g,"")},t.underscore=function(e){return(e+"").replace(/([A-Z])/g,function(e){return"_"+e.toLowerCase()}).replace(/-/g,"_")},t.underscoreKeys=function(e){var t,n,r;r=[];for(t in e)n=e[t],delete e[t],r.push(e[this.underscore(t)]=n);return r},t.isElement=function(e){return typeof e!="object"?!1:typeof jQuery!="undefined"&&jQuery!==null&&e instanceof jQuery?!0:e.nodeType===1},t.paramsFromForm=function(t,n){var r,i,s,o,u,a,f,l,c,h;n==null&&(n=[]),typeof jQuery!="undefined"&&jQuery!==null&&t instanceof jQuery&&(t=t[0]),s=t.getElementsByTagName("input"),u=t.getElementsByTagName("select"),a={};for(f=0,c=s.length;f<c;f++){i=s[f],r=this.underscore(i.getAttribute("data-stripe"));if(e.call(n,r)<0)continue;a[r]=i.value}for(l=0,h=u.length;l<h;l++){o=u[l],r=this.underscore(o.getAttribute("data-stripe"));if(e.call(n,r)<0)continue;o.selectedIndex!=null&&(a[r]=o.options[o.selectedIndex].value)}return a},t.validateKey=function(e){if(!e||typeof e!="string")throw new Error("You did not set a valid publishable key. Call Stripe.setPublishableKey() with your publishable key. For more info, see https://stripe.com/docs/stripe.js");if(/\s/g.test(e))throw new Error("Your key is invalid, as it contains whitespace. For more info, see https://stripe.com/docs/stripe.js");if(/^sk_/.test(e))throw new Error("You are using a secret key with Stripe.js, instead of the publishable one. For more info, see https://stripe.com/docs/stripe.js")},t}()}.call(this),function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};this.Stripe.validator={"boolean":function(e,t){if(t!=="true"&&t!=="false")return"Enter a boolean string (true or false)"},integer:function(e,t){if(!/^\d+$/.test(t))return"Enter an integer"},positive:function(e,t){if(!(!this.integer(e,t)&&parseInt(t,10)>0))return"Enter a positive value"},range:function(t,n){var r;if(r=parseInt(n,10),e.call(t,r)<0)return"Needs to be between "+t[0]+" and "+t[t.length-1]},required:function(e,t){if(e&&(t==null||t===""))return"Required"},year:function(e,t){if(!/^\d{4}$/.test(t))return"Enter a 4-digit year"},birthYear:function(e,t){var n;n=this.year(e,t);if(n)return n;if(parseInt(t,10)>2e3)return"You must be over 18";if(parseInt(t,10)<1900)return"Enter your birth year"},month:function(e,t){if(this.integer(e,t))return"Please enter a month";if(this.range([1,2,3,4,5,6,7,8,9,10,11,12],t))return"Needs to be between 1 and 12"},choices:function(t,n){if(e.call(t,n)<0)return"Not an acceptable value for this field"},email:function(e,t){if(!/^[^@<\s>]+@[^@<\s>]+$/.test(t))return"That doesn't look like an email address"},url:function(e,t){if(!/^https?:\/\/.+\..+/.test(t))return"Not a valid url"},usTaxID:function(e,t){if(!/^\d{2}-?\d{1}-?\d{2}-?\d{4}$/.test(t))return"Not a valid tax ID"},ein:function(e,t){if(!/^\d{2}-?\d{7}$/.test(t))return"Not a valid EIN"},ssnLast4:function(e,t){if(!/^\d{4}$/.test(t))return"Not a valid last 4 digits for an SSN"},ownerPersonalID:function(e,t){var n;n=function(){switch(e){case"CA":return/^\d{3}-?\d{3}-?\d{3}$/.test(t);case"US":return!0}}();if(!n)return"Not a valid ID"},bizTaxID:function(e,t){var n,r,i,s,o,u,a,f;u={CA:["Tax ID",[/^\d{9}$/]],US:["EIN",[/^\d{2}-?\d{7}$/]]},o=u[e];if(o!=null){n=o[0],s=o[1],r=!1;for(a=0,f=s.length;a<f;a++){i=s[a];if(i.test(t)){r=!0;break}}if(!r)return"Not a valid "+n}},zip:function(e,t){var n;n=function(){switch(e.toUpperCase()){case"CA":return/^[\d\w]{6}$/.test(t!=null?t.replace(/\s+/g,""):void 0);case"US":return/^\d{5}$/.test(t)||/^\d{9}$/.test(t)}}();if(!n)return"Not a valid zip"},bankAccountNumber:function(e,t){if(!/^\d{1,17}$/.test(t))return"Invalid bank account number"},usRoutingNumber:function(e){var t,n,r,i,s,o,u;if(!/^\d{9}$/.test(e))return"Routing number must have 9 digits";s=0;for(t=o=0,u=e.length-1;o<=u;t=o+=3)n=parseInt(e.charAt(t),10)*3,r=parseInt(e.charAt(t+1),10)*7,i=parseInt(e.charAt(t+2),10),s+=n+r+i;if(s===0||s%10!==0)return"Invalid routing number"},caRoutingNumber:function(e){if(!/^\d{5}\-\d{3}$/.test(e))return"Invalid transit number"},routingNumber:function(e,t){switch(e.toUpperCase()){case"CA":return this.caRoutingNumber(t);case"US":return this.usRoutingNumber(t)}},phoneNumber:function(e,t){var n;n=t.replace(/[^0-9]/g,"");if(n.length!==10)return"Invalid phone number"},bizDBA:function(e,t){if(!/^.{1,23}$/.test(t))return"Statement descriptors can only have up to 23 characters"},nameLength:function(e,t){if(t.length===1)return"Names need to be longer than one character"}}}.call(this);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/stripe-meteor/stripe_checkout.js                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
(function() {                                                                                                      // 1
                                                                                                                   // 2
  this.StripeCheckout = {};                                                                                        // 3
                                                                                                                   // 4
  StripeCheckout.load = function() {                                                                               // 5
    var _ref;                                                                                                      // 6
    return (_ref = StripeCheckout.App).load.apply(_ref, arguments);                                                // 7
  };                                                                                                               // 8
                                                                                                                   // 9
  StripeCheckout.open = function() {                                                                               // 10
    var _ref;                                                                                                      // 11
    return (_ref = StripeCheckout.App).open.apply(_ref, arguments);                                                // 12
  };                                                                                                               // 13
                                                                                                                   // 14
  StripeCheckout.setHost = function() {                                                                            // 15
    var _ref;                                                                                                      // 16
    return (_ref = StripeCheckout.App).setHost.apply(_ref, arguments);                                             // 17
  };                                                                                                               // 18
                                                                                                                   // 19
  this.StripeButton = StripeCheckout;                                                                              // 20
                                                                                                                   // 21
}).call(this);                                                                                                     // 22
// Create a JSON object only if one does not already exist. We create the                                          // 23
// methods in a closure to avoid creating global variables.                                                        // 24
                                                                                                                   // 25
var JSON;                                                                                                          // 26
if (!JSON) {                                                                                                       // 27
    JSON = {};                                                                                                     // 28
}                                                                                                                  // 29
                                                                                                                   // 30
(function () {                                                                                                     // 31
    'use strict';                                                                                                  // 32
                                                                                                                   // 33
    function f(n) {                                                                                                // 34
        // Format integers to have at least two digits.                                                            // 35
        return n < 10 ? '0' + n : n;                                                                               // 36
    }                                                                                                              // 37
                                                                                                                   // 38
    if (typeof Date.prototype.toJSON !== 'function') {                                                             // 39
                                                                                                                   // 40
        Date.prototype.toJSON = function (key) {                                                                   // 41
                                                                                                                   // 42
            return isFinite(this.valueOf())                                                                        // 43
                ? this.getUTCFullYear()     + '-' +                                                                // 44
                    f(this.getUTCMonth() + 1) + '-' +                                                              // 45
                    f(this.getUTCDate())      + 'T' +                                                              // 46
                    f(this.getUTCHours())     + ':' +                                                              // 47
                    f(this.getUTCMinutes())   + ':' +                                                              // 48
                    f(this.getUTCSeconds())   + 'Z'                                                                // 49
                : null;                                                                                            // 50
        };                                                                                                         // 51
                                                                                                                   // 52
        String.prototype.toJSON      =                                                                             // 53
            Number.prototype.toJSON  =                                                                             // 54
            Boolean.prototype.toJSON = function (key) {                                                            // 55
                return this.valueOf();                                                                             // 56
            };                                                                                                     // 57
    }                                                                                                              // 58
                                                                                                                   // 59
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,                                                                                                       // 62
        indent,                                                                                                    // 63
        meta = {    // table of character substitutions                                                            // 64
            '\b': '\\b',                                                                                           // 65
            '\t': '\\t',                                                                                           // 66
            '\n': '\\n',                                                                                           // 67
            '\f': '\\f',                                                                                           // 68
            '\r': '\\r',                                                                                           // 69
            '"' : '\\"',                                                                                           // 70
            '\\': '\\\\'                                                                                           // 71
        },                                                                                                         // 72
        rep;                                                                                                       // 73
                                                                                                                   // 74
                                                                                                                   // 75
    function quote(string) {                                                                                       // 76
                                                                                                                   // 77
// If the string contains no control characters, no quote characters, and no                                       // 78
// backslash characters, then we can safely slap some quotes around it.                                            // 79
// Otherwise we must also replace the offending characters with safe escape                                        // 80
// sequences.                                                                                                      // 81
                                                                                                                   // 82
        escapable.lastIndex = 0;                                                                                   // 83
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {                             // 84
            var c = meta[a];                                                                                       // 85
            return typeof c === 'string'                                                                           // 86
                ? c                                                                                                // 87
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);                                       // 88
        }) + '"' : '"' + string + '"';                                                                             // 89
    }                                                                                                              // 90
                                                                                                                   // 91
                                                                                                                   // 92
    function str(key, holder) {                                                                                    // 93
                                                                                                                   // 94
// Produce a string from holder[key].                                                                              // 95
                                                                                                                   // 96
        var i,          // The loop counter.                                                                       // 97
            k,          // The member key.                                                                         // 98
            v,          // The member value.                                                                       // 99
            length,                                                                                                // 100
            mind = gap,                                                                                            // 101
            partial,                                                                                               // 102
            value = holder[key];                                                                                   // 103
                                                                                                                   // 104
// If the value has a toJSON method, call it to obtain a replacement value.                                        // 105
                                                                                                                   // 106
        if (value && typeof value === 'object' &&                                                                  // 107
                typeof value.toJSON === 'function') {                                                              // 108
            value = value.toJSON(key);                                                                             // 109
        }                                                                                                          // 110
                                                                                                                   // 111
// If we were called with a replacer function, then call the replacer to                                           // 112
// obtain a replacement value.                                                                                     // 113
                                                                                                                   // 114
        if (typeof rep === 'function') {                                                                           // 115
            value = rep.call(holder, key, value);                                                                  // 116
        }                                                                                                          // 117
                                                                                                                   // 118
// What happens next depends on the value's type.                                                                  // 119
                                                                                                                   // 120
        switch (typeof value) {                                                                                    // 121
        case 'string':                                                                                             // 122
            return quote(value);                                                                                   // 123
                                                                                                                   // 124
        case 'number':                                                                                             // 125
                                                                                                                   // 126
// JSON numbers must be finite. Encode non-finite numbers as null.                                                 // 127
                                                                                                                   // 128
            return isFinite(value) ? String(value) : 'null';                                                       // 129
                                                                                                                   // 130
        case 'boolean':                                                                                            // 131
        case 'null':                                                                                               // 132
                                                                                                                   // 133
// If the value is a boolean or null, convert it to a string. Note:                                                // 134
// typeof null does not produce 'null'. The case is included here in                                               // 135
// the remote chance that this gets fixed someday.                                                                 // 136
                                                                                                                   // 137
            return String(value);                                                                                  // 138
                                                                                                                   // 139
// If the type is 'object', we might be dealing with an object or an array or                                      // 140
// null.                                                                                                           // 141
                                                                                                                   // 142
        case 'object':                                                                                             // 143
                                                                                                                   // 144
// Due to a specification blunder in ECMAScript, typeof null is 'object',                                          // 145
// so watch out for that case.                                                                                     // 146
                                                                                                                   // 147
            if (!value) {                                                                                          // 148
                return 'null';                                                                                     // 149
            }                                                                                                      // 150
                                                                                                                   // 151
// Make an array to hold the partial results of stringifying this object value.                                    // 152
                                                                                                                   // 153
            gap += indent;                                                                                         // 154
            partial = [];                                                                                          // 155
                                                                                                                   // 156
// Is the value an array?                                                                                          // 157
                                                                                                                   // 158
            if (Object.prototype.toString.apply(value) === '[object Array]') {                                     // 159
                                                                                                                   // 160
// The value is an array. Stringify every element. Use null as a placeholder                                       // 161
// for non-JSON values.                                                                                            // 162
                                                                                                                   // 163
                length = value.length;                                                                             // 164
                for (i = 0; i < length; i += 1) {                                                                  // 165
                    partial[i] = str(i, value) || 'null';                                                          // 166
                }                                                                                                  // 167
                                                                                                                   // 168
// Join all of the elements together, separated with commas, and wrap them in                                      // 169
// brackets.                                                                                                       // 170
                                                                                                                   // 171
                v = partial.length === 0                                                                           // 172
                    ? '[]'                                                                                         // 173
                    : gap                                                                                          // 174
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'                                  // 175
                    : '[' + partial.join(',') + ']';                                                               // 176
                gap = mind;                                                                                        // 177
                return v;                                                                                          // 178
            }                                                                                                      // 179
                                                                                                                   // 180
// If the replacer is an array, use it to select the members to be stringified.                                    // 181
                                                                                                                   // 182
            if (rep && typeof rep === 'object') {                                                                  // 183
                length = rep.length;                                                                               // 184
                for (i = 0; i < length; i += 1) {                                                                  // 185
                    if (typeof rep[i] === 'string') {                                                              // 186
                        k = rep[i];                                                                                // 187
                        v = str(k, value);                                                                         // 188
                        if (v) {                                                                                   // 189
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);                                       // 190
                        }                                                                                          // 191
                    }                                                                                              // 192
                }                                                                                                  // 193
            } else {                                                                                               // 194
                                                                                                                   // 195
// Otherwise, iterate through all of the keys in the object.                                                       // 196
                                                                                                                   // 197
                for (k in value) {                                                                                 // 198
                    if (Object.prototype.hasOwnProperty.call(value, k)) {                                          // 199
                        v = str(k, value);                                                                         // 200
                        if (v) {                                                                                   // 201
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);                                       // 202
                        }                                                                                          // 203
                    }                                                                                              // 204
                }                                                                                                  // 205
            }                                                                                                      // 206
                                                                                                                   // 207
// Join all of the member texts together, separated with commas,                                                   // 208
// and wrap them in braces.                                                                                        // 209
                                                                                                                   // 210
            v = partial.length === 0                                                                               // 211
                ? '{}'                                                                                             // 212
                : gap                                                                                              // 213
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'                                      // 214
                : '{' + partial.join(',') + '}';                                                                   // 215
            gap = mind;                                                                                            // 216
            return v;                                                                                              // 217
        }                                                                                                          // 218
    }                                                                                                              // 219
                                                                                                                   // 220
// If the JSON object does not yet have a stringify method, give it one.                                           // 221
                                                                                                                   // 222
    if (typeof JSON.stringify !== 'function') {                                                                    // 223
        JSON.stringify = function (value, replacer, space) {                                                       // 224
                                                                                                                   // 225
// The stringify method takes a value and an optional replacer, and an optional                                    // 226
// space parameter, and returns a JSON text. The replacer can be a function                                        // 227
// that can replace values, or an array of strings that will select the keys.                                      // 228
// A default replacer method can be provided. Use of the space parameter can                                       // 229
// produce text that is more easily readable.                                                                      // 230
                                                                                                                   // 231
            var i;                                                                                                 // 232
            gap = '';                                                                                              // 233
            indent = '';                                                                                           // 234
                                                                                                                   // 235
// If the space parameter is a number, make an indent string containing that                                       // 236
// many spaces.                                                                                                    // 237
                                                                                                                   // 238
            if (typeof space === 'number') {                                                                       // 239
                for (i = 0; i < space; i += 1) {                                                                   // 240
                    indent += ' ';                                                                                 // 241
                }                                                                                                  // 242
                                                                                                                   // 243
// If the space parameter is a string, it will be used as the indent string.                                       // 244
                                                                                                                   // 245
            } else if (typeof space === 'string') {                                                                // 246
                indent = space;                                                                                    // 247
            }                                                                                                      // 248
                                                                                                                   // 249
// If there is a replacer, it must be a function or an array.                                                      // 250
// Otherwise, throw an error.                                                                                      // 251
                                                                                                                   // 252
            rep = replacer;                                                                                        // 253
            if (replacer && typeof replacer !== 'function' &&                                                      // 254
                    (typeof replacer !== 'object' ||                                                               // 255
                    typeof replacer.length !== 'number')) {                                                        // 256
                throw new Error('JSON.stringify');                                                                 // 257
            }                                                                                                      // 258
                                                                                                                   // 259
// Make a fake root object containing our value under the key of ''.                                               // 260
// Return the result of stringifying the value.                                                                    // 261
                                                                                                                   // 262
            return str('', {'': value});                                                                           // 263
        };                                                                                                         // 264
    }                                                                                                              // 265
                                                                                                                   // 266
                                                                                                                   // 267
// If the JSON object does not yet have a parse method, give it one.                                               // 268
                                                                                                                   // 269
    if (typeof JSON.parse !== 'function') {                                                                        // 270
        JSON.parse = function (text, reviver) {                                                                    // 271
                                                                                                                   // 272
// The parse method takes a text and an optional reviver function, and returns                                     // 273
// a JavaScript value if the text is a valid JSON text.                                                            // 274
                                                                                                                   // 275
            var j;                                                                                                 // 276
                                                                                                                   // 277
            function walk(holder, key) {                                                                           // 278
                                                                                                                   // 279
// The walk method is used to recursively walk the resulting structure so                                          // 280
// that modifications can be made.                                                                                 // 281
                                                                                                                   // 282
                var k, v, value = holder[key];                                                                     // 283
                if (value && typeof value === 'object') {                                                          // 284
                    for (k in value) {                                                                             // 285
                        if (Object.prototype.hasOwnProperty.call(value, k)) {                                      // 286
                            v = walk(value, k);                                                                    // 287
                            if (v !== undefined) {                                                                 // 288
                                value[k] = v;                                                                      // 289
                            } else {                                                                               // 290
                                delete value[k];                                                                   // 291
                            }                                                                                      // 292
                        }                                                                                          // 293
                    }                                                                                              // 294
                }                                                                                                  // 295
                return reviver.call(holder, key, value);                                                           // 296
            }                                                                                                      // 297
                                                                                                                   // 298
                                                                                                                   // 299
// Parsing happens in four stages. In the first stage, we replace certain                                          // 300
// Unicode characters with escape sequences. JavaScript handles many characters                                    // 301
// incorrectly, either silently deleting them, or treating them as line endings.                                   // 302
                                                                                                                   // 303
            text = String(text);                                                                                   // 304
            cx.lastIndex = 0;                                                                                      // 305
            if (cx.test(text)) {                                                                                   // 306
                text = text.replace(cx, function (a) {                                                             // 307
                    return '\\u' +                                                                                 // 308
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);                                         // 309
                });                                                                                                // 310
            }                                                                                                      // 311
                                                                                                                   // 312
// In the second stage, we run the text against regular expressions that look                                      // 313
// for non-JSON patterns. We are especially concerned with '()' and 'new'                                          // 314
// because they can cause invocation, and '=' because it can cause mutation.                                       // 315
// But just to be safe, we want to reject all unexpected forms.                                                    // 316
                                                                                                                   // 317
// We split the second stage into 4 regexp operations in order to work around                                      // 318
// crippling inefficiencies in IE's and Safari's regexp engines. First we                                          // 319
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we                                    // 320
// replace all simple value tokens with ']' characters. Third, we delete all                                       // 321
// open brackets that follow a colon or comma or that begin the text. Finally,                                     // 322
// we look to see that the remaining characters are only whitespace or ']' or                                      // 323
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.                                        // 324
                                                                                                                   // 325
            if (/^[\],:{}\s]*$/                                                                                    // 326
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')                                 // 327
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')          // 328
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {                                                   // 329
                                                                                                                   // 330
// In the third stage we use the eval function to compile the text into a                                          // 331
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity                                      // 332
// in JavaScript: it can begin a block or an object literal. We wrap the text                                      // 333
// in parens to eliminate the ambiguity.                                                                           // 334
                                                                                                                   // 335
                j = eval('(' + text + ')');                                                                        // 336
                                                                                                                   // 337
// In the optional fourth stage, we recursively walk the new structure, passing                                    // 338
// each name/value pair to a reviver function for possible transformation.                                         // 339
                                                                                                                   // 340
                return typeof reviver === 'function'                                                               // 341
                    ? walk({'': j}, '')                                                                            // 342
                    : j;                                                                                           // 343
            }                                                                                                      // 344
                                                                                                                   // 345
// If the text is not JSON parseable, then a SyntaxError is thrown.                                                // 346
                                                                                                                   // 347
            throw new SyntaxError('JSON.parse');                                                                   // 348
        };                                                                                                         // 349
    }                                                                                                              // 350
}());                                                                                                              // 351
(function() {                                                                                                      // 352
  var cacheBust, interval, lastHash, postMessage, re, receiveMessage;                                              // 353
                                                                                                                   // 354
  cacheBust = 1;                                                                                                   // 355
                                                                                                                   // 356
  interval = null;                                                                                                 // 357
                                                                                                                   // 358
  lastHash = null;                                                                                                 // 359
                                                                                                                   // 360
  re = /^#?\d+&/;                                                                                                  // 361
                                                                                                                   // 362
  postMessage = function(target, targetURL, message, targetOrigin) {                                               // 363
    if (targetOrigin == null) {                                                                                    // 364
      targetOrigin = targetURL;                                                                                    // 365
    }                                                                                                              // 366
    message = (+(new Date)) + (cacheBust++) + '&' + message;                                                       // 367
    return target.location = targetURL.replace(/#.*$/, '') + '#' + message;                                        // 368
  };                                                                                                               // 369
                                                                                                                   // 370
  receiveMessage = function(callback, delay) {                                                                     // 371
    if (delay == null) {                                                                                           // 372
      delay = 100;                                                                                                 // 373
    }                                                                                                              // 374
    interval && clearInterval(interval);                                                                           // 375
    return interval = setInterval(function() {                                                                     // 376
      var hash;                                                                                                    // 377
      hash = window.location.hash;                                                                                 // 378
      if (hash !== lastHash && re.test(hash)) {                                                                    // 379
        window.location.hash = '';                                                                                 // 380
        lastHash = hash;                                                                                           // 381
        return callback({                                                                                          // 382
          data: hash.replace(re, '')                                                                               // 383
        });                                                                                                        // 384
      }                                                                                                            // 385
    }, delay);                                                                                                     // 386
  };                                                                                                               // 387
                                                                                                                   // 388
  StripeCheckout.message = {                                                                                       // 389
    postMessage: postMessage,                                                                                      // 390
    receiveMessage: receiveMessage                                                                                 // 391
  };                                                                                                               // 392
                                                                                                                   // 393
}).call(this);                                                                                                     // 394
(function() {                                                                                                      // 395
  var $, $$, addClass, append, attr, bind, css, escape, except, hasAttr, hasClass, host, insertAfter, insertBefore, parents, remove, resolve, text, trigger, unbind,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;                                                                                            // 398
                                                                                                                   // 399
  $ = function(sel) {                                                                                              // 400
    return document.querySelectorAll(sel);                                                                         // 401
  };                                                                                                               // 402
                                                                                                                   // 403
  $$ = function(cls) {                                                                                             // 404
    var el, reg, _i, _len, _ref, _results;                                                                         // 405
    if (typeof document.getElementsByClassName === 'function') {                                                   // 406
      return document.getElementsByClassName(cls);                                                                 // 407
    } else if (typeof document.querySelectorAll === 'function') {                                                  // 408
      return document.querySelectorAll("." + cls);                                                                 // 409
    } else {                                                                                                       // 410
      reg = new RegExp("(^|\\s)" + cls + "(\\s|$)");                                                               // 411
      _ref = document.getElementsByTagName('*');                                                                   // 412
      _results = [];                                                                                               // 413
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                          // 414
        el = _ref[_i];                                                                                             // 415
        if (reg.test(el.className)) {                                                                              // 416
          _results.push(el);                                                                                       // 417
        }                                                                                                          // 418
      }                                                                                                            // 419
      return _results;                                                                                             // 420
    }                                                                                                              // 421
  };                                                                                                               // 422
                                                                                                                   // 423
  attr = function(element, attr, value) {                                                                          // 424
    if (value != null) {                                                                                           // 425
      return element.setAttribute(attr, value);                                                                    // 426
    } else {                                                                                                       // 427
      return element.getAttribute(attr);                                                                           // 428
    }                                                                                                              // 429
  };                                                                                                               // 430
                                                                                                                   // 431
  hasAttr = function(element, attr) {                                                                              // 432
    var node;                                                                                                      // 433
    if (typeof element.hasAttribute === 'function') {                                                              // 434
      return element.hasAttribute(attr);                                                                           // 435
    } else {                                                                                                       // 436
      node = element.getAttributeNode(attr);                                                                       // 437
      return !!(node && (node.specified || node.nodeValue));                                                       // 438
    }                                                                                                              // 439
  };                                                                                                               // 440
                                                                                                                   // 441
  bind = function(element, name, callback) {                                                                       // 442
    if (element.addEventListener) {                                                                                // 443
      return element.addEventListener(name, callback, false);                                                      // 444
    } else {                                                                                                       // 445
      return element.attachEvent("on" + name, callback);                                                           // 446
    }                                                                                                              // 447
  };                                                                                                               // 448
                                                                                                                   // 449
  unbind = function(element, name, callback) {                                                                     // 450
    if (element.removeEventListener) {                                                                             // 451
      return element.removeEventListener(name, callback, false);                                                   // 452
    } else {                                                                                                       // 453
      return element.detachEvent("on" + name, callback);                                                           // 454
    }                                                                                                              // 455
  };                                                                                                               // 456
                                                                                                                   // 457
  trigger = function(element, name, data, bubble) {                                                                // 458
    if (data == null) {                                                                                            // 459
      data = {};                                                                                                   // 460
    }                                                                                                              // 461
    if (bubble == null) {                                                                                          // 462
      bubble = true;                                                                                               // 463
    }                                                                                                              // 464
    if (window.jQuery) {                                                                                           // 465
      return jQuery(element).trigger(name, data);                                                                  // 466
    }                                                                                                              // 467
  };                                                                                                               // 468
                                                                                                                   // 469
  addClass = function(element, name) {                                                                             // 470
    return element.className += ' ' + name;                                                                        // 471
  };                                                                                                               // 472
                                                                                                                   // 473
  hasClass = function(element, name) {                                                                             // 474
    return __indexOf.call(element.className.split(' '), name) >= 0;                                                // 475
  };                                                                                                               // 476
                                                                                                                   // 477
  css = function(element, css) {                                                                                   // 478
    return element.style.cssText += ';' + css;                                                                     // 479
  };                                                                                                               // 480
                                                                                                                   // 481
  insertBefore = function(element, child) {                                                                        // 482
    return element.parentNode.insertBefore(child, element);                                                        // 483
  };                                                                                                               // 484
                                                                                                                   // 485
  insertAfter = function(element, child) {                                                                         // 486
    return element.parentNode.insertBefore(child, element.nextSibling);                                            // 487
  };                                                                                                               // 488
                                                                                                                   // 489
  append = function(element, child) {                                                                              // 490
    return element.appendChild(child);                                                                             // 491
  };                                                                                                               // 492
                                                                                                                   // 493
  remove = function(element) {                                                                                     // 494
    var _ref;                                                                                                      // 495
    return (_ref = element.parentNode) != null ? _ref.removeChild(element) : void 0;                               // 496
  };                                                                                                               // 497
                                                                                                                   // 498
  parents = function(node) {                                                                                       // 499
    var ancestors;                                                                                                 // 500
    ancestors = [];                                                                                                // 501
    while ((node = node.parentNode) && node !== document && __indexOf.call(ancestors, node) < 0) {                 // 502
      ancestors.push(node);                                                                                        // 503
    }                                                                                                              // 504
    return ancestors;                                                                                              // 505
  };                                                                                                               // 506
                                                                                                                   // 507
  host = function(url) {                                                                                           // 508
    var parent, parser;                                                                                            // 509
    parent = document.createElement('div');                                                                        // 510
    parent.innerHTML = "<a href=\"" + (escape(url)) + "\">x</a>";                                                  // 511
    parser = parent.firstChild;                                                                                    // 512
    return "" + parser.protocol + "//" + parser.host;                                                              // 513
  };                                                                                                               // 514
                                                                                                                   // 515
  resolve = function(url) {                                                                                        // 516
    var parser;                                                                                                    // 517
    parser = document.createElement('a');                                                                          // 518
    parser.href = url;                                                                                             // 519
    return "" + parser.href;                                                                                       // 520
  };                                                                                                               // 521
                                                                                                                   // 522
  escape = function(value) {                                                                                       // 523
    return value && ('' + value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };                                                                                                               // 525
                                                                                                                   // 526
  text = function(element, value) {                                                                                // 527
    if ('innerText' in element) {                                                                                  // 528
      element.innerText = value;                                                                                   // 529
    } else {                                                                                                       // 530
      element.textContent = value;                                                                                 // 531
    }                                                                                                              // 532
    return value;                                                                                                  // 533
  };                                                                                                               // 534
                                                                                                                   // 535
  except = function() {                                                                                            // 536
    var k, keys, object, result, v;                                                                                // 537
    object = arguments[0], keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];                         // 538
    result = {};                                                                                                   // 539
    for (k in object) {                                                                                            // 540
      v = object[k];                                                                                               // 541
      if (__indexOf.call(keys, k) < 0) {                                                                           // 542
        result[k] = v;                                                                                             // 543
      }                                                                                                            // 544
    }                                                                                                              // 545
    return result;                                                                                                 // 546
  };                                                                                                               // 547
                                                                                                                   // 548
  StripeCheckout.Utils = {                                                                                         // 549
    $: $,                                                                                                          // 550
    $$: $$,                                                                                                        // 551
    attr: attr,                                                                                                    // 552
    hasAttr: hasAttr,                                                                                              // 553
    bind: bind,                                                                                                    // 554
    unbind: unbind,                                                                                                // 555
    trigger: trigger,                                                                                              // 556
    addClass: addClass,                                                                                            // 557
    hasClass: hasClass,                                                                                            // 558
    css: css,                                                                                                      // 559
    insertBefore: insertBefore,                                                                                    // 560
    insertAfter: insertAfter,                                                                                      // 561
    append: append,                                                                                                // 562
    remove: remove,                                                                                                // 563
    parents: parents,                                                                                              // 564
    host: host,                                                                                                    // 565
    resolve: resolve,                                                                                              // 566
    escape: escape,                                                                                                // 567
    text: text,                                                                                                    // 568
    except: except                                                                                                 // 569
  };                                                                                                               // 570
                                                                                                                   // 571
}).call(this);                                                                                                     // 572
(function() {                                                                                                      // 573
  var host,                                                                                                        // 574
    __slice = [].slice,                                                                                            // 575
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
                                                                                                                   // 577
  host = StripeCheckout.Utils.host;                                                                                // 578
                                                                                                                   // 579
  StripeCheckout.RPC = {                                                                                           // 580
    whitelist: ['frameReady', 'frameCallback'],                                                                    // 581
    getTarget: function() {                                                                                        // 582
      throw new Error('override getTarget');                                                                       // 583
    },                                                                                                             // 584
    getHost: function() {                                                                                          // 585
      throw new Error('override getHost');                                                                         // 586
    },                                                                                                             // 587
    rpcID: 0,                                                                                                      // 588
    invoke: function() {                                                                                           // 589
      var args, frame, id, message, method;                                                                        // 590
      frame = arguments[0], method = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : []; // 591
      id = ++this.rpcID;                                                                                           // 592
      if (typeof args[args.length - 1] === 'function') {                                                           // 593
        this.callbacks || (this.callbacks = {});                                                                   // 594
        this.callbacks[id] = args.pop();                                                                           // 595
      }                                                                                                            // 596
      message = JSON.stringify({                                                                                   // 597
        method: method,                                                                                            // 598
        args: args,                                                                                                // 599
        id: id                                                                                                     // 600
      });                                                                                                          // 601
      return frame.postMessage(message, this.getHost());                                                           // 602
    },                                                                                                             // 603
    invokeTarget: function() {                                                                                     // 604
      var args;                                                                                                    // 605
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                              // 606
      return this.invoke.apply(this, [this.getTarget()].concat(__slice.call(args)));                               // 607
    },                                                                                                             // 608
    message: function(e) {                                                                                         // 609
      var data, result, _name, _ref;                                                                               // 610
      if (host(e.origin) !== host(this.getHost())) {                                                               // 611
        return;                                                                                                    // 612
      }                                                                                                            // 613
      if (!e.source || e.source !== this.getTarget()) {                                                            // 614
        return;                                                                                                    // 615
      }                                                                                                            // 616
      data = JSON.parse(e.data);                                                                                   // 617
      if (_ref = data.method, __indexOf.call(this.whitelist, _ref) < 0) {                                          // 618
        throw new Error("Method not allowed: " + data.method);                                                     // 619
      }                                                                                                            // 620
      result = typeof this[_name = data.method] === "function" ? this[_name].apply(this, __slice.call(data.args).concat([e])) : void 0;
      if (data.method !== 'frameCallback') {                                                                       // 622
        return this.invoke(e.source, 'frameCallback', data.id, result);                                            // 623
      }                                                                                                            // 624
    },                                                                                                             // 625
    ready: function(fn) {                                                                                          // 626
      var callbacks, cb, _i, _len, _results;                                                                       // 627
      this.readyQueue || (this.readyQueue = []);                                                                   // 628
      this.readyStatus || (this.readyStatus = false);                                                              // 629
      if (typeof fn === 'function') {                                                                              // 630
        if (this.readyStatus) {                                                                                    // 631
          return fn();                                                                                             // 632
        } else {                                                                                                   // 633
          return this.readyQueue.push(fn);                                                                         // 634
        }                                                                                                          // 635
      } else {                                                                                                     // 636
        this.readyStatus = true;                                                                                   // 637
        callbacks = this.readyQueue.slice(0);                                                                      // 638
        _results = [];                                                                                             // 639
        for (_i = 0, _len = callbacks.length; _i < _len; _i++) {                                                   // 640
          cb = callbacks[_i];                                                                                      // 641
          _results.push(cb());                                                                                     // 642
        }                                                                                                          // 643
        return _results;                                                                                           // 644
      }                                                                                                            // 645
    },                                                                                                             // 646
    frameCallback: function(id, result) {                                                                          // 647
      var _base;                                                                                                   // 648
      if (!this.callbacks) {                                                                                       // 649
        return;                                                                                                    // 650
      }                                                                                                            // 651
      if (typeof (_base = this.callbacks)[id] === "function") {                                                    // 652
        _base[id](result);                                                                                         // 653
      }                                                                                                            // 654
      delete this.callbacks[id];                                                                                   // 655
      return true;                                                                                                 // 656
    },                                                                                                             // 657
    frameReady: function() {                                                                                       // 658
      this.ready();                                                                                                // 659
      return true;                                                                                                 // 660
    }                                                                                                              // 661
  };                                                                                                               // 662
                                                                                                                   // 663
}).call(this);                                                                                                     // 664
(function() {                                                                                                      // 665
  var $, $$, append, bind, css, host, remove, resolve, _ref,                                                       // 666
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };                            // 667
                                                                                                                   // 668
  _ref = StripeCheckout.Utils, $ = _ref.$, $$ = _ref.$$, bind = _ref.bind, css = _ref.css, append = _ref.append, remove = _ref.remove, host = _ref.host, resolve = _ref.resolve;
                                                                                                                   // 670
  StripeCheckout.App = (function() {                                                                               // 671
                                                                                                                   // 672
    App.load = function(options) {                                                                                 // 673
      return App.instance || (App.instance = new App(options));                                                    // 674
    };                                                                                                             // 675
                                                                                                                   // 676
    App.open = function(options) {                                                                                 // 677
      App.instance || (App.instance = new App);                                                                    // 678
      App.instance.open(options);                                                                                  // 679
      return App.instance;                                                                                         // 680
    };                                                                                                             // 681
                                                                                                                   // 682
    App.setHost = function(host) {                                                                                 // 683
      return App.prototype.defaults.host = host;                                                                   // 684
    };                                                                                                             // 685
                                                                                                                   // 686
    App.prototype.defaults = {                                                                                     // 687
      path: '/',                                                                                                   // 688
      fallbackPath: '/fallback.html',                                                                              // 689
      host: 'https://checkout.stripe.com',                                                                         // 690
      address: false,                                                                                              // 691
      amount: null,                                                                                                // 692
      name: null,                                                                                                  // 693
      description: null,                                                                                           // 694
      image: null,                                                                                                 // 695
      label: null,                                                                                                 // 696
      panelLabel: null,                                                                                            // 697
      currency: 'usd',                                                                                             // 698
      notrack: false                                                                                               // 699
    };                                                                                                             // 700
                                                                                                                   // 701
    function App(options) {                                                                                        // 702
      var _base;                                                                                                   // 703
      if (options == null) {                                                                                       // 704
        options = {};                                                                                              // 705
      }                                                                                                            // 706
      this.close = __bind(this.close, this);                                                                       // 707
                                                                                                                   // 708
      this.open = __bind(this.open, this);                                                                         // 709
                                                                                                                   // 710
      this.setOptions(options);                                                                                    // 711
      if (StripeCheckout.App.Fallback.isEnabled()) {                                                               // 712
        this.view = new StripeCheckout.App.Fallback(this.options);                                                 // 713
      } else if (StripeCheckout.App.Mobile.isEnabled()) {                                                          // 714
        this.view = new StripeCheckout.App.Mobile(this.options);                                                   // 715
      } else {                                                                                                     // 716
        this.view = new StripeCheckout.App.Overlay(this.options);                                                  // 717
      }                                                                                                            // 718
      if (typeof (_base = this.view).render === "function") {                                                      // 719
        _base.render();                                                                                            // 720
      }                                                                                                            // 721
    }                                                                                                              // 722
                                                                                                                   // 723
    App.prototype.open = function(options) {                                                                       // 724
      var _base;                                                                                                   // 725
      if (options == null) {                                                                                       // 726
        options = {};                                                                                              // 727
      }                                                                                                            // 728
      this.setOptions(options);                                                                                    // 729
      return typeof (_base = this.view).open === "function" ? _base.open() : void 0;                               // 730
    };                                                                                                             // 731
                                                                                                                   // 732
    App.prototype.close = function() {                                                                             // 733
      return this.view.close();                                                                                    // 734
    };                                                                                                             // 735
                                                                                                                   // 736
    App.prototype.setOptions = function(options) {                                                                 // 737
      var key, value, _base, _ref1, _ref2, _ref3;                                                                  // 738
      if (options == null) {                                                                                       // 739
        options = {};                                                                                              // 740
      }                                                                                                            // 741
      this.options || (this.options = {});                                                                         // 742
      _ref1 = this.defaults;                                                                                       // 743
      for (key in _ref1) {                                                                                         // 744
        value = _ref1[key];                                                                                        // 745
        if ((_ref2 = options[key]) == null) {                                                                      // 746
          options[key] = value;                                                                                    // 747
        }                                                                                                          // 748
      }                                                                                                            // 749
      for (key in options) {                                                                                       // 750
        value = options[key];                                                                                      // 751
        this.options[key] = value;                                                                                 // 752
      }                                                                                                            // 753
      if (this.options.image) {                                                                                    // 754
        this.options.image = resolve(this.options.image);                                                          // 755
      }                                                                                                            // 756
      if ((_ref3 = (_base = this.options).body) == null) {                                                         // 757
        _base.body = document.body;                                                                                // 758
      }                                                                                                            // 759
      this.options.url = document.URL;                                                                             // 760
      return this.options.referrer = document.referrer;                                                            // 761
    };                                                                                                             // 762
                                                                                                                   // 763
    return App;                                                                                                    // 764
                                                                                                                   // 765
  }).call(this);                                                                                                   // 766
                                                                                                                   // 767
}).call(this);                                                                                                     // 768
(function() {                                                                                                      // 769
  var except,                                                                                                      // 770
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };                            // 771
                                                                                                                   // 772
  except = StripeCheckout.Utils.except;                                                                            // 773
                                                                                                                   // 774
  StripeCheckout.App.Fallback = (function() {                                                                      // 775
                                                                                                                   // 776
    Fallback.isEnabled = function() {                                                                              // 777
      return !('postMessage' in window);                                                                           // 778
    };                                                                                                             // 779
                                                                                                                   // 780
    function Fallback(options) {                                                                                   // 781
      this.options = options != null ? options : {};                                                               // 782
      this.setToken = __bind(this.setToken, this);                                                                 // 783
                                                                                                                   // 784
    }                                                                                                              // 785
                                                                                                                   // 786
    Fallback.prototype.open = function() {                                                                         // 787
      var message, options, url,                                                                                   // 788
        _this = this;                                                                                              // 789
      url = this.options.host + this.options.fallbackPath;                                                         // 790
      options = except(this.options, 'body', 'script', 'document', 'token');                                       // 791
      message = JSON.stringify(options);                                                                           // 792
      this.frame = window.open(url, '_blank', 'width=400,height=400,location=yes,resizable=yes,scrollbars=yes');   // 793
      StripeCheckout.message.postMessage(this.frame, url, message);                                                // 794
      return StripeCheckout.message.receiveMessage(function(e) {                                                   // 795
        return _this.setToken(JSON.parse(e.data));                                                                 // 796
      });                                                                                                          // 797
    };                                                                                                             // 798
                                                                                                                   // 799
    Fallback.prototype.close = function() {                                                                        // 800
      return this.frame.close();                                                                                   // 801
    };                                                                                                             // 802
                                                                                                                   // 803
    Fallback.prototype.setToken = function(token) {                                                                // 804
      var _base;                                                                                                   // 805
      if (typeof (_base = this.options).token === "function") {                                                    // 806
        _base.token(token);                                                                                        // 807
      }                                                                                                            // 808
      this.close();                                                                                                // 809
      return true;                                                                                                 // 810
    };                                                                                                             // 811
                                                                                                                   // 812
    return Fallback;                                                                                               // 813
                                                                                                                   // 814
  })();                                                                                                            // 815
                                                                                                                   // 816
}).call(this);                                                                                                     // 817
(function() {                                                                                                      // 818
  var $, $$, append, bind, css, except, host, remove, resolve, _ref,                                               // 819
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },                            // 820
    __slice = [].slice;                                                                                            // 821
                                                                                                                   // 822
  _ref = StripeCheckout.Utils, $ = _ref.$, $$ = _ref.$$, bind = _ref.bind, css = _ref.css, append = _ref.append, remove = _ref.remove, host = _ref.host, resolve = _ref.resolve, except = _ref.except;
                                                                                                                   // 824
  StripeCheckout.App.Mobile = (function() {                                                                        // 825
                                                                                                                   // 826
    Mobile.include = function(module) {                                                                            // 827
      var key, value, _results;                                                                                    // 828
      _results = [];                                                                                               // 829
      for (key in module) {                                                                                        // 830
        value = module[key];                                                                                       // 831
        _results.push(this.prototype[key] = value);                                                                // 832
      }                                                                                                            // 833
      return _results;                                                                                             // 834
    };                                                                                                             // 835
                                                                                                                   // 836
    Mobile.include(StripeCheckout.RPC);                                                                            // 837
                                                                                                                   // 838
    Mobile.isEnabled = function() {                                                                                // 839
      return Mobile.isDebugEnabled() || Mobile.isMobileEnv();                                                      // 840
    };                                                                                                             // 841
                                                                                                                   // 842
    Mobile.isMobileEnv = function() {                                                                              // 843
      var ua;                                                                                                      // 844
      ua = window.navigator.userAgent;                                                                             // 845
      return /(Android|iPhone|iPad|CriOS)/i.test(ua);                                                              // 846
    };                                                                                                             // 847
                                                                                                                   // 848
    Mobile.isDebugEnabled = function() {                                                                           // 849
      return window.location.hash === '#_stripeMobile';                                                            // 850
    };                                                                                                             // 851
                                                                                                                   // 852
    function Mobile(options) {                                                                                     // 853
      var _this = this;                                                                                            // 854
      this.options = options != null ? options : {};                                                               // 855
      this.setToken = __bind(this.setToken, this);                                                                 // 856
                                                                                                                   // 857
      bind(window, 'message', function() {                                                                         // 858
        var args;                                                                                                  // 859
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                            // 860
        return _this.message.apply(_this, args);                                                                   // 861
      });                                                                                                          // 862
    }                                                                                                              // 863
                                                                                                                   // 864
    Mobile.prototype.open = function() {                                                                           // 865
      var _base,                                                                                                   // 866
        _this = this;                                                                                              // 867
      this.readyStatus = false;                                                                                    // 868
      this.ready(function() {                                                                                      // 869
        var options;                                                                                               // 870
        options = except(_this.options, 'body', 'script', 'document', 'token');                                    // 871
        return _this.invokeTarget('render', 'mobile', options);                                                    // 872
      });                                                                                                          // 873
      this.frame = window.open(this.options.host + this.options.path);                                             // 874
      if (!this.frame) {                                                                                           // 875
        return alert('Please disable your popup blocker.');                                                        // 876
      } else {                                                                                                     // 877
        return typeof (_base = this.options).opened === "function" ? _base.opened() : void 0;                      // 878
      }                                                                                                            // 879
    };                                                                                                             // 880
                                                                                                                   // 881
    Mobile.prototype.close = function() {                                                                          // 882
      return window.focus();                                                                                       // 883
    };                                                                                                             // 884
                                                                                                                   // 885
    Mobile.prototype.getTarget = function() {                                                                      // 886
      return this.frame;                                                                                           // 887
    };                                                                                                             // 888
                                                                                                                   // 889
    Mobile.prototype.getHost = function() {                                                                        // 890
      return this.options.host;                                                                                    // 891
    };                                                                                                             // 892
                                                                                                                   // 893
    Mobile.prototype.whitelist = ['frameReady', 'frameCallback', 'setToken'];                                      // 894
                                                                                                                   // 895
    Mobile.prototype.setToken = function(token) {                                                                  // 896
      var _base;                                                                                                   // 897
      if (typeof (_base = this.options).token === "function") {                                                    // 898
        _base.token(token);                                                                                        // 899
      }                                                                                                            // 900
      this.close();                                                                                                // 901
      return true;                                                                                                 // 902
    };                                                                                                             // 903
                                                                                                                   // 904
    return Mobile;                                                                                                 // 905
                                                                                                                   // 906
  }).call(this);                                                                                                   // 907
                                                                                                                   // 908
}).call(this);                                                                                                     // 909
(function() {                                                                                                      // 910
  var $, $$, append, bind, css, except, host, remove, resolve, _ref,                                               // 911
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },                            // 912
    __slice = [].slice;                                                                                            // 913
                                                                                                                   // 914
  _ref = StripeCheckout.Utils, $ = _ref.$, $$ = _ref.$$, bind = _ref.bind, css = _ref.css, append = _ref.append, remove = _ref.remove, host = _ref.host, resolve = _ref.resolve, except = _ref.except;
                                                                                                                   // 916
  StripeCheckout.App.Overlay = (function() {                                                                       // 917
                                                                                                                   // 918
    Overlay.include = function(module) {                                                                           // 919
      var key, value, _results;                                                                                    // 920
      _results = [];                                                                                               // 921
      for (key in module) {                                                                                        // 922
        value = module[key];                                                                                       // 923
        _results.push(this.prototype[key] = value);                                                                // 924
      }                                                                                                            // 925
      return _results;                                                                                             // 926
    };                                                                                                             // 927
                                                                                                                   // 928
    Overlay.include(StripeCheckout.RPC);                                                                           // 929
                                                                                                                   // 930
    Overlay.prototype.iframeCSS = 'background: transparent;\nborder: 0px none transparent;\noverflow: hidden;\nvisibility: hidden;\nmargin: 0;\npadding: 0;\n-webkit-tap-highlight-color: transparent;\n-webkit-touch-callout: none;';
                                                                                                                   // 932
    Overlay.prototype.css = 'position: fixed;\nleft: 0;\ntop: 0;\nwidth: 100%;\nheight: 100%;\nz-index: 9999;\ndisplay: none;';
                                                                                                                   // 934
    function Overlay(options) {                                                                                    // 935
      var _this = this;                                                                                            // 936
      this.options = options != null ? options : {};                                                               // 937
      this.toggleTabIndex = __bind(this.toggleTabIndex, this);                                                     // 938
                                                                                                                   // 939
      this.renderFrame = __bind(this.renderFrame, this);                                                           // 940
                                                                                                                   // 941
      this.closed = __bind(this.closed, this);                                                                     // 942
                                                                                                                   // 943
      this.setToken = __bind(this.setToken, this);                                                                 // 944
                                                                                                                   // 945
      this.overlayClosed = __bind(this.overlayClosed, this);                                                       // 946
                                                                                                                   // 947
      this.getHost = __bind(this.getHost, this);                                                                   // 948
                                                                                                                   // 949
      this.getTarget = __bind(this.getTarget, this);                                                               // 950
                                                                                                                   // 951
      this.close = __bind(this.close, this);                                                                       // 952
                                                                                                                   // 953
      this.open = __bind(this.open, this);                                                                         // 954
                                                                                                                   // 955
      this.render = __bind(this.render, this);                                                                     // 956
                                                                                                                   // 957
      bind(window, 'message', function() {                                                                         // 958
        var args;                                                                                                  // 959
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                            // 960
        return _this.message.apply(_this, args);                                                                   // 961
      });                                                                                                          // 962
    }                                                                                                              // 963
                                                                                                                   // 964
    Overlay.prototype.render = function() {                                                                        // 965
      if (this.frame) {                                                                                            // 966
        remove(this.frame);                                                                                        // 967
      }                                                                                                            // 968
      this.frame = this.renderFrame();                                                                             // 969
      this.frame.className = 'stripe-app';                                                                         // 970
      css(this.frame, this.css);                                                                                   // 971
      if (this.options.body) {                                                                                     // 972
        return append(document.body, this.frame);                                                                  // 973
      }                                                                                                            // 974
    };                                                                                                             // 975
                                                                                                                   // 976
    Overlay.prototype.open = function() {                                                                          // 977
      var _base,                                                                                                   // 978
        _this = this;                                                                                              // 979
      this.ready(function() {                                                                                      // 980
        var options;                                                                                               // 981
        options = except(_this.options, 'body', 'script', 'document', 'token');                                    // 982
        return _this.invokeTarget('render', 'overlay', options);                                                   // 983
      });                                                                                                          // 984
      this.frame.style.display = 'block';                                                                          // 985
      this.ready(function() {                                                                                      // 986
        return _this.invokeTarget('overlayOpen');                                                                  // 987
      });                                                                                                          // 988
      this.toggleTabIndex(false);                                                                                  // 989
      return typeof (_base = this.options).opened === "function" ? _base.opened() : void 0;                        // 990
    };                                                                                                             // 991
                                                                                                                   // 992
    Overlay.prototype.close = function() {                                                                         // 993
      var _this = this;                                                                                            // 994
      return this.ready(function() {                                                                               // 995
        return _this.invokeTarget('close');                                                                        // 996
      });                                                                                                          // 997
    };                                                                                                             // 998
                                                                                                                   // 999
    Overlay.prototype.getTarget = function() {                                                                     // 1000
      var _ref1;                                                                                                   // 1001
      return (_ref1 = this.frame) != null ? _ref1.contentWindow : void 0;                                          // 1002
    };                                                                                                             // 1003
                                                                                                                   // 1004
    Overlay.prototype.getHost = function() {                                                                       // 1005
      return this.options.host;                                                                                    // 1006
    };                                                                                                             // 1007
                                                                                                                   // 1008
    Overlay.prototype.whitelist = ['frameReady', 'frameCallback', 'overlayClosed', 'setToken'];                    // 1009
                                                                                                                   // 1010
    Overlay.prototype.overlayClosed = function() {                                                                 // 1011
      this.closed();                                                                                               // 1012
      return true;                                                                                                 // 1013
    };                                                                                                             // 1014
                                                                                                                   // 1015
    Overlay.prototype.setToken = function(token) {                                                                 // 1016
      var _base;                                                                                                   // 1017
      if (typeof (_base = this.options).token === "function") {                                                    // 1018
        _base.token(token);                                                                                        // 1019
      }                                                                                                            // 1020
      this.close();                                                                                                // 1021
      return true;                                                                                                 // 1022
    };                                                                                                             // 1023
                                                                                                                   // 1024
    Overlay.prototype.closed = function() {                                                                        // 1025
      var _base;                                                                                                   // 1026
      this.frame.style.display = 'none';                                                                           // 1027
      this.toggleTabIndex(true);                                                                                   // 1028
      return typeof (_base = this.options).closed === "function" ? _base.closed() : void 0;                        // 1029
    };                                                                                                             // 1030
                                                                                                                   // 1031
    Overlay.prototype.renderFrame = function() {                                                                   // 1032
      var iframe,                                                                                                  // 1033
        _this = this;                                                                                              // 1034
      iframe = document.createElement('iframe');                                                                   // 1035
      iframe.setAttribute('frameBorder', '0');                                                                     // 1036
      iframe.setAttribute('allowtransparency', 'true');                                                            // 1037
      iframe.style.cssText = this.iframeCSS;                                                                       // 1038
      bind(iframe, 'load', function() {                                                                            // 1039
        return iframe.style.visibility = 'visible';                                                                // 1040
      });                                                                                                          // 1041
      iframe.src = this.options.host + this.options.path;                                                          // 1042
      return iframe;                                                                                               // 1043
    };                                                                                                             // 1044
                                                                                                                   // 1045
    Overlay.prototype.toggleTabIndex = function(enabled) {                                                         // 1046
      var element, elements, index, _i, _len, _results;                                                            // 1047
      elements = $('button, input, select, textarea');                                                             // 1048
      _results = [];                                                                                               // 1049
      for (_i = 0, _len = elements.length; _i < _len; _i++) {                                                      // 1050
        element = elements[_i];                                                                                    // 1051
        if (enabled) {                                                                                             // 1052
          index = element.getAttribute('data-tabindex');                                                           // 1053
          element.tabIndex = index;                                                                                // 1054
          _results.push(element.removeAttribute('data-tabindex'));                                                 // 1055
        } else {                                                                                                   // 1056
          index = element.tabIndex;                                                                                // 1057
          element.setAttribute('data-tabindex', index);                                                            // 1058
          _results.push(element.setAttribute('tabindex', -1));                                                     // 1059
        }                                                                                                          // 1060
      }                                                                                                            // 1061
      return _results;                                                                                             // 1062
    };                                                                                                             // 1063
                                                                                                                   // 1064
    return Overlay;                                                                                                // 1065
                                                                                                                   // 1066
  })();                                                                                                            // 1067
                                                                                                                   // 1068
}).call(this);                                                                                                     // 1069
(function() {                                                                                                      // 1070
  var App, append, attr, bind, hasAttr, host, insertAfter, parents, remove, text, trigger, unbind, _ref,           // 1071
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };                            // 1072
                                                                                                                   // 1073
  _ref = StripeCheckout.Utils, bind = _ref.bind, unbind = _ref.unbind, trigger = _ref.trigger, append = _ref.append, text = _ref.text, parents = _ref.parents, host = _ref.host, remove = _ref.remove, insertAfter = _ref.insertAfter, attr = _ref.attr, hasAttr = _ref.hasAttr;
                                                                                                                   // 1075
  App = StripeCheckout.App;                                                                                        // 1076
                                                                                                                   // 1077
  StripeCheckout.Button = (function() {                                                                            // 1078
                                                                                                                   // 1079
    Button.prototype.defaults = {                                                                                  // 1080
      label: 'Pay with Card',                                                                                      // 1081
      host: 'https://button.stripe.com',                                                                           // 1082
      cssPath: '/assets/inner/button.css',                                                                         // 1083
      tokenName: 'stripeToken'                                                                                     // 1084
    };                                                                                                             // 1085
                                                                                                                   // 1086
    function Button(options) {                                                                                     // 1087
      var _base;                                                                                                   // 1088
      if (options == null) {                                                                                       // 1089
        options = {};                                                                                              // 1090
      }                                                                                                            // 1091
      this.setOptions = __bind(this.setOptions, this);                                                             // 1092
                                                                                                                   // 1093
      this.parentHead = __bind(this.parentHead, this);                                                             // 1094
                                                                                                                   // 1095
      this.parentForm = __bind(this.parentForm, this);                                                             // 1096
                                                                                                                   // 1097
      this.token = __bind(this.token, this);                                                                       // 1098
                                                                                                                   // 1099
      this.open = __bind(this.open, this);                                                                         // 1100
                                                                                                                   // 1101
      this.submit = __bind(this.submit, this);                                                                     // 1102
                                                                                                                   // 1103
      this.append = __bind(this.append, this);                                                                     // 1104
                                                                                                                   // 1105
      this.render = __bind(this.render, this);                                                                     // 1106
                                                                                                                   // 1107
      this.setOptions(options);                                                                                    // 1108
      (_base = this.options).token || (_base.token = this.token);                                                  // 1109
      this.$el = document.createElement('button');                                                                 // 1110
      this.$el.setAttribute('type', 'submit');                                                                     // 1111
      this.$el.className = 'stripe-button-el';                                                                     // 1112
      bind(this.$el, 'click', this.submit);                                                                        // 1113
      bind(this.$el, 'touchstart', function() {});                                                                 // 1114
      this.render();                                                                                               // 1115
    }                                                                                                              // 1116
                                                                                                                   // 1117
    Button.prototype.render = function() {                                                                         // 1118
      this.$el.innerHTML = '';                                                                                     // 1119
      this.$span = document.createElement('span');                                                                 // 1120
      text(this.$span, this.options.label);                                                                        // 1121
      if (!this.options.nostyle) {                                                                                 // 1122
        this.$el.style.visibility = 'hidden';                                                                      // 1123
        this.$span.style.display = 'block';                                                                        // 1124
        this.$span.style.minHeight = '30px';                                                                       // 1125
      }                                                                                                            // 1126
      this.$style = document.createElement('link');                                                                // 1127
      this.$style.setAttribute('type', 'text/css');                                                                // 1128
      this.$style.setAttribute('rel', 'stylesheet');                                                               // 1129
      this.$style.setAttribute('href', this.options.host + this.options.cssPath);                                  // 1130
      return append(this.$el, this.$span);                                                                         // 1131
    };                                                                                                             // 1132
                                                                                                                   // 1133
    Button.prototype.append = function() {                                                                         // 1134
      var head,                                                                                                    // 1135
        _this = this;                                                                                              // 1136
      if (this.options.script) {                                                                                   // 1137
        insertAfter(this.options.script, this.$el);                                                                // 1138
      }                                                                                                            // 1139
      if (!this.options.nostyle) {                                                                                 // 1140
        head = this.parentHead();                                                                                  // 1141
        if (head) {                                                                                                // 1142
          append(head, this.$style);                                                                               // 1143
        }                                                                                                          // 1144
      }                                                                                                            // 1145
      if (this.$form = this.parentForm()) {                                                                        // 1146
        unbind(this.$form, 'submit', this.submit);                                                                 // 1147
        bind(this.$form, 'submit', this.submit);                                                                   // 1148
      }                                                                                                            // 1149
      if (!this.options.nostyle) {                                                                                 // 1150
        return setTimeout(function() {                                                                             // 1151
          return _this.$el.style.visibility = 'visible';                                                           // 1152
        }, 1000);                                                                                                  // 1153
      }                                                                                                            // 1154
    };                                                                                                             // 1155
                                                                                                                   // 1156
    Button.prototype.disable = function() {                                                                        // 1157
      return attr(this.$el, 'disabled', true);                                                                     // 1158
    };                                                                                                             // 1159
                                                                                                                   // 1160
    Button.prototype.enable = function() {                                                                         // 1161
      return this.$el.removeAttribute('disabled');                                                                 // 1162
    };                                                                                                             // 1163
                                                                                                                   // 1164
    Button.prototype.isDisabled = function() {                                                                     // 1165
      return hasAttr(this.$el, 'disabled');                                                                        // 1166
    };                                                                                                             // 1167
                                                                                                                   // 1168
    Button.prototype.submit = function(e) {                                                                        // 1169
      if (typeof e.preventDefault === "function") {                                                                // 1170
        e.preventDefault();                                                                                        // 1171
      }                                                                                                            // 1172
      if (!this.isDisabled()) {                                                                                    // 1173
        this.open();                                                                                               // 1174
      }                                                                                                            // 1175
      return false;                                                                                                // 1176
    };                                                                                                             // 1177
                                                                                                                   // 1178
    Button.prototype.open = function(options) {                                                                    // 1179
      if (options == null) {                                                                                       // 1180
        options = {};                                                                                              // 1181
      }                                                                                                            // 1182
      this.setOptions(options);                                                                                    // 1183
      return App.open(this.options);                                                                               // 1184
    };                                                                                                             // 1185
                                                                                                                   // 1186
    Button.prototype.token = function(value) {                                                                     // 1187
      var $input;                                                                                                  // 1188
      if (this.options.script) {                                                                                   // 1189
        trigger(this.options.script, 'token', value);                                                              // 1190
      }                                                                                                            // 1191
      if (this.$form) {                                                                                            // 1192
        $input = this.renderInput(value.id);                                                                       // 1193
        append(this.$form, $input);                                                                                // 1194
        this.$form.submit();                                                                                       // 1195
      }                                                                                                            // 1196
      return this.disable();                                                                                       // 1197
    };                                                                                                             // 1198
                                                                                                                   // 1199
    Button.prototype.renderInput = function(value) {                                                               // 1200
      var input;                                                                                                   // 1201
      input = document.createElement('input');                                                                     // 1202
      input.type = 'hidden';                                                                                       // 1203
      input.name = this.options.tokenName;                                                                         // 1204
      input.value = value;                                                                                         // 1205
      return input;                                                                                                // 1206
    };                                                                                                             // 1207
                                                                                                                   // 1208
    Button.prototype.parentForm = function() {                                                                     // 1209
      var el, elements, _i, _len, _ref1;                                                                           // 1210
      elements = parents(this.$el);                                                                                // 1211
      for (_i = 0, _len = elements.length; _i < _len; _i++) {                                                      // 1212
        el = elements[_i];                                                                                         // 1213
        if (((_ref1 = el.tagName) != null ? _ref1.toLowerCase() : void 0) === 'form') {                            // 1214
          return el;                                                                                               // 1215
        }                                                                                                          // 1216
      }                                                                                                            // 1217
      return null;                                                                                                 // 1218
    };                                                                                                             // 1219
                                                                                                                   // 1220
    Button.prototype.parentHead = function() {                                                                     // 1221
      var _ref1, _ref2;                                                                                            // 1222
      return ((_ref1 = this.options.document) != null ? _ref1.head : void 0) || ((_ref2 = this.options.document) != null ? _ref2.getElementsByTagName('head')[0] : void 0) || this.options.document.body;
    };                                                                                                             // 1224
                                                                                                                   // 1225
    Button.prototype.setOptions = function(options) {                                                              // 1226
      var elementOptions, key, value, _base, _ref1, _ref2;                                                         // 1227
      if (options == null) {                                                                                       // 1228
        options = {};                                                                                              // 1229
      }                                                                                                            // 1230
      this.options || (this.options = {});                                                                         // 1231
      if (options.script) {                                                                                        // 1232
        elementOptions = this.elementOptions(options.script);                                                      // 1233
        for (key in elementOptions) {                                                                              // 1234
          value = elementOptions[key];                                                                             // 1235
          this.options[key] = value;                                                                               // 1236
        }                                                                                                          // 1237
      }                                                                                                            // 1238
      for (key in options) {                                                                                       // 1239
        value = options[key];                                                                                      // 1240
        this.options[key] = value;                                                                                 // 1241
      }                                                                                                            // 1242
      _ref1 = this.defaults;                                                                                       // 1243
      for (key in _ref1) {                                                                                         // 1244
        value = _ref1[key];                                                                                        // 1245
        if ((_ref2 = (_base = this.options)[key]) == null) {                                                       // 1246
          _base[key] = value;                                                                                      // 1247
        }                                                                                                          // 1248
      }                                                                                                            // 1249
      this.options.fallback = this.isFallback();                                                                   // 1250
      if (this.options.fallback) {                                                                                 // 1251
        return this.options.nostyle = true;                                                                        // 1252
      }                                                                                                            // 1253
    };                                                                                                             // 1254
                                                                                                                   // 1255
    Button.prototype.elementOptions = function(el) {                                                               // 1256
      return {                                                                                                     // 1257
        key: attr(el, 'data-key'),                                                                                 // 1258
        host: host(el.src),                                                                                        // 1259
        amount: attr(el, 'data-amount'),                                                                           // 1260
        name: attr(el, 'data-name'),                                                                               // 1261
        description: attr(el, 'data-description'),                                                                 // 1262
        image: attr(el, 'data-image'),                                                                             // 1263
        label: attr(el, 'data-label'),                                                                             // 1264
        panelLabel: attr(el, 'data-panel-label'),                                                                  // 1265
        currency: attr(el, 'data-currency'),                                                                       // 1266
        address: hasAttr(el, 'data-address'),                                                                      // 1267
        notrack: hasAttr(el, 'data-notrack'),                                                                      // 1268
        nostyle: hasAttr(el, 'data-nostyle'),                                                                      // 1269
        document: el.ownerDocument,                                                                                // 1270
        body: el.ownerDocument.body                                                                                // 1271
      };                                                                                                           // 1272
    };                                                                                                             // 1273
                                                                                                                   // 1274
    Button.prototype.isFallback = function() {                                                                     // 1275
      return !('postMessage' in window);                                                                           // 1276
    };                                                                                                             // 1277
                                                                                                                   // 1278
    return Button;                                                                                                 // 1279
                                                                                                                   // 1280
  })();                                                                                                            // 1281
                                                                                                                   // 1282
}).call(this);                                                                                                     // 1283
(function() {                                                                                                      // 1284
  var $$, addClass, bind, hasClass, _ref;                                                                          // 1285
                                                                                                                   // 1286
  _ref = StripeCheckout.Utils, $$ = _ref.$$, hasClass = _ref.hasClass, addClass = _ref.addClass, bind = _ref.bind; // 1287
                                                                                                                   // 1288
  bind(window, 'load', function() {                                                                                // 1289
    return StripeCheckout.load();                                                                                  // 1290
  });                                                                                                              // 1291
                                                                                                                   // 1292
  (function() {                                                                                                    // 1293
    var button, el, element;                                                                                       // 1294
    element = $$('stripe-button');                                                                                 // 1295
    element = (function() {                                                                                        // 1296
      var _i, _len, _results;                                                                                      // 1297
      _results = [];                                                                                               // 1298
      for (_i = 0, _len = element.length; _i < _len; _i++) {                                                       // 1299
        el = element[_i];                                                                                          // 1300
        if (!hasClass(el, 'active')) {                                                                             // 1301
          _results.push(el);                                                                                       // 1302
        }                                                                                                          // 1303
      }                                                                                                            // 1304
      return _results;                                                                                             // 1305
    })();                                                                                                          // 1306
    element = element[element.length - 1];                                                                         // 1307
    if (!element) {                                                                                                // 1308
      return;                                                                                                      // 1309
    }                                                                                                              // 1310
    addClass(element, 'active');                                                                                   // 1311
    button = new StripeCheckout.Button({                                                                           // 1312
      script: element                                                                                              // 1313
    });                                                                                                            // 1314
    button.render();                                                                                               // 1315
    button.append();                                                                                               // 1316
    return StripeCheckout.setHost(button.options.host);                                                            // 1317
  })();                                                                                                            // 1318
                                                                                                                   // 1319
}).call(this);                                                                                                     // 1320
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
