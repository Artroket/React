import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import { withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    
     componentDidMount (){

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11566;
           // 11566
        }   
        this.props.getUserProfile(userId);  
            this.props.getStatus(userId);
                
            
    }

    render () {
  
        return (
                 <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }

}

const mapStateToProps = (state) => {
        return {
            profile: state.profilePage.profile,
            userId: state.auth.userId,
            status: state.profilePage.status
        }   
           
};



export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter,
  //  withAuthRedirect
)(ProfileContainer);