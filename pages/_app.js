import 'tailwindcss/tailwind.css'
import '/public/prof.css'

function MyApp({Component, pageProps}) {
    return <>
            <Component {...pageProps} />
    </>
}

export default MyApp