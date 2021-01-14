module.exports = {


  friendlyName: 'View busaustralia page',


  description: 'Display the dashboard "busaustralia" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/busaustralia',
      description: 'Display the busaustralia page for authenticated users.'
    },

  },


  fn: async function (req,res) {
    var busr= await Bus.find({}).where({country:'Australia'});
    console.log({articles:busr});
    console.log(busr);
    //return({articles:busr});
    return {
      articles: busr,
    };

    return {};

  }


};
