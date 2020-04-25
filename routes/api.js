/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var { check, validationResult } = require('express-validator');
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){[
      check('input').trim().escape().notEmpty()
    ]      
      // validation error handling
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() })        
      }
    
      var input = req.query.input;

      var initNum = parseFloat(convertHandler.getNum(input));
      var initUnit = convertHandler.getUnit(input);

      if(!initNum && !initUnit){
        console.log('invalid number')
        return res.status(400).json({error: 'invalid number and unit'});
      }      
      if(!initNum){
        console.log('invalid number')
        return res.status(400).json({error: 'invalid number'});
      }
      if(!initUnit){
        console.log('invalid unit')
        return res.status(400).json({error: 'invalid unit'});
      }

      var returnNum = parseFloat(convertHandler.convert(initNum, initUnit));
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      //handle empty results for error handling o
      if(!returnNum || !returnUnit || !toString){
        console.log('catched error')
        res.status(500).send('An error occured');
      }

      var output = {
        "initNum": initNum,
        "initUnit": initUnit,
        "returnNum": returnNum,
        "returnUnit": returnUnit,
        "string": toString
      };      
      res.status(200).json(output);      
    });
    
};
