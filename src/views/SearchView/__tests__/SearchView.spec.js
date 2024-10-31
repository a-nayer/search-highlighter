import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchView from '../SearchView.vue'

describe('SearchView', () => {
  it('Should render properly', () => {
    const wrapper = mount(SearchView)
    expect(wrapper.text()).toContain('Search')
  })

  it('Should render only 1 article', async () => {
    const wrapper = mount(SearchView)
    await wrapper.setData({ searchQuery: 'grid' })
    expect(wrapper.text()).toContain('1 article was found')
  })

  it('Should render 3 articles', async () => {
    const wrapper = mount(SearchView)
    await wrapper.setData({ searchQuery: 'css' })
    expect(wrapper.text()).toContain('3 articles were found')
  })

  it('Should not render any articles if no match is found', async () => {
    const wrapper = mount(SearchView)
    await wrapper.setData({ searchQuery: 'nonexistentquery' })

    expect(wrapper.text()).toContain('0 articles were found')
  })

  it('Should highlight the search query in the article title and excerpt', async () => {
    const wrapper = mount(SearchView)
    await wrapper.setData({ searchQuery: 'grid' })

    const highlightedText = wrapper.find('mark').text().toLowerCase()
    expect(highlightedText).toBe('grid')
  })
})
