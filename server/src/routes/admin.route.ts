import { UserService } from "../services/UserService";

export default (route, _, done) => {
	// Validate user is admin
	route.addHook('preValidation', (request, reply, done) => {
		if (!request.sessionUser?.isAdmin) {
			reply.status(403).send();
		}
		done();
	});




	/**
	 * USERS
	 */

	route.get('/users', async (request, reply) => {
		const data = await UserService.getAllUsers();
		return {
			success: true,
			data: data,
		}
	});

	route.put('/users/:user_id', async (request, reply) => {
		const {
			givenName,
			familyName,
			isAdmin,
		} = request.body;		
		const { user_id } = request.params;
		const userData = await UserService.updateUser(user_id, {
			givenName,
			familyName,
			isAdmin,
		});
		return {
			success: true,
			data: userData,
		}
	});


    done();
}
