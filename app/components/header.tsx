// app/components/Header.tsx
import { Link } from "@remix-run/react";

const Header: React.FC = () => {
  return (
    <header className="text-white px-6 md:px-0">
      <nav className="container mx-auto flex justify-between items-center p-4 bg-black rounded-md my-2">
        <div className="text-lg font-bold">
          <Link to="/">Logo</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300 font-semibold uppercase">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 font-semibold uppercase">
              About Us
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
