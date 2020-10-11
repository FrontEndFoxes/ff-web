import { mount } from '@vue/test-utils'

// Component & Data
import events from '@/assets/data/events-home'
import SectionEvents from '@/components/sections/SectionEvents.vue'

describe('SectionEvents.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return mount(SectionEvents, {
            global: {
                mocks: {
                    $t: (msg) => msg,
                    $i18n: {
                        locale: "en"
                    }
                }
            }
        })
    }

    beforeEach(() => {
        wrapper = mountFunction()
    })

    it('should be mounted and have events English data', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.ffevents["en"]).toEqual(events["en"])
    })
})
