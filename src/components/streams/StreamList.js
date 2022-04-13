import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {fetchStreams} from '../../actions'


class StreamList extends React.Component {

    componentDidMount = ()=>{
        this.props.fetchStreams()
    }

    renderList = ()=>{
        return this.props.streams.map (stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.props.currentUser === stream.userId && 
                        <div className="right floated content"> 
                            <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                            <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                        </div>
                        }
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        <div className="header">
                            <Link to={`/streams/show/${stream.id}`} className="header">
                            {stream.title}
                            </Link>
                        </div>
                        
                        <div className="description">
                            {stream.description}
                        </div>

                    </div>
                </div>
            )
        })
        
    }

    render(){
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.props.isSignedIn && 
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                    Create Stream
                    </Link>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        streams : Object.values(state.streams),
        currentUser: state.auth.userId,
        isSignedIn : state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);