import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login, logout} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return<Redirect to={"profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>

    );
}

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={Input} validate={[required, maxLength30]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required, maxLength30]} />
            </div>
            <div>
                <Field component={Input}  type={"checkbox"} name={"rememberMe"}  /> remember me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps,{login, logout})(Login);