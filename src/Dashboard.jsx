import React from 'react';
import Dashnavbar from './Dashnavbar';

class Dashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: "",
        }
    }

    componentDidMount() {
        fetch("http://localhost:9090/admin/60a67ba2e9200da3e0f34250")
        .then((response) => {
            response.json()
            .then(data => {
                this.setState({
                    data: data
                })
            })
        })
    }

    render() {
        return(
            <div>
                <Dashnavbar data={this.state.data}/>
            </div>
        );
    }
} 

export default Dashboard