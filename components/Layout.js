import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <div className="">
      <header className="header">
        <div className="container header-container">
          <div className="logo">{"{ ... A }"}</div>
          <nav className="nav">
            <Link href="#about">
              <a className="nav-link">
                About <span className="dot">.</span>
              </a>
            </Link>
            <Link href="#projects">
              <a className="nav-link">
                Projects<span className="dot">.</span>
              </a>
            </Link>
            <Link href="#contact">
              <a className="nav-link">
                Contact<span className="dot">.</span>
              </a>
            </Link>
          </nav>
        </div>
      </header>
      <main className="main">{children}</main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        :root {
          --full-blue: rgb(10, 25, 47, 1)
          --main-blue: rgb(10, 25, 47, 0.98);
          --secondary-blue: #0f1e34;
          --main-green: hsl(158, 68%, 42%);
        }
        body {
          font-family: "Karla", sans-serif;
          line-height: 1.6;
          font-weight: 300;
          margin: 0;
          background: linear-gradient(
            rgb(10, 25, 47, 0.98),
            rgb(10, 25, 47, 0.98)
          );
          color: white;
        }
        html {
          scroll-behavior: smooth;
        }
        img {
          width: 100%;
        }
        .container {
          max-width: 1250px;
          width: 100%;
          padding: 0 1em;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
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
            z-index: 100;
            padding: 10px 0;
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
          .dot {
            color: hsl(158, 68%, 42%);
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
