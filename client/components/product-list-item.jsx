/* eslint-disable no-console */
import React from 'react';

export default class ProductionListItem extends React.Component {

  render() {

    return (

      <div className="col-md-4 mb-3"
        onClick={() => this.props.setView('details', { productId: this.props.productId })} >
        <div className="card h-100">
          <img className="card-img-top h-50 pointer" src={this.props.image} alt={this.props.name} />
          <div className="card-body pointer">
            <h5 className="card-title pointer">{this.props.name}</h5>
            <p className="card-subtitle text-muted pointer">${(this.props.price / Math.pow(10, 2)).toFixed(2)}</p>
            <p className="card-text pointer">{this.props.shortDescription}</p>
          </div>
        </div>
      </div>

    );
  }
}
