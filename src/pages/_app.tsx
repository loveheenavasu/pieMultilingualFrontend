import { Component } from 'react'
import { AppProps } from '../../node_modules/next/app'
// import '../styles.css'
import '../components/ui/layout/Navbar/NavItem/Navitem.css'
import '../components/ui/layout/Navbar/Navbar.css'
import '../components/ui/layout/Header/Header.css'
import '../components/ui/layout/homeContainer/HomeContainer.css'
import '../components/ui/Form/Form.css'

export default function MyApp({ Component, pageProps }: AppProps & { pageProps: AppProps['pageProps'] }) {
    return <Component {...pageProps} />
}