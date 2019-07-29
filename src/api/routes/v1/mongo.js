//import  promises  from 'fs';
//import  resolve  from 'path';
//import  rejects  from 'assert';

let exportMongo = new Object();

const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectID
const mongo = require('mongodb').MongoClient;

exportMongo.insertmany = (documents, collection, url) =>  {
    return new Promise((resolve, reject) => {
        mongo.connect(url, (err, db) => {
            if(err != null) {
                reject(err);
            }
            else{
                db.collection(collection).insertMany(documents, (err, result) => {
                    if(err != null) {
                        reject(err);
                    }
                    else {
                        db.close();
                        if (err != null)
                            reject(err);
                            resolve();
                    }
                })
            }
        })
    })
} 

exportMongo.find = (collection, query, url) =>  {
    return new Promise((resolve, reject) => {
        mongo.connect(url, (err, db) => {
            if (err != null) {
                reject(err)
            }
            else {
                db.collection(collection).find(query).toArray((err, result) => {
                    db.close()
                    if(err != null) {
                        reject (err)
                    }
                    resolve(result);
                })
            }
        })
    })
}



module.exports = exportMongo;
