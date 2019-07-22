import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    state = {
        datas: [
            { 
                text: '', 
                done: '' 
            }
        ]
    }


    handleItemClick = (item) => {
        let existed_item= this.state.datas.find(data=> item.text === data.text);
        if(existed_item) {
            this.setState({
                
            })
        }
        else {
            this.setState({
                datas: [
                    ...this.state.datas,
                    {
                        text: item.text, 
                        done: true  
                    }
                ]
            })
        }
    }


    render() {
        console.log(this.state.datas)
        return (
                <React.Fragment>
                    <ul>
                        {
                            this.props.items.map(item => {
                                return (
                                    <TodoItem key={item.text} item={item} clicked={() => this.handleItemClick(item)} />
                                )
                            })
                        }
                    </ul>
                    <div>
                        <h4>Done is true show</h4>
                        <ul>
                        {
                            this.state.datas.map(item => {
                                return (
                                    <li key={item.text}>{item.done ? item.text : null}</li>
                                )
                            })
                        }
                    </ul>
                    </div>
                </React.Fragment>
        );
    }
}

export default TodoList;