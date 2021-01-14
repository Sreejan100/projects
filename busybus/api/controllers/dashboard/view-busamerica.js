module.exports = {


  friendlyName: 'View busamerica page',


  description: 'Display the dashboard "busamerica" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/busamerica',
      description: 'Display the busamerica page for authenticated users.'
    },

  },


  fn: async function (req,res) {
    var busr= await Bus.find({}).where({country:'America'});
    console.log({articles:busr});
    console.log(busr);
    //return({articles:busr});
    return {
      articles: busr,
    };

  }


};
