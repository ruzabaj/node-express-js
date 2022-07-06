const express=require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send({type:'GET'})
})
// add
router.post('/api', function(req,res){
    res.send({type:'POST'})
})
//update
router.put('/api/:id', function(req,res){
    res.send({type:'PUT'})
})
//delete

router.delete('/api/ninja/:id', function(res,req){
    res.send({type:'DELETE'})
})

module.exports= router;