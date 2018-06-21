import React, {Component} from 'react';



class AddItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        };
    }

    handleAddItem(event){
        event.preventDefault();

        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }

    render(){

        const {title, details} = this.state;

        return(
            <form onSubmit={this.handleAddItem.bind(this)}>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <label>Title</label>
                        <input type="text" value={title} onChange={event => this.setState({title: event.target.value})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 offset-s3">
                        <label>Details</label>
                        <input type="text" value={details} onChange={event => this.setState({details: event.target.value})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 offset-s3 right-align">
                        <button className="btn purple darken-2">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddItem;