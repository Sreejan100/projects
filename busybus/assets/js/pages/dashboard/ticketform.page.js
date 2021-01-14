parasails.registerPage('ticketform', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    // Form data
    formData: { /* … */ },

    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: { /* … */ },

    // Syncing / loading state
    syncing: false,

    // Server error state
    cloudError: '',

    // Success state when form has been submitted
    cloudSuccess: false,
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
 
    submittedForm: async function() {
      
      // Show the success message.
      this.cloudSuccess = true;
      this.syncing = true;
      //console.log("Rishabh");
    },

    handleParsingForm: function() {
      // Clear out any pre-existing error messages.
      this.formErrors = {};

      var argins = this.formData;

      //Validate name:
      if(!argins.name){
        this.formErrors.name = true;
      }
      // Validate source:
      if(!argins.source) {
        this.formErrors.source = true;
      }

      // Validate destination:
     if(!argins.destination){
       this.formErrors.destination=true;
     }
      // Validate journey_date:
      if(!argins.journey_date){
        this.formErrors.journey_date=true;
      }
      // Validate departure_time:
      if(!argins.departure_time){
        this.formErrors.departure_time=true;
      }
      //Validate age:
      if(!argins.age){
        this.formErrors.age=true;
      }
      //Validate ticket_no:
      if(!argins.ticket_no){
        this.formErrors.ticket_no=true;
      }
      //Validate no_of_seats
      if(!argins.no_of_seats){
        this.formErrors.no_of_seats=true;
      }
      //Validate busno:
      if(!argins.busno){
        this.formErrors.busno=true;
      }
      // Validate ToS agreement:
      if(!argins.agreed) {
        this.formErrors.agreed = true;
      }

      // If there were any issues, they've already now been communicated to the user,
      // so simply return undefined.  (This signifies that the submission should be
      // cancelled.)
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      return argins;
    },

  }
});
