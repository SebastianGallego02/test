import { Outlet, Link } from "react-router-dom"
import '../stylesheets/Layout.css'

export const layout = () => {
  return (
    <div >
      <nav className="header">
        <ul className="header-items">
          <li>
            <Link to="/" className="item">
              Home
            </Link></li>
          <li> 
            <Link to="/archived" className="item">
              archived
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default layout;