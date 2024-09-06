const express = require('express')
const { query, validationResult } = require('express-validator');
const app = express ();
const port = 3000;

const authenticate = (req, res, next) =>  {
  const apiKey = req.header['authorization']
  if(apiKey && apikey === 'your-api-key') {
    next();
  }
  else {
    res.status(401).json({message:'Unauthorized'})
  }
};

app.get('/add',[
  query('num1').isNumeric().withMessage('num1 must be a number')
  query('num2').isNumeric().withMessage('num2 must be a number')
  ],(req,res) => {
    const errors = validation(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()})
      
    }
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const sum = num1 + num2;
    
    res.json({sum});
    
  });
  
  app.use(authenticate);
  app.listen(port, => {
    console.log('Server running on https:localhost:${port}');
  })
