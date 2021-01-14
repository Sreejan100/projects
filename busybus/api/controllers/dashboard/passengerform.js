module.exports = {


  friendlyName: 'Passengerform',


  description: 'Passengerform dashboard.',


  inputs: {
        pnrno:{
          type:'number',
          required:true,
          unique:true
        },
        sex:{
          type:'string',
          required:true
        },
        ppno:{
          type:'number',
          required:true
        },
        age:{
          type:'number',
          required:true
        },
        name:{
          type:'string',
          required:true
        },
        ticket_no:{
          type:'number',
          required:true,
          unique:true
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
    var newPassengerRecord = await Passenger.create(_.extend({
      pnrno:inputs.pnrno,
      sex:inputs.sex,
      ppno:inputs.ppno,
      age:inputs.age,
      name:inputs.name,
      ticket_no:inputs.ticket_no,
      user:userid
  }));
   
    return;

  }


};
