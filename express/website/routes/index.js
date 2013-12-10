
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.home=function(req,res){
  res.render("home");
};
exports.search=function(req,res){
  var words=req.query.words;
  var result="sorry no result for  "+words;
  res.send({result:result});
};
