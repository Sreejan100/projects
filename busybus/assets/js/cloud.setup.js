/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},"ticketform":{"verb":"POST","url":"/api/v1/dashboard/ticketform","args":["emailAddress","source","destination","journey_date","departure_time","age","ticket_no","no_of_seats","busno"]},"reservation":{"verb":"POST","url":"/api/v1/dashboard/reservation","args":["pnrno","name","status","contactno","address","no_of_seats"]},"passengerform":{"verb":"POST","url":"/api/v1/dashboard/passengerform","args":["pnrno","sex","ppno","age","name","ticket_no"]},"cancellation":{"verb":"POST","url":"/api/v1/dashboard/cancellation","args":["pnrno","status","journey_date","no_of_seats","contactno","ticket_no","address"]},"updation":{"verb":"PUT","url":"/api/v1/dashboard/updation"}}
  /* eslint-enable */

});
