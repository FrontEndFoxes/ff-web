import { shallowMount } from '@vue/test-utils'

// Component & Data
import ffsponsors from '@/assets/data/sponsors.json';
import Sponsors from '@/views/Sponsors.vue'

describe('Sponsors.vue', () => {
  let wrapper
  
  const mountFunction = options => {
    return shallowMount(Sponsors, {
      ...options,
    })
  }

  beforeEach(() => {
    wrapper = mountFunction()
  })

  it('should be mounted and have ffsponsors data', () => {
    expect(!!wrapper.vm).toBeTruthy()
    expect(wrapper.vm.ffsponsors).toEqual(ffsponsors)
  })
})
