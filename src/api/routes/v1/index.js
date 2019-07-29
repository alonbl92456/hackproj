const express = require('express');
const router = express.Router();
const mongo = require('./mongo')

/**
 * GET v1/status
 */
router.get('/api', (req, res) => res.send('OK'));

router.get('/api/worker/:id', async (req, res) => {
    let data = await mongo.find('employees', {manager: req.params.id}, 'mongodb://localhost:27017/Hackaton')

    let workersKeys = []
    let dict = [];
    data.map( curr => {workersKeys.push({key: curr.key})})
    console.log(workersKeys);

    for(i = 0; i < workersKeys.length; i++) {
        let currdata = await mongo.find('feeling',{key: workersKeys[i].key}, 'mongodb://localhost:27017/Hackaton');
        dict.push(currdata)
    }
    /*dict = workersKeys.map( async (curr) => {
        console.log("curr")
        console.log(curr.key)
       let currFeeling = await mongo.find('feeling',{key: curr.key}, 'mongodb://localhost:27017/Hackaton');
       console.log("feeling " + currFeeling)
       return {[curr.key]:currFeeling}
    })*/

    /*
    let ids = [];
    data.map( curr => {ids.push({id: '"' + curr._id + '"'})})

    console.log(ids);   
    let feeling = await mongo.find('feelings', {$or: ids}, 'mongodb://localhost:27017/Hackaton') 
    console.log("feelings")
    console.log(feeling);*/
    res.send(dict)
    //res.send(data)
    
})

router.get('/api/feeling/:key', async (req, res) => {
    let data = await mongo.find('feeling', {key: req.params.key}, 'mongodb://localhost:27017/Hackaton')
    res.send(data)
})

router.get('/api/worker/detail/:key', async (req, res) => {
    let data = await mongo.find('employees', {key: req.params.key}, 'mongodb://localhost:27017/Hackaton')
    res.send(data)
})

module.exports = router;