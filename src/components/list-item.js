import React, { Component } from 'react';
import { Card } from 'react-materialize';
import { Link } from 'react-router-dom';

class ListItem extends Component {

    render() {
        return (
            <div>
                <Card title={this.props.date}>
                    <div> {this.props.start} - {this.props.end}</div>
                    <Link to={`/${this.props.id}`} params={{ testvalue: "hello" }}>Plus de détails</Link>
                </Card>
            </div>
        );
    }
}

export default ListItem;