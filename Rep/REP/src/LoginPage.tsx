import type { FunctionComponent } from 'react';
import styles from './Login.module.css';

const LoginPage: FunctionComponent = () => {
  return (
    <div className={styles.loginPage}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <img className={styles.topIcon} alt="App logo" />
        <div className={styles.content}>
          <div className={styles.title}>Login</div>
        </div>
      </div>

      {/* SSO options */}
      <div className={styles.signIn}>
        <div className={styles.signInChild} />
        <div className={styles.signInAs}>Sign in with Microsoft</div>
      </div>

      <div className={styles.google}>
        <div className={styles.signInChild} />
        <div className={styles.signInAs}>Sign in with Google</div>
      </div>

      <div className={styles.microsoftAzure}>
        <div className={styles.signInChild} />
        <div className={styles.signInAs}>Sign in</div>
      </div>

      {/* Username + Password */}
      <div className={styles.username}>
        <div className={styles.loginPageTitle}>Username</div>
        <input className={styles.textfield} type="text" />
      </div>

      <div className={styles.password}>
        <div className={styles.loginPageTitle}>Password</div>
        <input className={styles.textfield} type="password" />
      </div>

      {/* Section title */}
      <div className={styles.title3}>Single sign-on options</div>

      {/* Logos */}
      <img className={styles.microsoftLogo} alt="Microsoft logo" />
      <img className={styles.googleLogo} alt="Google logo" />

      {/* Bottom navigation */}
      <div className={styles.bottomNav}>
        <div className={styles.tab} />
        <img className={styles.icon} alt="nav icon" />
        <div className={styles.iconButton}>
          <div className={styles.arrowLeft}>
            <img className={styles.loginPageIcon} alt="back" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;