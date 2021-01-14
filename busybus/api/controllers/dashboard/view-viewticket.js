module.exports = {


  friendlyName: 'View viewticket page',


  description: 'Display the dashboard "viewticket" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/viewticket',
      description: 'Display the viewticket page for authenticated users.'
    },

  },


  fn: async function (req,res) {
    const userid = this.req.session.userId;
    //  let reserverecord = await Reservation.find({}).where({pnrno:1});
    //  console.log(reserverecord);
    let ticketrecord = await Ticket.find({}).where({user:userid});
    //let mergerd = await Object.assign(reserverecord,ticketrecord);
    // let mergerd = await Passenger.find({}).populate('pnrno');//.populate('ticket_no');
    // console.log(mergerd);
     
    return {
       articles:ticketrecord,
    };

  }
};
