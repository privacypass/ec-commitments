const public_key = "cd995480d3287eb8626b1a40b224ed9ada052cae3472665eba297b9785929a1f8ecee5b65dd580f12f239a7183490c4470595ec73cde697cb92d15f1b666c597";

const COMMITMENTS = require('./commitments-p256.json');

const bls = require('bls-lib');

bls.onModuleInit(() => {
  bls.init()
  let P = bls.publicKeyImport(Buffer.from(public_key, 'hex'));
  let sig = bls.signatureImport(Buffer.from(COMMITMENTS['signature']));
  let msg = JSON.stringify(COMMITMENTS['commitments']);
  if (bls.verify(sig, P, msg)) {
    console.log("Signature verified");
  }
  else {
    console.log("Signature could not be verified");
  }
});
