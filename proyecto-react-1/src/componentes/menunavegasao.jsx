import { Link } from "react-router-dom";

export default function Menunavegasao () {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/xdxd'}>Pagina Xd</Link>
                    </li>
                    <li>
                        <Link to={'/acerca'}>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}