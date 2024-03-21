var express = require('express');
var router = express.Router();
var pool = require('./pool');
var upload = require('./multer')

/* GET users listing. */
router.post('/add_new_packages',upload.single('logo'), function(req, res) {
  console.log(req.body)
  console.log(req.file)
  pool.query("insert into packages(sid, packagename, duration, description, price, logo) value(?,?,?,?,?,?)",[req.body.state,req.body.packagename,req.body.duration,req.body.description,req.body.price,req.file.originalname],function(error,result){
    if(error)
    {   
        res.status(500).json({status:false,message:'Server Error'})
    }
    else{
        res.status(200).json({status:true,message:'Package Registered Successfully'})
    }
  })
});


router.get('/fetch_all_packages', function(req, res, next) {
  pool.query("select P.*,(select S.statename from states S where S.sid=P.sid) as statename FROM packages P",function(error,result){
    if(error)
    {
        res.status(500).json({status:false,message:'Server Error'})
    }
    else{
        res.status(200).json({status:true,data:result})
    }
  })
});

router.post('/edit_package_data', function(req, res) {
  pool.query("update packages set sid=?, packagename=?, duration=?, description=?, price=? where pid=?",
  [req.body.state,req.body.packagename,req.body.duration,req.body.description,req.body.price,req.body.packageid],function(error,result){
    console.log(req.body)
    if(error)
    {   
        res.status(200).json({status:false,message:'Server Error'})
    }
    else{
        res.status(200).json({status:true,message:'Package Updated Successfully'})
    }
  })
});

router.post('/edit_package_logo',upload.single('logo'), function(req, res, next) {
  pool.query("update packages set logo=? where pid=?",[req.file.originalname,req.body.packageid],function(error,result){
    if(error)
    {   
        res.status(500).json({status:false,message:'Server Error'})
    }
    else{
        res.status(200).json({status:true,message:'Logo Updated'})
    }
  })
});

router.post('/delete_package_data', function(req, res) {
  pool.query("delete from packages where pid=?",[req.body.packageid],function(error,result){
    if(error)
    {   
        res.status(500).json({status:false,message:'Server Error'})
    }
    else{
        res.status(200).json({status:true,message:'Package Deleted Successfully'})
    }
  })
});

module.exports = router;
