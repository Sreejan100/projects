/**
 * BusController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
     
    update:async function(req,res){
        const userid = req.session.userId;

        var num1 = Bus.no_of_seats;
        var num2 = Reservation.find({no_of_seats}).where({user:userid});
        var num3 = num1-num2;
        var num4 = Ticket.find({busno}).where({user:userid});

        var updatedrecord = Bus.updateOne({user:userid}).set({no_of_seats:num3});
        
    }
       
}; 


