import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <nav className="navigation flex justify-between items-center px-6 py-4 bg-opacity-50 backdrop-blur-md bg-neutral dark:bg-base-900">
      <a href="/" className="brand-name text-xl font-bold text-neutral-content">
        Logo
      </a>
      <div className="flex items-center space-x-4">
        <AuthButton />
        <button className="btn btn-secondary">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
