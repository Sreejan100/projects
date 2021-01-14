module.exports = {


  friendlyName: 'Cancellation',


  description: 'Cancellation dashboard.',


  inputs: {
       pnrno:{
         type:'number',
         required:true,
         unique:true
       },
       status:{
         type:'string',
         required:true
       },
       journey_date :{
         type:'string',
         required:true
       },
       no_of_seats:{
         type:'number',
         required:true
       },
       contactno:{
         type:'number',
         required:true
       },
       ticket_no:{
         type:'number',
         required:true
       },
       address:{
         type:'string',
         required:true
       }
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
    var newCancellationRecord = await Cancellation.create(_.extend({
      pnrno:inputs.pnrno,
      status:inputs.status,
      journey_date:inputs.journey_date,
      no_of_seats:inputs.no_of_seats,
      contactno:inputs.contactno,
      ticket_no:inputs.ticket_no,
      address:inputs.address,
      user:2
  }));
  
  await Reservation.destroyOne({pnrno:inputs.pnrno});

  await Ticket.destroyOne({ticket_no:inputs.ticket_no});
  
  await Passenger.destroyOne({pnrno:inputs.pnrno});





    return;

  }


};
