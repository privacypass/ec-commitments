const chkGdevP256 = 'BCyENEmEdWz3Wivy7iwXFcLZ0xOW7PCe2BtoMD6sYBqUK+PBZad5euc1tP9ekcdSDxxK3ijgHsQ1PqQim4VqDGo=';
const chkHdevP256 = 'BJj8hRLfPSe+GNfbS3Jd2XmYU3XTEJw+TaTxx7M9lxVY9BDI6toWVpmffMR0P28XJcV3W0SGWX2OOrRLaBYGhwM=';
const chkGv1P256 = 'BOidEuO9HSJsMZYE/Pfc5D+0ELn0bqhjEef2O0u+KAw3fPMHHXtVlEBvYjE5I/ONf9SyTFSkH3mLNHkS06Du6hQ=';
const chkHv1P256 = 'BHOPNAWXRi4r/NEptOiLOp8MSwcX0vHrVDRXv16Jnowc1eXXo5xFFKIOI6mUp8k9/eca5VY07dBhAe8QfR/FSRY=';

const public_key = "cd995480d3287eb8626b1a40b224ed9ada052cae3472665eba297b9785929a1f8ecee5b65dd580f12f239a7183490c4470595ec73cde697cb92d15f1b666c597";

const signature = [78, -54, 120, 102, -66, 124, 66, 111, -34, -125, 0, -53, 82, -32, 35, 79, -79, -98, -43, 91, -45, -67, 54, 12, -110, -21, -85, -109, -98, -20, -18, -97];

describe('test parsing P256', () => {
    test('dev', () => {
        const COMMITMENTS = require('./commitments-p256-signed.json');
        let cfDevG = COMMITMENTS['commitments']['CF']['dev']['G'];
        let cfDevH = COMMITMENTS['commitments']['CF']['dev']['H'];
        expect(cfDevG == chkGdevP256).toBeTruthy();
        expect(cfDevH == chkHdevP256).toBeTruthy();
    });

    test('v1.0', () => {
        const COMMITMENTS = require('./commitments-p256-signed.json');
        let cfDevG = COMMITMENTS['commitments']['CF']['1.0']['G'];
        let cfDevH = COMMITMENTS['commitments']['CF']['1.0']['H'];
        expect(cfDevG == chkGv1P256).toBeTruthy();
        expect(cfDevH == chkHv1P256).toBeTruthy();
    });
    test('signature', () => {
        const COMMITMENTS = require('./commitments-p256-signed.json');

        const bls = require('bls-lib');
        bls.onModuleInit(() => {
          bls.init()

          let P = bls.publicKeyImport(Buffer.from(public_key, 'hex'));

          let sig = bls.signatureImport(Buffer.from(COMMITMENTS['signature']));
          //sig is well loaded ?
          expect(bls.signatureExport(sig) == signature).toBeTruthy();

          let msg = JSON.stringify(COMMITMENTS['commitments']);
          expect(bls.verify(sig, P, msg)).toBeTruthy();
        });
    });
});
