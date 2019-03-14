import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../src/components/Home'

test('Home component', (t) => {
  const component = shallow(<Home />)

  t.equal(
    component.find('h2').length, 1, 'the Home component has a heading element'
  )

  t.end()
});
