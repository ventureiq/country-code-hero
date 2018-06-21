'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const assert = chai.assert;

let IsoCountryCodes = require('../country_code_hero.js');
const CountryCodes = require('../iso_country_codes.json');

describe('IsoCountryCodes', () => {
  it('needs require resolved with first IsoCountryCodes new object', function (done) {
    let isoCC = new IsoCountryCodes();
    setTimeout(() => {
      assert.deepEqual(isoCC._map, CountryCodes);
      done();
    }, 0);
  });

  it('has 30counter in EEA', () => {
    let isoCC = new IsoCountryCodes();
    assert.isArray(isoCC.getEEA());
    assert.strictEqual(isoCC.getEEA().length, 34);
  });

  it('recognizes regions', () => {
    let isoCC = new IsoCountryCodes();
    assert.isArray(isoCC.getRegion('Europe'));
    assert.strictEqual(isoCC.getRegion('Europe').length, 51);
  });

  it('can display map of 2 letter country codes', () => {
    let isoCC = new IsoCountryCodes();
    let alpha2 = isoCC.getAlpha2();
    assert.isArray(alpha2);
    for (let code of alpha2) {
      assert.isString(code);
      assert.strictEqual(code.length, 2);
    }
  });

  it('can display map of 3 letter country codes', () => {
    let isoCC = new IsoCountryCodes();
    let alpha3 = isoCC.getAlpha3();
    assert.isArray(alpha3);
    for (let code of alpha3) {
      assert.isString(code);
      assert.strictEqual(code.length, 3);
    }
  });

  it('finds country by 2 letter country code', () => {
    let isoCC = new IsoCountryCodes();
    let nl = isoCC.findAlpha2('nl');
    assert.isObject(nl);
    assert.strictEqual(nl.name, 'Netherlands');
  });

  it('finds country by 3 letter country code', () => {
    let isoCC = new IsoCountryCodes();
    let nl = isoCC.findAlpha3('nld');
    assert.isObject(nl);
    assert.strictEqual(nl.name, 'Netherlands');
  });

  it('finds countries with exact match', () => {
    let isoCC = new IsoCountryCodes();
    let nl = isoCC.findAlpha3('nld');
    let find = isoCC.find('nld');
    assert.isArray(find);
    assert.include(find, nl);
  });

  it('finds countries with regexp', () => {
    let isoCC = new IsoCountryCodes();
    let nl = isoCC.findAlpha3('nld');
    let find = isoCC.search('nld');
    assert.isArray(find);
    assert.include(find, nl);
  });
   it('finds multiple countries', () => {
    let isoCC = new IsoCountryCodes();
    let find = isoCC.search('korea');
    assert.isArray(find);
    assert.lengthOf(find, 2, "Two Korea results found")
  });
    
});

