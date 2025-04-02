const Footer = () => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4 text-sm text-gray-600 dark:text-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
          </p>
          <div className="mt-2 space-x-4">
            <a
              href="https://github.com/jahswant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jahswant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  