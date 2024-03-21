var express = require('express');
var router = express.Router();
var pool = require('./pool')

router.post('/add_new_user', function (req, res, next) {
    // console.log(req.body)
    // console.log(req.file)
    pool.query("select * from userdata where mobile_number=?",
        [req.body.mobilenumber],
        function (error, result) {
            if (error) {
                // console.log("xxxx", error)
                res.status(500).json({ status:0, message: 'Server Error.....' })
            }
            else {
                if(result.length ==1)
                {
                    res.status(200).json({ status:1, message: 'User Exist..',data:result })
                }
                else{
                    pool.query("insert into userdata (name,mobile_number) value(?,?)", [req.body.name,req.body.mobilenumber],function(err,reslt){
                        if(err){
                            // console.log("xxxx", err)
                            res.status(200).json({ status:0, message: 'Server Error.....' })
                        }
                        else{
                            console.log("Result", reslt)
                            res.status(200).json({ status:2, message: 'User Added Successfully..',data:[{userid:reslt.insertId,mobilenumber:req.body.mobilenumber}] })
                        }
                    }    
                    )
                }     
            }
        })
});

router.get('/FetchAllStates', function (req, res, next) {
    pool.query("select * from states",
        function (error, result) {
            if (error) {
                console.log(error)
                res.status(500).json({ status: false, data: [] })
            }
            else {

                res.status(200).json({ status: true, data: result })
            }
        }

    )
})


router.post('/FetchAllPackages', function (req, res, next) {
    pool.query("select p.*,(select s.images from tourplanner.states S where s.sid=p.sid) as image from tourplanner.packages p where sid=?",[req.body.stateid],
        function (error, result) {
            if (error) {
                console.log(error)
                res.status(500).json({ status: false, data: [] })
            }
            else {

                res.status(200).json({ status: true, data: result })
            }
        }

    )
})


module.exports = router;