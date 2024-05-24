import { Link } from "react-router-dom"
import "./Brand.css"

export default function Brand () {
    return (
        <div>
            <Link to={"./"}><h1 className="tituloBrand">crash&barrett</h1></Link>
        </div>
    )
}