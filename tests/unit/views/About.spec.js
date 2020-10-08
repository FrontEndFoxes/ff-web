import { shallowMount } from '@vue/test-utils'

// Component
import About from '@/views/About.vue'

describe('About.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return shallowMount(About, {
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
