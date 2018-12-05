const chkGdevP256 = 'BCyENEmEdWz3Wivy7iwXFcLZ0xOW7PCe2BtoMD6sYBqUK+PBZad5euc1tP9ekcdSDxxK3ijgHsQ1PqQim4VqDGo=';
const chkHdevP256 = 'BJj8hRLfPSe+GNfbS3Jd2XmYU3XTEJw+TaTxx7M9lxVY9BDI6toWVpmffMR0P28XJcV3W0SGWX2OOrRLaBYGhwM=';
const chkGv1P256 = 'BOidEuO9HSJsMZYE/Pfc5D+0ELn0bqhjEef2O0u+KAw3fPMHHXtVlEBvYjE5I/ONf9SyTFSkH3mLNHkS06Du6hQ=';
const chkHv1P256 = 'BHOPNAWXRi4r/NEptOiLOp8MSwcX0vHrVDRXv16Jnowc1eXXo5xFFKIOI6mUp8k9/eca5VY07dBhAe8QfR/FSRY=';
describe('test parsing P256', () => {
    test('dev', () => {
        const COMMITMENTS = require('./commitments-p256.json');
        let cfDevG = COMMITMENTS['CF']['dev']['G'];
        let cfDevH = COMMITMENTS['CF']['dev']['H'];
        expect(cfDevG == chkGdevP256).toBeTruthy();
        expect(cfDevH == chkHdevP256).toBeTruthy();
    });

    test('v1.0', () => {
        const COMMITMENTS = require('./commitments-p256.json');
        let cfDevG = COMMITMENTS['CF']['1.0']['G'];
        let cfDevH = COMMITMENTS['CF']['1.0']['H'];
        expect(cfDevG == chkGv1P256).toBeTruthy();
        expect(cfDevH == chkHv1P256).toBeTruthy();
    });
});
