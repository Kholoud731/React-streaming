import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import { useParams, useLocation, useNavigate } from 'react-router';


const withRouter = (Child) => {
return (props) => {
 const location = useLocation();
 const navigation = useNavigate();
 const params = useParams();
 return (
   <Child
   {...props}
   params={params}
   navigate={navigation}
   location={location}
   />
  );
 };
};

class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.params.id)
    }

    onSubmit = (formValues)=>{

        this.props.editStream(this.props.params.id, formValues)
        window.location.replace("/")
    
    }
    render() { 
        return ( 
            <div>
                <h3>Edit Stream</h3>
                {this.props.stream &&  
                <StreamForm 
                initialValues={this.props.stream}
                onSubmit={this.onSubmit}
                />}
        
                {!this.props.stream &&  
                <StreamForm 
                onSubmit={this.onSubmit}
                />}
        
                
            </div> );
    }
}
 

const mapStateToProps = (state, ownProps)=>{
    return {stream: state.streams[ownProps.params.id]}
}
 


export default withRouter(connect(mapStateToProps,{fetchStream, editStream})(StreamEdit));