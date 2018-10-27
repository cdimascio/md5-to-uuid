const expect = require('chai').expect;
const { md5 } = require('md5-nodejs');
const md5ToUuid = require('../lib/index');

describe('md5-to-uuid', function() {
  it('should convert and md5 hash to UUID', function() {
    const data = {
      name: 'carmine',
    };
    const hash = md5(data);
    const uuid = md5ToUuid(hash);
    expect(uuid).to.equal('889646a8-6fda-ec8c-619e-446bdf18553a');
  });
});
