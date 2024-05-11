import "./NavBar.css"



export default function NavBar() {
    return (
        <div className="contenedorNavBar">
            <CategoryList />
            <CartWidget />
        </div>
    )
}