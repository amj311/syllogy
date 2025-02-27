import { ClaimService } from "../services/ClaimService";

export default (route, _, done) => {

    // public route for creating claims
    route.post('/', async (request, reply) => {
        const data = request.body;
        const claim = await ClaimService.createClaim(data);
        return {
            success: true,
            data: claim
        }
    });

    // public route for getting a claim by id
    route.get('/:id', async (request, reply) => {
        const { id } = request.params;
        const claim = await ClaimService.getClaim(id);
        return {
            success: true,
            data: claim
        }
    });

    // public route for getting a list of claims
    route.get('/', async (request, reply) => {
        const claims = await ClaimService.getClaimList();
        return {
            success: true,
            data: claims
        }
    });

    // public route for updating a claim
    route.put('/:id', async (request, reply) => {
        const { id } = request.params;
        const data = request.body;
        const claim = await ClaimService.updateClaim(id, data);
        return {
            success: true,
            data: claim
        }
    });

    // public route for deleting a claim
    route.delete('/:id', async (request, reply) => {
        const { id } = request.params;
        await ClaimService.deleteClaim(id);
        return {
            success: true
        }
    });

    done();
}
