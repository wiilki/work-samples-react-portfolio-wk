import { pagesData } from '../data/pagesData';
import "../styles/Home.css";
import "../styles/Navigation.css";
import 'boxicons/css/boxicons.min.css';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav id="navbar" className="navbar nav-menu">
      <ul className="nav">
        {/* Mapping over pagesData to dynamically create navigation tabs for each page */}
        {pagesData.map((page) => (
          <li className="nav-item" key={page.name}>
            <a
              href={page.link}
              onClick={() => handlePageChange(page.name)}
              className={currentPage === page.name ? 'nav-link active' : 'nav-link'} // Dynamically assigning the active class based on the current page
            >
              <i className={page.icon}></i>
              <span>{page.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
