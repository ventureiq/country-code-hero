# country-code-hero

Utilities for dealing with ISO 3166-1 style country codes
Underlying data from https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes
Example usage:
```
CountryCodes = require('country_code_hero')
let cc = new CountryCodes() // loads the default country file iso_country_codes.js
let results = cc.search('United')
// returns array of objects with name, alpha2 or alpha3 matching United
//  [ { name: 'Tanzania, United Republic of',
//     'alpha-2': 'TZ',
//     'alpha-3': 'TZA',
//     'country-code': '834',
//     'iso_3166-2': 'ISO 3166-2:TZ',
//     region: 'Africa',
//     'sub-region': 'Eastern Africa',
//     'region-code': '002',
//     'sub-region-code': '014' },
//   { name: 'United Arab Emirates',
//     'alpha-2': 'AE',
//     'alpha-3': 'ARE',
//     'country-code': '784',
//     'iso_3166-2': 'ISO 3166-2:AE',
//     region: 'Asia',
//     'sub-region': 'Western Asia',
//     'region-code': '142',
//     'sub-region-code': '145' },
//   { name: 'United States of America',
//     'alpha-2': 'US',
//     'alpha-3': 'USA',
//     'country-code': '840',
//     'iso_3166-2': 'ISO 3166-2:US',
//     region: 'Americas',
//     'sub-region': 'Northern America',
//     'region-code': '019',
//     'sub-region-code': '021' } ]
results = cc.find('nl') // exact match returns country info for Netherlands 
results = cc.findAlpha2('nl') // exact match returns country info for Netherlands 
results = cc.findAlpha3('nld') // exact match returns country info for Netherlands 
results = cc.getAlpha2() // get array of all alpha2 codes
results = cc.getAlpha3() // get array of all alpha3 codes
results = cc.getRegion() // get array of all region names 
```
