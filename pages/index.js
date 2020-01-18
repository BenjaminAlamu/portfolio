import "../global-styles";
const HomePage = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="about-text">
          <h2 className="intro">Hi</h2>
          <p>I'm Adebisi Ahmed Philip. </p>
          <p>
            I am frontend developer. I work majorly with react and vue. I like
            focusing on concepts rather than tools and languages.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .about {
            padding-top: 100px;
            min-height: 100vh;
            background: linear-gradient(
                rgb(10, 25, 47, 0.98),
                rgb(10, 25, 47, 0.98)
              ),
              url(/me.jpeg) no-repeat;
            background-size: cover;
            background-position: 300px 0;
          }
          .about-text {
            max-width: 400px;
          }
          .intro {
            color: hsl(158, 68%, 42%);
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
