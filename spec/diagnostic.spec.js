'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai');
const expect = chai.expect;

const diagnostic = require('../lib/diagnostic.js');

describe('zero or more arguments', () => {

  describe('sum', () => {

    it('returns 0 when called without arguments', () => {
      expect(diagnostic.sum()).to.equal(0);
    });

    it('returns the argument when called with just one', () => {
      expect(diagnostic.sum(42)).to.equal(42);
    });

    it('returns the sum of all the arguments', () => {
      expect(diagnostic.sum(-1, -2, -3, -4, -5)).to.equal(-15);
    });

  });

  describe('min', () => {

    it('returns undefined when called without arguments', () => {
      expect(diagnostic.min()).to.be.undefined;
    });

    it('returns the argument when called with just one', () => {
      expect(diagnostic.min(42)).to.equal(42);
    });

    it('returns the minimum of all the arguments', () => {
      expect(diagnostic.min(-1, -2, -3, -4, -5)).to.equal(-5);
    });

  });

});

describe('array creation', () => {

  describe('with default value', () => {

    it('returns the correct array', () => {
      expect(diagnostic.newArray(3, 0)).to.deep.equal([0, 0, 0]);
    });

  });

  describe('with default values function', () => {

    it('returns the correct array', () => {
      let length = 3;
      let defaultsFunction = function defaultsFunction(index) {
        return length - index;
      };

      expect(diagnostic.newArray(length, defaultsFunction)).to.deep.equal([3, 2, 1]);
    });

  });

});

describe('method addition', () => {

  describe('with existing object', () => {

    let obj = {};
    let propertyName = 'method';
    let method = function () {};

    let returnedObj = diagnostic.addMethod(propertyName, method, obj);

    it('returns that object', () => {
      expect(returnedObj).to.equal(obj);
    });

    it('sets the property', () => {
      expect(returnedObj[propertyName]).to.exist;
    });

    it('sets the method', () => {
      expect(returnedObj[propertyName]).to.equal(method);
    });

  });

  describe('without existing object', () => {

    let propertyName = 'method';
    let method = function () {};

    let returnedObj = diagnostic.addMethod(propertyName, method);

    it('returns a new object', () => {
      expect(returnedObj).to.be.an('object');
    });

    it('sets the property', () => {
      expect(returnedObj[propertyName]).to.exist;
    });

    it('sets the method', () => {
      expect(returnedObj[propertyName]).to.equal(method);
    });

  });

});
