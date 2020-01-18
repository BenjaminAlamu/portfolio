const Layout = ({ children }) => {
  return (
    <div>
      <header className="header">
        <div className="container header-container">
          <div className="logo">{"{ ... A }"}</div>
          <nav className="nav">
            <a href="#" className="nav-link">
              About.
            </a>
            <a href="#" className="nav-link">
              Projects.
            </a>
            <a href="#" className="nav-link">
              Contact.
            </a>
          </nav>
        </div>
      </header>
      <main className="main">{children}</main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: "Karla", sans-serif;
          line-height: 1.5;
          font-weight: 300;
          margin: 0;
          background: linear-gradient(
            rgb(10, 25, 47, 0.98),
            rgb(10, 25, 47, 0.98)
          );
          color: white;
        }
        img {
          width: 100%;
        }
        .container {
          max-width: 1250px;
          width: 100%;
          padding: 0 1em;
          margin: 0 auto;
        }
      `}</style>
      <style jsx>
        {`
          .logo {
            font-size: 40px;
            font-weight: bold;
          }
          .header {
            position: absolute;
            width: 100%;
          }
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .nav {
            display: flex;
            justify-content: flex-end;
            flex: 1;
          }
          .nav-link {
            margin-left: 20px;
            color: #fff;
            text-decoration: none;
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
