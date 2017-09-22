import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../actions';

const {string, func} = PropTypes;

class AccessDialog extends Component {

    state = {
        name: '',
        val: false
    };

    render() {
        const {name, val} = this.state;
        return (
            <div>

                <div>
                    <button onClick={this.props.getUsers}>Get Users</button>
                </div>

                <input type="text"
                       value={this.props.name}
                       onChange={this.handleChange}/>
                <input
                    value={val}
                    type="checkbox"/>
            </div>
        );
    }

    handleChange = (e) => {
       this.props.handleNameChange(e.target.value);
    }
}

AccessDialog.propTypes = {
    name: string,
    handleNameChange: func,
    getUsers: func
};
AccessDialog.defaultProps = {
    name: 'BP Mishra'
};

export default AccessDialog;
