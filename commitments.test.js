const chkGdevP256 = 'BIpWWWWFtDRODAHEzZlvjKyDwQAdh72mYKMAsGrtwsG7XmMxsy89gfiOFbX3RZ9Ik6jEYWyJB0TmnWNVeeZBt5Y=';
const chkHdevP256 = 'BKjGppSCZCsL08YlF4MJcml6YkCglMvr56WlUOFjn9hOKXNa0iB9t8OHXW7lARIfYO0CZE/t1SlPA1mXdi/Rcjo=';
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

    test('v1', () => {
        const COMMITMENTS = require('./commitments-p256.json');
        let cfDevG = COMMITMENTS['CF']['1.0']['G'];
        let cfDevH = COMMITMENTS['CF']['1.0']['H'];
        expect(cfDevG == chkGv1P256).toBeTruthy();
        expect(cfDevH == chkHv1P256).toBeTruthy();
    });
});
