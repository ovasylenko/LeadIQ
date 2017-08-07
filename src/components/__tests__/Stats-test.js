import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import { expect} from 'chai';
import { Stats } from 'components';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createStore from 'redux/create';
import ApiClient from 'helpers/ApiClient';
const client = new ApiClient();

describe('Stats', () => {
  const mockStore = {};
  const store = createStore(browserHistory, client, mockStore);
  const renderer = renderIntoDocument(
    <Provider store={store} key="provider">
      <Stats total={25} rows={[]}/>
    </Provider>
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it('should render correctly', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render with correct total value', () => {
    const text = dom.getElementsByClassName('total')[0].textContent;
    expect(text).to.equal('25');
  });

  it('should render with correct current value', () => {
    const text = dom.getElementsByClassName('current')[0].textContent;
    expect(text).to.equal('0');
  });

});
