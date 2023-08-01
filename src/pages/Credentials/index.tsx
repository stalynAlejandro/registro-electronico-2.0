import { CredentialsContainer } from './styled'

export function Credentials() {

    const baseUlr = import.meta.env.BASE_URL
    const prod = import.meta.env.PROD
    const dev = import.meta.env.DEV
    const ssr = import.meta.env.SSR


    console.log({ baseUlr })
    console.log({ prod })
    console.log({ dev })
    console.log({ ssr })

    return (
        <CredentialsContainer>

        </CredentialsContainer>
    );
}
