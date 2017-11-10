import React, { Component } from 'react';
import ListItem from './list-item';

class List extends Component {

    render() {
        return (
            <div>
                { this.props.data.map(row => <ListItem key={row.id} date={row.date} start={row.start} end={row.end} id={row.id} />) }
            </div>
        );
    }
}

export default List;