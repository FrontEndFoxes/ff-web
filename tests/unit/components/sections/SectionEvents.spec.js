import { shallowMount } from '@vue/test-utils'

// Component & Data
import events from '@/assets/data/events.json'
import SectionEvents from '@/components/sections/SectionEvents.vue'

describe('SectionEvents.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return shallowMount(SectionEvents, {
            ...options,
        })
    }

    beforeEach(() => {
        wrapper = mountFunction()
    })

    it('should be mounted and have events data', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.events).toEqual(events)
    })
})
