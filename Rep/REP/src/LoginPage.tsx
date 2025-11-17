import { FunctionComponent } from 'react';
import styles from './Login.module.css';


const LoginPage = () => {
  	return (
    		<div className={styles.loginPage}>
      			<div className={styles.topBar}>
        				<img className={styles.topIcon} alt="" />
        				<div className={styles.content}>
          					<img className={styles.screenshot20251006At1052} alt="" />
          					<div className={styles.title}>Login</div>
        				</div>
      			</div>
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
      			<div className={styles.password}>
        				<div className={styles.loginPageTitle}>Password</div>
        				<div className={styles.textfield} />
      			</div>
      			<div className={styles.username}>
        				<div className={styles.loginPageTitle}>Username</div>
        				<div className={styles.textfield} />
      			</div>
      			<div className={styles.title3}>Single sign on options</div>
      			<img className={styles.pxMicrosoftLogosvg1Icon} alt="" />
      			<img className={styles.googleGLogosvg1Icon} alt="" />
      			<div className={styles.bottomNav}>
        				<div className={styles.tab} />
        				<img className={styles.icon} alt="" />
        				<div className={styles.iconButton}>
          					<div className={styles.arrowLeft}>
            						<img className={styles.loginPageIcon} alt="" />
          					</div>
        				</div>
      			</div>
      			<img className={styles.loginPageChild} alt="" />
    		</div>);
};

export default LoginPage as FunctionComponent;
