import NextAuth from "next-auth"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "../../../lib/prismadb"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "E-Mail", type: "email", placeholder: "E-Mail" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const prisma = new PrismaClient()

                let user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                let doesPasswordHashMatch = false

                if (user) {
                    doesPasswordHashMatch = await bcrypt.compareSync(credentials.password, user.password)
                }

                if (doesPasswordHashMatch === true) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
}
export default NextAuth(authOptions)