export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-gray-700 pt-8 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span>© {year} Marco</span>
          <span className="mx-2">•</span>
          <a href="#about" className="hover:text-white">About</a>
          <span className="mx-2">•</span>
          <a href="#projects" className="hover:text-white">Projects</a>
        </div>

        <div className="flex gap-4 items-center">
          <a href="https://github.com/aklademarco" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.485 2 12.02c0 4.428 2.867 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.238-.009-.868-.014-1.704-2.782.604-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.468-1.11-1.468-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.094.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.376.203 2.393.1 2.646.64.7 1.028 1.594 1.028 2.688 0 3.85-2.338 4.697-4.566 4.946.36.31.68.923.68 1.861 0 1.343-.012 2.427-.012 2.757 0 .268.18.58.688.482C19.135 20.203 22 16.447 22 12.02 22 6.485 17.523 2 12 2z" fill="currentColor" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/aklade-bismark-7426812a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8 8.98h4.8v2.04h.07c.67-1.27 2.3-2.6 4.73-2.6C23.34 8.42 24 11.08 24 15.02V24h-5V15.9c0-1.95-.04-4.46-2.72-4.46-2.72 0-3.14 2.12-3.14 4.31V24H8V8.98z" fill="currentColor" />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}
