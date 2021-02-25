import React from 'react';
import "./additeme.css";


class AddItems extends React.Component {
    state = {
        name: "",
        age: ""
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.additem(this.state);
        this.setState({
            name: "", age: ""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input type="text" id="name" placeholder="Enter your Name..."
                        onChange={this.handelChange} required value={this.state.name} />
                    <input type="number" id="age" placeholder="Enter your Number..."
                        onChange={this.handelChange} required value={this.state.age} />
                    <input type="submit" value="Add Item" />
                </form>
            </div>
        )
    }
}

export default AddItems;