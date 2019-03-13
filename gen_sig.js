const secretKey = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';
const public_key = "cd995480d3287eb8626b1a40b224ed9ada052cae3472665eba297b9785929a1f8ecee5b65dd580f12f239a7183490c4470595ec73cde697cb92d15f1b666c597";

const COMMITMENTS = require('./commitments-p256-signed.json');

const bls = require('bls-lib');

bls.onModuleInit(() => {
  bls.init()
  var sig = bls.signature();
  let s = bls.secretKeyImport(Buffer.from(secretKey, 'hex'));
  let P = bls.publicKeyImport(Buffer.from(public_key, 'hex'));
  let msg = JSON.stringify(COMMITMENTS['commitments']);
  bls.sign(sig, s, msg);
  console.log(bls.signatureExport(sig));
});
