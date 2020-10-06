import { shallowMount } from '@vue/test-utils'

// Component
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  let wrapper
  
  const mountFunction = options => {
    return shallowMount(Home, {
      ...options,
    })
  }

  beforeEach(() => {
    wrapper = mountFunction()
  })

  it('should be mounted', () => {
    expect(!!wrapper.vm).toBeTruthy()
  })
})
