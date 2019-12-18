import React from 'react';

class NavBar extends React.Component {    
    render() {
        return (
            <header>
                <div className="navbar navbar-light bg-light shadow-sm fixed-top">
                    <div className="container d-flex justify-content-between">
                        <a href={process.env.PUBLIC_URL} className="navbar-brand d-flex align-items-center">
                            <strong>DBZ Clicky Game!</strong>
                        </a>
                        <div className="message blinking">{this.props.gameMessage}</div>
                        <div className="scoreBoard">
                            <div>
                                <span>Current Score: </span><span id="currentScore">{this.props.currentScore}</span>
                            </div>
                            <div>
                                <span>Top Score: </span><span id="topScore">{this.props.topScore}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default NavBar;