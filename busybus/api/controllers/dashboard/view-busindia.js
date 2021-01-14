module.exports = {

  friendlyName: 'View busindia page',


  description: 'Display the dashboard "busindia" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/busindia',
      description: 'Display the busindia page for authenticated users.'
    },

  },


  fn: async function (req,res) {
    var busr= await Bus.find({}).where({country:'India'});
    console.log({articles:busr});
    console.log(busr);
    //return({articles:busr});
    return {
      articles: busr,
    };

   

  }


};
