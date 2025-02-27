import { prisma } from "../prisma/client";

export const ClaimService = {
    async createClaim(data) {
        return await prisma.claim.create({
            data,
        });
    },

    async getClaim(id) {
        return await prisma.claim.findFirst({
            where: {
                id,
            },
            include: {
                ArgumentsFor: true,
                ArgumentsAgainst: true,
                SupportingArguments: true,
            }
        });
    },

    async getClaimList(where?) {
        return await prisma.claim.findMany({
            where,
            orderBy: {
                createdAt: 'desc' as any,
            },
            include: {
                ArgumentsFor: true,
                ArgumentsAgainst: true,
                SupportingArguments: true,
            }
        });
    }, 

    async updateClaim(id: string, data) {
        return await prisma.claim.update({
            where: {
                id,
            },
            data,
        });
    },

    async deleteClaim(id: string) {
        await prisma.claim.delete({
            where: {
                id,
            },
        });
    },
};
