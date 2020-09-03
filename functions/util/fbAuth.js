const { admin, db } = require('./admin');

module.exports = async(req, res, next) => {
	let idToken;
	if ( req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
		idToken = req.headers.authorization.split('Bearer ')[1];
	} else{
		console.error('No token')
		return res.status(403).json({error: 'Unauthorized'})
	}

    try {
        const authResponse = await admin.auth().verifyIdToken(tokenData.accessToken)

        const userCredentials = {
            phone: await authResponse.phone_number,
            userID: await authResponse.uid
        };

        const userDoc = await db.collection('users').where('userID', '==', await userCredentials.userID)

        return next();
    } catch (err) {
		console.error('Error while verifying token ', err);
		return res.status(403).json(err);
    }
};