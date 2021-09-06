import React, {Component} from 'react';

export default class Main extends Component {
    render() {
        return (
            <div className="App">
                <p>
                    Hello, {this.props.name}.<br/>
                    Secret area? <a href="/secret">Yes</a>
                </p>

                {!this.props.auth.isAuthenticated() && 
                    <div>
                        <hr />
                            Login first!
                        <hr />
                        <button onClick={this.props.auth.login}>Login</button>
                    </div>
                }
            </div>
        )
    }
}

