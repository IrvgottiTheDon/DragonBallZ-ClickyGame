import React from 'react';

class Main extends React.Component {

    render() {
        return (
            <main role="main">
                <section className="jumbotron" style={jumbotronStyle}>
                    <div className="container">
                        <h1>Dragonball Z Clicky Game!</h1>
                        <p className="lead">Click on a an image to earn points, but don't click on any more than once!</p>
                    </div>
                </section>
                <div className="gameArea py-5 bg-light">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cb17.png'} alt="Android 17"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cb18.png'} alt="Android 18"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/CbBroly.png'} alt="Broly"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbbulma.png'} alt="Bulma"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbbuu.png'} alt="Buu"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbcell.png'} alt="Cell"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbfrieza.png'} alt="Frieza"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbfuturetrunks.png'} alt="Future Trunks"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbgohan.png'} alt="Gohan"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbgoku.png'} alt="Goku"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbgoten.png'} alt="Goten"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbvegeta.png'} alt="Vegeta"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbkrillin.png'} alt="Krillin"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbpiccolo.png'} alt="Piccolo" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbtien.png'} alt="Tien"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="imgWrapper">
                                    <img src={process.env.PUBLIC_URL + '/img/Cbyamcha.png'} alt="Yamcha"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;