import React from "react";
import { Route, Routes} from "react-router-dom";
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import Header from './Header';


const App = (props) => {
    return ( 
        <div className="ui container">
            <Header/>
            <Routes>
                <Route path='/' exact element={<StreamList/>}/>
                <Route path='/streams/new' element={<StreamCreate/>}/>
                <Route path='/streams/delete/:id' element={<StreamDelete/>}/>
                <Route path='/streams/show/:id' element={<StreamShow/>}/>
                <Route path='/streams/edit/:id'  element={<StreamEdit />}/>
            </Routes>
        </div>
     );
}



 
export default App;