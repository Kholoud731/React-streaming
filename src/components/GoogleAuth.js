import React from "react";
import { signIn, signOut } from '../actions';
import {connect} from 'react-redux'

class GoogleAuth extends React.Component {

    componentDidMount = ()=>{
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '854282882172-np82ojnhekl4a7m8v14cfgu9fnfvco7u.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    onSignIn=()=>{
        this.auth.signIn()
    }
    onSignOut=()=>{
        this.auth.signOut()
    }
    
    render() { 
        return (
        <>
        {
            this.props.isSignedIn && 
            <button 
            onClick={this.onSignOut}
            className="ui red google button">
                <i className="google icon"/>
                Sign Out
            </button>
        }
        {
            this.props.isSignedIn === false && 
            <button 
            onClick={this.onSignIn}
            className="ui red google button">
            <i className="google icon"/>
            Sign In
        </button>
        }
        </>
        );
    }
}

const mapStateToProps = (state)=>{
    return{isSignedIn: state.auth.isSignedIn}
}
 
export default connect(mapStateToProps,{signIn, signOut})(GoogleAuth);