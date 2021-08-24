import React from "react";
import styles from "./LoginForm.module.scss";


export default function LoginForm( props ) {


    return <React.Fragment>
        <div  >
            <form className={styles.loginForm} >
                <label htmlFor="login">Login</label>
                <input type="text" name="login" id="login" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button>Sign In</button>
            </form>
        </div>

    </React.Fragment>
}