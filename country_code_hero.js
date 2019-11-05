import defaultCodes from './iso_country_codes';

/**
 * Utilities for dealing with ISO 3166-1 style country codes
 * Underlying data from https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes
 * Example usage:
 *
 */
class IsoCountryCodes {
  /**
   * Create an country codes object
   * @param {object[]} countryFile configuration for country codes
   */
  constructor(countryFile = defaultCodes) {
    this._map = countryFile;
  }

  /**
   * Search in full name, alpha-2 and alpha-3 for a country code with a fragment
   * @param {string} partial
   * @return {object[]} of potential matches
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
   * @param {string} name
   * @return {object[]} of matches
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
   * Return country object by ISO 3166-1 aplha-3 code
   * @param {string} alpha3
   * @return {object?}
   */
  findAlpha3(alpha3) {
    alpha3 = alpha3.toLocaleUpperCase();
    return this._map.find(function(value) {
      return value["alpha-3"] === alpha3;
    });
  }

  /**
   * Return country object by ISO 3166-1 aplha-2 code
   * @param {string} alpha2
   * @return {object?}
   */
  findAlpha2(alpha2) {
    alpha2 = alpha2.toLocaleUpperCase();
    return this._map.find(function(value) {
      return value["alpha-2"] === alpha2;
    });
  }

  /**
   * Return country object by tld (rfc1591)
   * @param {string} tld
   * @return {object?}
   */
  findTld(tld) {
    tld = tld.toLowerCase();
    return this._map.find(function(value) {
      return value["tld"].includes(tld);
    });
  }

  /**
   * Return all country objects that match based on tld (rfc1591),
   * since countries can share tlds, this method is necessary.
   * @param {string} tld
   * @return {object[]} array of matches or empty array
   */
  findAllTld(tld) {
    tld = tld.toLowerCase();
    return this._map.filter(function(value) {
      return value["tld"].includes(tld);
    });
  }

  /**
   * Get array of all alpha-3 codes
   * @return {string[]} of all alpha-3 codes
   */
  getAlpha3() {
    return this._map.map(function(value) {
      return value["alpha-3"];
    });
  }

  /**
   * Get array of all alpha-2 codes
   * @return {string[]} of all alpha-2 codes
   */
  getAlpha2() {
    return this._map.map(function(value) {
      return value["alpha-2"];
    });
  }

  /**
   * Get array of all region names
   * E.g. Asia, Americas, etc.
   * @param {string} region
   * @return {object[]} of all region names
   */
  getRegion(region) {
    return this._map.filter(function(value) {
      return value["region"] === region;
    });
  }

  /**
   * Return array of all alpha-2 country codes in EEA region
   * @return {string[]} all alpha-2 country codes in EEA region
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

export default IsoCountryCodes;
