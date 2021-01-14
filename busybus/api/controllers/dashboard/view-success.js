module.exports = {


  friendlyName: 'View success page',


  description: 'Display the dashboard "success" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/success',
      description: 'Display the success page for authenticated users.'
    },

  },


  fn: async function () {

    return {};

  }


};
