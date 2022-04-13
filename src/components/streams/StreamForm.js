import React from "react";
import {Field, reduxForm} from 'redux-form'


class StreamForm extends React.Component {

    inputElement = ({input, lable, meta})=>{
        return (
            <div className="field">
                <label>{lable}</label>
                <input {...input} /> 
                {meta.touched && meta.error && <div className="ui error message">
                    <div className="header">{meta.error}</div>
                    </div>}   
            </div>
        
        )
    }

    onSubmit = (formValues)=>{
        this.props.onSubmit(formValues)
    }
     
    render() { 
        
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name= 'title' lable='Enter Title'
                component={this.inputElement}
                />
                <Field name= 'description' lable='Enter Description'
                component={this.inputElement}
                />
                <button className="ui button primary" type="submit">Submit</button>
            </form>
        );
    }
}

const validate = (formValues)=>{

    const errors = {}
    if(!formValues.title){
        errors.title = "You must enter a title"
    }
    if(!formValues.description){
        errors.description = "You must enter a description"
    }
    return errors

}
 
export default reduxForm({form: 'streamForm', validate}) (StreamForm);
