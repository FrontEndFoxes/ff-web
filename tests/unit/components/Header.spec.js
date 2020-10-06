import { shallowMount } from '@vue/test-utils'

// Component
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  let wrapper
  
  const mountFunction = options => {
    return shallowMount(Header, {
      ...options,
    })
  }

  beforeEach(() => {
    wrapper = mountFunction()
  })

  it('should be mounted and have isOpen set to false', () => {
    expect(!!wrapper.vm).toBeTruthy()
    expect(wrapper.vm.isOpen).toBeFalsy()
  })

  it('should negate isOpen when drawer method is called', () => {
    wrapper.vm.drawer()
    wrapper.vm.$nextTick()
    expect(wrapper.vm.isOpen).toBeTruthy()
  })
})
