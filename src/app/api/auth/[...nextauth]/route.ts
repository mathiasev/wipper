import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";


const handler = NextAuth({

    providers: [
        // AzureADProvider({
        //     clientId: process.env.AZURE_AD_CLIENT_ID,
        //     clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
        //     tenantId: process.env.AZURE_AD_TENANT_ID,
        // }),
        {
            name: "Basecamp",
            id: "basecamp",
            type: "oauth",
            authorization: "https://launchpad.37signals.com/authorization/new?type=web_server",

            token: {
                url: "https://launchpad.37signals.com/authorization/token?type=web_server",
                async request(context) {
                    const { provider, params: parameters, checks, client } = context
                    const { callbackUrl } = provider

                    const tokenset = await client.grant({
                        grant_type: 'authorization_code',
                        code: parameters.code,
                        redirect_uri: callbackUrl,
                        code_verifier: checks.code_verifier,
                        client_id: process.env.BASECAMP_CLIENT_ID,
                        client_secret: process.env.BASECAMP_CLIENT_SECRET,
                    })
                    return { tokens: tokenset }
                },
            },

            userinfo: "https://launchpad.37signals.com/authorization.json",


            profile(profile, tokens) {
                console.log("profile", profile);
                return {
                    id: profile.id,
                    name: profile?.name
                }
            },
            clientId: process.env.BASECAMP_CLIENT_ID,
            clientSecret: process.env.BASECAMP_CLIENT_SECRET


        }
    ]
})

export { handler as GET, handler as POST }