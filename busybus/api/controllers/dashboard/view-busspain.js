module.exports = {


  friendlyName: 'View busspain page',


  description: 'Display the dashboard "busspain" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/busspain',
      description: 'Display the busspain page for authenticated users.'
    },

  },


  fn: async function (req,res) {
    var busr= await Bus.find({}).where({country:'Spain'});
    console.log({articles:busr});
    console.log(busr);
    //return({articles:busr});
    return {
      articles: busr,
    };

    

  }


};
