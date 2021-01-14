module.exports = {


  friendlyName: 'View busnewzealand page',


  description: 'Display the dashboard "busnewzealand" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/busnewzealand',
      description: 'Display the busnewzealand page for authenticated users.'
    },

  },


  fn: async function (req,res) {
    var busr= await Bus.find({}).where({country:'New Zealand'});
    console.log({articles:busr});
    console.log(busr);
    //return({articles:busr});
    return {
      articles: busr,
    };
    

  }


};
