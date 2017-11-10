import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'react-materialize';

export default class SinglePlage extends React.Component {

    render(){

        const { match } = this.props;
        const id = parseInt(match.params.id);

        return (
            <div>
                <Link to="/"><Button waves='light'><Icon small>home</Icon></Button> </Link>
                <Link to={`${id+1}`} className='right'  ><Button waves='light'>Suivant</Button> </Link>
                <Link to={`${id-1}`} className='right'  ><Button waves='light'>Précédent</Button> </Link>
                <div className="center"> Hello: {match.params.id}</div>
            </div>
        )
    }
}
