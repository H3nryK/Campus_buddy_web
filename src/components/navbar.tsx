const Navbar: React.FC = () => (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex justify-between">
        <li><a href="/" className="font-bold">Campus Buddy</a></li>
        <li><a href="/features" className="hover:underline">Features</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
  
export default Navbar;  