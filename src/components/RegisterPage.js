import '../styles/auth.css';

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="left-pane">
        <div className="logo-placeholder">
          {/* https://www.freepik.com/icon/cassette_1449589 */}
          <img src="https://cdn-icons-png.freepik.com/512/1449/1449589.png" alt="Logo"/>
        </div>
        <h2 className="title-text">Backline Buddy</h2>
        <p className="tagline-text">
          Gear for Artists
        </p>
      </div>
      <div className="right-pane">
        <div className="form-container">
          <h2 className="section-title">Create Account</h2>
          <div className="social-buttons-row">
            <div className="social-icon-facebook">
             <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="Facebook" />
            </div>
            <div className="social-icon-gmail">
              <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Gmail" />
            </div>
          </div>

          <p className="or-text-register">or use your email</p>

          <div className="checkbox-row">
            <p>What brings you here?</p>
            <label className="checkbox-item">
              <input type="radio" name="user-choice"/>
              I want to rent equipment
            </label>
            <label className="checkbox-item">
              <input type="radio" name="user-choice"/>
              I want to list my gear for rent
            </label>
          </div>
          <div className="input-wrapper">
            <img src="https://img.icons8.com/?size=100&id=Cqrc33QN16eQ&format=png&color=000000" alt="User Icon" className="input-icon" />
            <input type="text" placeholder="Full Name" className="input-field" />
          </div>

          <div className="input-wrapper">
            <img src="https://img.icons8.com/?size=100&id=PedPR10iVAnY&format=png&color=000000" alt="Email Icon" className="input-icon" />
            <input type="email" placeholder="Email" className="input-field" />
          </div>

          <div className="input-wrapper">
            <img src="https://img.icons8.com/?size=100&id=XkaSssewbJSt&format=png&color=000000" alt="Password Icon" className="input-icon" />
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          <button type="button" className="signup-button">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
