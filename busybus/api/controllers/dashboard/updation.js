/**
 * Module dependencies
 */

// ...


/**
 * dashboard/updation.js
 *
 * Updation dashboard.
 */
module.exports = async function updation(req, res) {
  
  var userid = req.session.userId;
  var num1 = await Ticket.find({busno}).where({user:userid});
  var num2 = await Reservation.find({no_of_seats}).where({user:userid});
  var num3 = await Bus.find({no_of_seats}).where({busno:num1});
  var num4 = num3 -num2;
  var num5 = await Bus.updateOne({busno:num1}).set({no_of_seats:num4}); 

};
