module.exports = function(app) {
  app.post ('/landing',(req,res)=>{
    res.send('Landing')
  });
  app.get ('/landing',(req,res)=>{
    res.send('Landing')
  });

};
