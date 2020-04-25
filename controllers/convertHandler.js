/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getUnitIndex = function(input) {
    var result = /[a-z]/i.exec(input).index;
    console.log('unit index is '+result);  
    return result;
  };
  
  //this function gets unit from input
  this.getNum = function(input) {
    var result;
    var unitIndex = this.getUnitIndex(input);
    var numInput = input.slice(0, unitIndex);

    var splittedValue = numInput.split("/");
    var value = splittedValue[0];
    console.log('value is '+value);

    if (!value){
      console.log('no number input');
      return result; 
    }

    if (splittedValue.length>2){
      console.log('double or more fraction');      
      return result;
    }

    var decimator = splittedValue[1] || 1;

    if (splittedValue.length>2){
      console.log('double or more fraction');      
      return result;
    }
    
    result = parseFloat(value/decimator).toFixed(5);     
    
    console.log('number is '+result);   
    return result;   
  };
  
  //this function gets unit from input and transform it to lowercase and validates if allowed value
  this.getUnit = function(input) {
    var result;
    var unitIndex = this.getUnitIndex(input);
    var slicedUnit = input.slice(unitIndex).toLowerCase();
    var allowedUnits = ['gal','l','mi','km','lbs','kg'];
    if (allowedUnits.includes(slicedUnit)){
      var result = slicedUnit;
      console.log('unit is '+result);
      return result;
    } else {      
      return result;
    }
  };
  
  //this functions returns the number  
  this.convert = function(initNum, initUnit) {
 
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(initUnit=='mi'){
      result = parseFloat(initNum*miToKm).toFixed(5); 
      console.log('converted '+initNum+initUnit+' to '+result+' km');
      return result;
    } else if (initUnit=='km'){
      result = parseFloat(initNum / miToKm).toFixed(5); 
      console.log('converted '+initNum+initUnit+' to '+result+' mi');
      return result;
    } else if (initUnit=='lbs'){
      result = parseFloat(initNum * lbsToKg).toFixed(5); 
      console.log('converted '+initNum+initUnit+' to '+result+' kg');
      return result;
    } else if (initUnit=='kg'){
      result = parseFloat(initNum / lbsToKg).toFixed(5); 
       console.log('converted '+initNum+initUnit+' to '+result+' lbs');
      return result;
    } else if (initUnit=='l'){
      result = parseFloat(initNum / galToL).toFixed(5); 
      console.log('converted '+initNum+initUnit+' to '+result+' lbs');
      return result;
    } else if (initUnit=='gal'){
      result = parseFloat(initNum * galToL).toFixed(5); 
      console.log('converted '+initNum+initUnit+' to '+result+' l');
      return result;
    } else {
      console.log('error converting num')
      return result;
      
    }    
  };

  //this function returns the unit
  this.getReturnUnit = function(initUnit) {
    var result;
    if(initUnit==='mi'){
      result = 'km';
      console.log('converted '+initUnit+' to km');
      return result;
    } else if (initUnit=='lbs'){
      result = 'kg';
      console.log('converted '+initUnit+' to kg');
      return result;
    } else if (initUnit=='gal'){
      result = 'l';
      console.log('converted '+initUnit+' to l');
      return result;
    } else if (initUnit=='l'){
      result = 'gal';
      console.log('converted '+initUnit+' to gal');
      return result;
    } else if (initUnit=='km'){
      result = 'mi';
      console.log('converted '+initUnit+' to mi');
      return result;
    } else if (initUnit=='kg'){
      result = 'lbs';
      console.log('converted '+initUnit+' to lbs');
      return result;
    } else {
      console.log('error converting unit');
      return result;  
    } 

  };

  //this function converts a unit into spell out form l > liters
  this.spellOutUnit = function(unit) {
    var result;
    if(unit==='mi'){
      result = 'miles';
      console.log('converted '+unit+' to miles');
      return result;
    } else if (unit=='lbs'){
      result = 'pounds';
      console.log('converted '+unit+' to pounds');
      return result;
    } else if (unit=='l'){
      result = 'liters';
      console.log('converted '+unit+' to liters');
      return result;
    } else if (unit=='gal'){
      result = 'gallons';
      console.log('converted '+unit+' to gallons');
      return result;
    } else if (unit=='km'){
      result = 'kilometers';
      console.log('converted '+unit+' to kilometers');
      return result;
    } else if (unit=='kg'){
      result = 'kilograms';
      console.log('converted '+unit+' to kilograms');
      return result;
    } else {
      console.log('error spell out unit');
      return result;      
    } 
  
  };

  //string spelling out units in format {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.
 
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    var spellOutInitUnit = this.spellOutUnit(initUnit);
    var spellOutReturnUnit = this.spellOutUnit(returnUnit);
    if(!returnNum || !returnUnit) {return result}
   
    result = initNum+' '+spellOutInitUnit+' converts to '+returnNum+' '+spellOutReturnUnit;
    console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
