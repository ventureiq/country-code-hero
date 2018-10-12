/**
 * Utilities for dealing with ISO 3166-1 style country codes
 * Underlying data from https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes
 * Example usage:
 *
 */
class IsoCountryCodes {
  /**
   * Create an country codes object
   * @param {Object} countryFile
   */
  constructor(countryFile = require("./iso_country_codes.json")) {
    this._map = countryFile;
  }

  /**
   * Search in full name, alpha-2 and alpha-3 for a country code with a fragment
   * @param {String} partial
   * @return {Array} of potential matches
   */
  search(partial) {
    let re = new RegExp(partial, "i");
    return this._map.filter(function(value) {
      return (
        re.exec(value.name) ||
        re.exec(value["alpha-2"]) ||
        re.exec(value["alpha-3"])
      );
    });
  }

  /**
   * Find an exact match for name in name, alpha-2, and alpha-3 fields
   * @param {String} name
   * @return {Array} of matches
   */
  find(name) {
    name = name.toLocaleUpperCase();
    return this._map.filter(function(value) {
      return (
        value.name === name ||
        value["alpha-2"] === name ||
        value["alpha-3"] === name
      );
    });
  }

  /**
   * Determine if match exists in alpha-3 field only
   * NOTE: Does not return the value
   * @param {String} alpha3
   * @return {Boolean} True if exists; else False
   */
  findAlpha3(alpha3) {
    alpha3 = alpha3.toLocaleUpperCase();
    return this._map.find(function(value) {
      return value["alpha-3"] === alpha3;
    });
  }

  /**
   * Determine if match exists in alpha-3 field only
   * NOTE: Does not return the value
   * @param {String} alpha2
   * @return {Boolean} True if exists; else False
   */
  findAlpha2(alpha2) {
    alpha2 = alpha2.toLocaleUpperCase();
    return this._map.find(function(value) {
      return value["alpha-2"] === alpha2;
    });
  }

  /**
   * Determine if match exists in alpha-3 field only
   * NOTE: Does not return the value
   * @param {String} tld
   * @return {Boolean} True if exists; else False
   */
  findTld(tld) {
    tld = tld.toLowerCase();
    return this._map.find(function(value) {
      return value["tld"].includes(tld);
    });
  }

  /**
   * Get array of all alpha-3 codes
   * @return {Array} of all alpha-3 codes
   */
  getAlpha3() {
    return this._map.map(function(value) {
      return value["alpha-3"];
    });
  }

  /**
   * Get array of all alpha-2 codes
   * @return {Array} of all alpha-2 codes
   */
  getAlpha2() {
    return this._map.map(function(value) {
      return value["alpha-2"];
    });
  }

  /**
   * Get array of all region names
   * E.g. Asia, Americas, etc.
   * @param {String} region
   * @return {Array} of all region names
   */
  getRegion(region) {
    return this._map.filter(function(value) {
      return value["region"] === region;
    });
  }

  /**
   * Return array of all alpha-2 country codes in EEA region
   * @return {Array} all alpha-2 country codes in EEA region
   */
  getEEA() {
    return [
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EU",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "HU",
      "IS",
      "IE",
      "IT",
      "LV",
      "LI",
      "LT",
      "LU",
      "MT",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "SK",
      "SI",
      "ES",
      "SE",
      "CH",
      "GB",
      "UK"
    ];
  }
}

module.exports = IsoCountryCodes;
