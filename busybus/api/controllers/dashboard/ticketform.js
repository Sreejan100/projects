module.exports = {


  friendlyName: 'Ticketform',


  description: 'Ticketform dashboard.',


  inputs: {
 
    name:{
      type:'string',
      required:true
   },
   source: {
      type:'string',
      required:true
    },
    destination:{
      type:'string',
     required:true
    },
    journey_date:{
      type:'string',
      required:true
    },
    departure_time:{
      type:'string',
      required:true
    },
    age:{
      type:'number',
      required:true
    },
    ticket_no:{
      type:'number',
      required:true
    },
    no_of_seats:{
      type:'number',
      required:true
    },
    busno:{
      type:'number',
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
    
    var newTicketRecord = await Ticket.create(_.extend({
      name:inputs.name,
      source: inputs.source,
      destination:inputs.destination,
      journey_date: inputs.journey_date,
      departure_time: inputs.departure_time,
      age:inputs.age,
      ticket_no:inputs.ticket_no,
      no_of_seats:inputs.no_of_seats,
      busno:inputs.busno,
      user:userid
    }));

    // var num1 = Bus.find({}).where({busno:inputs.busno});
    // var num2 = num1[9];
     var num3 = 100-inputs.no_of_seats;
     await Bus.updateOne({busno:inputs.busno,date:inputs.journey_date}).set({no_of_seats:num3});
    return;

  }


};
