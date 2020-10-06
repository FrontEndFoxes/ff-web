import { shallowMount } from '@vue/test-utils'

// Component
import Gallery from '@/views/Gallery.vue'

describe('Gallery.vue', () => {
  let wrapper
  
  const mountFunction = options => {
    return shallowMount(Gallery, {
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
