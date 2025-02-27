import { ArgumentService } from "../services/ArgumentService";

export default (route, _, done) => {

    // public route for creating arguments
    route.post('/', async (request, reply) => {
        const data = request.body;
        const argument = await ArgumentService.createArgument(data);
        return {
            success: true,
            data: argument
        }
    });

    // public route for getting an argument by id
    route.get('/:id', async (request, reply) => {
        const { id } = request.params;
        const argument = await ArgumentService.getArgument(id);
        return {
            success: true,
            data: argument
        }
    });


    // public route for updating an argument
    route.put('/:id', async (request, reply) => {
        const { id } = request.params;
        const data = request.body;
        const argument = await ArgumentService.updateArgument(id, data);
        return {
            success: true,
            data: argument
        }
    });

    // public route for deleting an argument
    route.delete('/:id', async (request, reply) => {
        const { id } = request.params;
        await ArgumentService.deleteArgument(id);
        return {
            success: true
        }
    });

    done();
}
