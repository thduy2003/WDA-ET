import Footer from '../components/Footer'
import Header from '../components/Header'


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
