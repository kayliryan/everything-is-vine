import React from 'react';


function WineColumn(props) {
return (
    <div className="col">
    {props.list.map(data => {
        console.log(data)
        const wine = data;
        return (
        <div key={wine.id} className="card mb-3 shadow">
            <img src={wine.picture_url} className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title">{wine.year}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
                {wine.varietal}
            </h6>
            <p className="card-text">
                {wine.description}
            </p>
            </div>
            <div className="card-footer">
            ALC/VOL {wine.abv}%
            </div>
        </div>
        );
    })}
    </div>
);
}

class WineList extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    wineColumns: [[], [], []],
    };
}

async componentDidMount() {
    const url = 'http://localhost:8000/api/wines/';

    try {
    const response = await fetch(url);
    if (response.ok) {
        // Get the list of conferences
        const data = await response.json();

        const wineColumns = [[], [], []];
        let list = []
        for (let wine of data.wines){
            list.push(wine)
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
        <div className="px-4 py-5 my-5 mt-0 text-center bg-info">
        <img className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" alt="" width="600" />
        <h1 className="display-5 fw-bold">Our Wines</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
            Please enjoy a selection of our finest wines. 
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

export default WineList;