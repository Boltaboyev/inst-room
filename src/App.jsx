import React from "react"

// components
import Header from "./components/header"
import Footer from "./components/footer"
import Showcase from "./components/showcase"
import Products from "./components/products"
import Brand from "./components/brand"
import AboutUs from "./components/about-us"
import NewProducts from "./components/new-products"
import News from "./components/news"

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Showcase />
                <Products />
                <Brand />
                <AboutUs />
                <NewProducts />
                <News />
            </main>
            <Footer />
        </>
    )
}

export default App
