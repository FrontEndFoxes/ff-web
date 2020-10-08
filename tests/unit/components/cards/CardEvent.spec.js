import { shallowMount } from '@vue/test-utils'

// Component & Data
import CardEvent from '@/components/cards/CardEvent.vue'

describe('CardEvent.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return shallowMount(CardEvent, {
            props: {
                event: {}
            },
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
