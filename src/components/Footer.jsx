function Footer() {
  return (
    <footer className="page-footer green light-4">
      <div className="footer-copyright">
        <div className="container">
          {new Date().getFullYear()} CopyRight Text
          <a className="grey-text text-lighten-4 right" href="#">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
