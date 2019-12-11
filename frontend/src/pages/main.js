import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import * as Service from '../service/common';

class main extends PureComponent {

    componentDidMount() {
        Service.test().then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <Link to="/move">테스트 이동</Link>
        );
    }
}

export default main;
