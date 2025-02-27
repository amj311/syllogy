import { Router } from 'express';
import { createClaim, getClaimById, updateClaim, deleteClaim, getAllClaims } from '../services/claim.service';

const router = Router();

router.post('/', async (req, res) => {
    const claim = await createClaim(req.body);
    res.json(claim);
});

router.get('/:id', async (req, res) => {
    const claim = await getClaimById(req.params.id);
    res.json(claim);
});

router.put('/:id', async (req, res) => {
    const claim = await updateClaim(req.params.id, req.body);
    res.json(claim);
});

router.delete('/:id', async (req, res) => {
    await deleteClaim(req.params.id);
    res.sendStatus(204);
});

router.get('/', async (req, res) => {
    const claims = await getAllClaims();
    res.json(claims);
});

export default router;
