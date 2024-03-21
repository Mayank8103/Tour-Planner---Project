var express = require('express');
var router = express.Router();
var pool = require('./pool');
var upload = require('./multer')


/* GET users listing. */
router.get('/fetch_all_states', function(req, res, next) {
  pool.query("select * from states",function(error,result){
    if(error)
    {
        res.status(500).json({status:false,message:'Server Error'})
    }
    else{
        res.status(200).json({status:true,data:result})
    }
  })
});


router.post('/add_new_state',upload.single('image'), function(req, res, next) {
  pool.query("insert into tourplanner.states(statename, images) values(?,?)",[req.body.statename,req.file.originalname],function(error,result){
    if(error)
    {
        res.status(500).json({status:false,message:'Server Error'})
    }
    else{
        res.status(200).json({status:true,data:result})
    }
  })
});

router.get('/fetch_all_added_states', function(req, res, next) {
  pool.query("SELECT * FROM tourplanner.states",function(error,result){
    if(error)
    {
        res.status(500).json({status:false,message:'Server Error'})
    }
    else{
        res.status(200).json({status:true,data:result})
    }
  })
});

router.post('/edit_state_data', function(req, res, next) {
  pool.query("update states set statename=? where sid=?",[req.body.statename],function(error,result){
    if(error)
    {
        res.status(500).json({status:false,message:'Server Error'})
    }
    else{
        res.status(200).json({status:true,message:'State Updated Successfully'})
    }
  })
});
 

module.exports = router;
