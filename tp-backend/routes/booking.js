var express = require('express');
var router = express.Router();
var pool = require('./pool');

/* GET users listing. */
router.post('/new_booking', function(req, res, next) {
    console.log(req.body)
    
    pool.query("insert into booking(fullname, emailaddress, mobilenumber, dateoftravel, travellcount, address) values(?,?,?,?,?,?)",
    [req.body.fullname,req.body.emailaddress,req.body.mobilenumber,req.body.dateoftravel,req.body.travelcount,req.body.address],
    function(error,result){
      if(error)
      {   
          res.status(500).json({status:false,message:'Server Error'})
      }
      else{
          res.status(200).json({status:true,message:'Booking Details Submitted Successfully'})
      }
    })
  });

module.exports = router;
