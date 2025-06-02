import '../styles/auth.css';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="left-pane">
        <div className="logo-placeholder">
          <img src="https://cdn-icons-png.freepik.com/512/1449/1449589.png" alt="Logo"/>
        </div>
        <h2 className="title-text">Backline Buddy</h2>
        <p className="tagline-text">
          Gear for Artists
        </p>
      </div>
      <div className="right-pane">
        <div className="form-container">
          <h2 className="section-title">Sign In</h2>
          <div className="social-buttons-row">
            <div className="social-icon-facebook">
             <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="Facebook" />
            </div>
            <div className="social-icon-gmail">
              <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Gmail" />
            </div>
          </div>
          <p className="or-text-login">or use your email</p>
          <div className="input-wrapper">
            <img src="https://img.icons8.com/?size=100&id=PedPR10iVAnY&format=png&color=000000" alt="Email Icon" className="input-icon" />
            <input type="email" placeholder="Email" className="input-field" />
          </div>

          <div className="input-wrapper">
            <img src="https://img.icons8.com/?size=100&id=XkaSssewbJSt&format=png&color=000000" alt="Password Icon" className="input-icon" />
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          <button type="button" className="signup-button">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
