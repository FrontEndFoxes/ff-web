import { shallowMount } from '@vue/test-utils'

// Component
import NotFound from '@/views/NotFound.vue'

describe('NotFound.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return shallowMount(NotFound, {
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
