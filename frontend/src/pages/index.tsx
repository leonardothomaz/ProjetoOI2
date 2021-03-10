import Head from 'next/head'
import { PrimaryButton } from '../components/PrimaryButton'

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>React App</title>
      </Head>

      <PrimaryButton nome={'Entrar'} />
    </div>
  )
}
