import Brand from "./Brand/Brand"
import Footer from "./Footer/Footer"
import NavBar from "./NavBar/NavBar"
import "./Layout.css";

export default function Layout({ children }) {
    return (
        <div className="contenedorLayout">
            <div className="contenedorHeaderLayout">
                <Brand />
                <NavBar />
            </div>
            <main className="contenedorMain">{children}</main>
            <Footer />
        </div>
    );

}
