const secretKey = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';

const COMMITMENTS = require('./commitments-p256-signed.json');

const bls = require('bls-lib');

bls.onModuleInit(() => {
  bls.init()
  var sig = bls.signature();
  let s = bls.secretKeyImport(Buffer.from(secretKey, 'hex'));
  let msg = JSON.stringify(COMMITMENTS['commitments']);
  bls.sign(sig, s, msg);
  console.log(bls.signatureExport(sig));
});
