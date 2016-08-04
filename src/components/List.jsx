const React = require('react');
const actions = require('../actions/actions');
import Product from './Product';
import {connect} from 'react-redux';

var _ = require('underscore');

var List = React.createClass({

  render: function () {
    var listNodes = this.props.items.map(function (item, index){
      return (
          <Product key={index} {...item}/>
      )
    });

    return (
      <div>
        <div className="level-item list-title">
          <span>Products Available</span>
          <i className="fa fa-list" aria-hidden="true"></i>
        </div>
        <table className="table is-striped">
          <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantitoy</th>
            <th>Add Item</th>
          </tr>
          </thead>
          <tbody>
            {listNodes}
          </tbody>
        </table>
      </div>
    );
  }
});

const mapStateToProps = function (state) {
  return {
    items: state.items
  }
}

module.exports = connect(mapStateToProps)(List);
