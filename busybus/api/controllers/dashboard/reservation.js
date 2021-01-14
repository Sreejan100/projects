module.exports = {


  friendlyName: 'Reservation',


  description: 'Reservation dashboard.',


  inputs: {
    pnrno:{
      type:'number',
      required:true
    },
    emailAddress:{
      type:'string',
      required:true
    },
    status:{
      type:'string',
      required:true
    },
    contactno:{
      type:'number',
      required:true
    },
    address:{
      type:'string',
      required:true
    },
  },


  exits: {
    success: {
      description: 'New ticket was created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, source,destination,journey_date,departure_time and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },
  },


  fn: async function (inputs) {
    const userid = this.req.session.userId;
    var newEmailAddress = inputs.emailAddress.toLowerCase();
    var newReservationRecord = await Reservation.create(_.extend({
        pnrno:inputs.pnrno,
        emailAddress: newEmailAddress,
        status:inputs.status,
        contactno:inputs.contactno,
        address:inputs.address,
        user:userid
    }));
    

   
    return;

  }


};
