import React from 'react';
import WineryLogo from './/images/Winery.png'
import { Link } from 'react-router-dom';

function WineColumn(props) {
return (
    <div className="col">
    {props.list.map(data => {
        console.log(data)
        const winery = data;
        return (
        <div key={winery.id} className="card mb-3 shadow">
            <img src={WineryLogo} className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title">
                <Link to={`wineries/${winery.id}`} className="d-flex justify-content-center btn btn-success btn-lg px-4 gap-3">{winery.name}</Link>
            </h5>
            {/* <h6 className="card-subtitle mb-2 text-muted">
                {winery.Name}
            </h6> */}
            <p className="d-flex justify-content-center card-text">
                {winery.address}
            </p>
            </div>
            <div className="d-flex justify-content-center card-footer">
            Owned by {winery.owner}
            </div>
        </div>
        );
    })}
    </div>
);
}

class WineryList extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    wineColumns: [[], [], []],
    };
}

async componentDidMount() {
    const url = 'http://localhost:8000/api/wineries/';

    try {
    const response = await fetch(url);
    if (response.ok) {
        // Get the list of conferences
        const data = await response.json();

        const wineColumns = [[], [], []];
        let list = []
        for (let winery of data.wineries){
            list.push(winery)
        }
        console.log(list)

        let i = 0;
        for (const wine of list) {
        if (wine) {
            wineColumns[i].push(wine);
            i = i + 1;
            if (i > 2) {
            i = 0;
            }
        } else {
            console.error(wine);
        }
        }

        // Set the state to the new list of three lists of
        // conferences
        console.log(wineColumns)
        this.setState({wineColumns: wineColumns});
    }
    } catch (e) {
    console.error(e);
    }
}

render() {
    return (
    <>
        <div className="px-4 py-5 my-5 mt-0 text-center bg-success">
        <img className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" alt="" width="600" />
        <h1 className="display-5 fw-bold">Our Winery Collective</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
            Enjoy selections from some of the best wineries in the area. 
            </p>
        </div>
        </div>
        <div className="container">
        <div className="row">
            {this.state.wineColumns.map((wineList, index) => {
            return (
                <WineColumn key={index} list={wineList} />
            );
            })}
        </div>
        </div>
    </>
    );
}
}

export default WineryList;