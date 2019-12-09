import React, { PureComponent } from 'react';
import * as Service from '../service/common';

class main extends PureComponent {

    componentDidMount() {
        Service.test().then((response) => {
            console.log(response);
        });
    }

    render() {
        return <div>테스트</div>;
    }
}

export default main;
