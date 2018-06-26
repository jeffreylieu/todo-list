import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item';
import axios from 'axios';




class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            list:[]
        };

        this.base_url = 'http://api.reactprototypes.com';
        this.api_key = '?key=c518demouser';
    }

    componentDidMount(){
        this.getListData();
    }


    async addItem(item){

        try{
            const resp = await axios.post(`${this.base_url}/todos${this.api_key}`, item);
            console.log('Add response:', resp);
            this.getListData();
        } catch (err){
            console.log('Error adding item:', err.response.data.error);
        }
    }

    async getListData(){
        //oldway
        // axios.get(`${this.base_url}/todos${this.api_key}`).then(resp => {
        //     console.log('Get Todos Response:', resp.data.todos);
        //     this.setState({
        //         list: resp.data.todos
        //     });
        // }).catch( err => {
        //     console.log('Get todos error:', err.message);
        // });


        //async await method//
        try{ //try catch block finds errors
            const resp = await axios.get(`${this.base_url}/todos${this.api_key}`);

            this.setState({
                list: resp.data.todos
            });

        } catch(err){
            console.log('GetData Error:', err.message);
        }

    }




    render(){
        console.log('APP:', this.state);

        return(
            <div className="container">
                <h1 className="center">To Do List</h1>
                <AddItem add={this.addItem.bind(this)}/>
                <List data={this.state.list}/>
            </div>
        );
    }
}


export default App;
