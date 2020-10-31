import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ProviderMock from '../../__mocks__/ProviderMock'
import Header from '../../components/Header'

describe('<Header/>', () => {
  const header = shallow(
    <ProviderMock>
      <Header/>
    </ProviderMock>
  )

  test('Render componente Header', () => {
    expect(header.length).toEqual(1)
  })
  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header/>
      </ProviderMock>
    )
    expect(header.find(".Header-title").text()).toEqual("Platzi Store")
  })
})

describe('<Header/> Snapshot', () => {
  test('Comprobar el Snapshot del componente Header', () => {
    const header = create(
      <ProviderMock>
        <Header/>
      </ProviderMock>
    )
    expect(header.toJSON()).toMatchSnapshot()
  })
})