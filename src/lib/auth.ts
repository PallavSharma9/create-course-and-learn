import { NextAuthOptions } from "next-auth"
export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        jwt: async ({token}) => {
            const db_user = await prisma.user.findFirst({
                where: {
                    email: token.email
                }
            })
        }
    }
}