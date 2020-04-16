var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = {movie: "The Banker", year: "2020", rating: 8 };
  var newvalues = { $set: {movie: "The invisible man", year: "2016", rating: 5.2} };
  dbo.collection("myMovies").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;

    dbo.collection("myMovies").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      })
    
  });
})


