**FreeCodeCamp**- Information Security and Quality Assurance
------

1) SET NODE_ENV to `test` without quotes
2) Most logic will need done in `controllers/convertHandler.js` but do complete `routes/api.js`
3) You will add any security features to `server.js`
4) You will create all of the functional/unit tests in `tests/2_functional-tests.js` and `tests/1_unit-tests.js`


I will prevent the client from trying to guess(sniff) the MIME type. //TODO
I will prevent cross-site scripting (XSS) attacks. //TODO
I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit) //TODO
I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L) //TODO
I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg) //TODO
I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km) //TODO
If my unit of measurement is invalid, returned will be 'invalid unit'. //TODO
If my number is invalid, returned with will 'invalid number'. //TODO
If both are invalid, return will be 'invalid number and unit'. //TODO
I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1. //TODO
My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format '{initNum} {initial_Units} converts to {returnNum} {return_Units}' with the result rounded to 5 decimals in the string.  //TODO
All 16 unit tests are complete and passing. //TODO
All 5 functional tests are complete and passing. //TODO