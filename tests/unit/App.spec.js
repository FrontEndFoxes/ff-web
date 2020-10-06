import { shallowMount } from '@vue/test-utils'

// Component
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper
  
  const mountFunction = options => {
    return shallowMount(App, {
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
