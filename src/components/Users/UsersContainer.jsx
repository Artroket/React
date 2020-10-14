import React, { useImperativeHandle } from 'react';
import { setUsers, follow, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);});
    }

    render(){

        return  <>
                {this.props.isFetching ?<Preloader/>: <Users  totalUsersCount={this.props.totalUsersCount} 
                        pageSize={this.props.pageSize} 
                        currentPage={this.props.currentPage} 
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}/> }
                </>
}
}


let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect (mapStateToProps,
     {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}) 
     (UsersContainer);