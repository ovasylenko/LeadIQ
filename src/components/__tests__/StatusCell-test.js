import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import { expect} from 'chai';
import statusCell  from '../Table/StatusCell';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createStore from 'redux/create';
import ApiClient from 'helpers/ApiClient';
const client = new ApiClient();

describe('StatusCell', () => {
  const StatusCellDirect = statusCell({direct:true});
  const StatusCellInDirect = statusCell({direct:false});
  const rowObject = { fail: {reason:"test"} };

  const rendererDirectFail = renderIntoDocument(
      <StatusCellDirect row={rowObject} children={false}/>
  );

  const rendererInDirectFail = renderIntoDocument(
      <StatusCellInDirect row={rowObject} children={false}/>
  );

  const domDirectRed = ReactDOM.findDOMNode(rendererDirectFail);
  const domInDirectRed = ReactDOM.findDOMNode(rendererInDirectFail);

  it('should render correctly', () => {
    return expect(domInDirectRed).to.be.ok;
  });

  it('should render direct status cell with red class', () => {
    expect(domDirectRed.className).to.equal('status red');
  });
  
  it('should render indirect status cell with green class', () => {
    expect(domInDirectRed.className).to.equal('status green');
  });

});
