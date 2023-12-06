/**
 * Configuration object containing the authentication service API endpoints
 */
const jwtServiceConfig = {
	signIn: 'http://localhost:8080/realms/Hema-Clinic/protocol/openid-connect/token',
	signUp: 'api/auth/sign-up',
	accessToken: 'api/auth/access-token',
	updateUser: 'api/auth/user/update'
};

export default jwtServiceConfig;
