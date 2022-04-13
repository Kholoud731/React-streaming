import React from "react";
import { useParams } from 'react-router';
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import {ReactFlvPlayer} from 'react-flv-player'


const withRouter = (Child)=>{


    return(props)=>{
        const params = useParams()

        return(
            <Child 
            {...props}
            params={params}
            />
        )
    }
}

class StreamShow extends React.Component {

    constructor(props){
        super(props)
        this.videoRef = React.createRef()
    }
    
    componentDidMount(){
        this.props.fetchStream( this.props.params.id)
        

    }

    
    render() { 
        const {id} = this.props.params
        return (  <>

        {this.props.stream && <div>
            <ReactFlvPlayer 
            url = {`http://localhost:8000/live/${id}.flv`}
            heigh = "800px"
            width = "800px"
            isMuted={true}
            />
            <h2>{this.props.stream.title}</h2>
            <h5>{this.props.stream.description}</h5>
        </div> }
        {!this.props.stream && <div>Loading...</div> }

        </>
        
        
        );
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {stream: state.streams[ownProps.params.id]}
}
 
export default withRouter(connect(mapStateToProps, {fetchStream}) (StreamShow)) ;