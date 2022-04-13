import React from "react";
import Modal from "../Modal";
import { useParams, useLocation, useNavigate} from "react-router";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from '../../actions';

const withRouter =(Child)=>{
    return (props)=>{
        const params = useParams()
        const location = useLocation()
        const navigation = useNavigate()

        return (
            <Child
                {...props}
                params={params}
                location={location}
                navigation={navigation}
            />
        )
    }
}

class StreamDelete extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.params.id)
    }

    onDelete = ()=>{
        this.props.deleteStream(this.props.params.id)
        window.location.replace("/")
    }
    
    render() { 
        return ( <div>
            {this.props.stream && <Modal
            content = {`Are you sure you want to delete this stream: ${this.props.stream.title}?`}
            onDelete={this.onDelete}
            />}
            {!this.props.stream && <div>Loading...</div>}
            
        </div> );
    }
}
 
const mapStateToProps = (state, ownProps)=>{
    return {stream : state.streams[ownProps.params.id]}
}
 
export default withRouter(connect(mapStateToProps, {fetchStream, deleteStream}) (StreamDelete) );