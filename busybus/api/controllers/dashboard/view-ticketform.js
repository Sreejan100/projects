module.exports = {


  friendlyName: 'View ticketform',


  description: 'Display "Ticketform" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/ticketform'
    },
    redirect: {
      description: 'The requesting user has booked his ticket',
      responseType: 'redirect'
    }

  },


  fn: async function () {
     
    
  
   
    return {};

  }


};
