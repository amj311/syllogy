import { prisma } from "../prisma/client";

export const ArgumentService = {
    async createArgument(data) {
        return await prisma.argument.create({
            data,
        });
    },

    async getArgument(id) {
        return await prisma.argument.findFirst({
            where: {
                id,
            },
            include: {
                Claims: true,
            }
        });
    },

    async updateArgument(id: string, data) {
        return await prisma.argument.update({
            where: {
                id,
            },
            data,
        });
    },

    async deleteArgument(id: string) {
        await prisma.argument.delete({
            where: {
                id,
            },
        });
    },
};
