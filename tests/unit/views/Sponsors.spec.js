import { mount } from '@vue/test-utils'

// Component & Data
import ffsponsors from '@/assets/data/sponsors';
import Sponsors from '@/views/Sponsors.vue'

describe('Sponsors.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return mount(Sponsors, {
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

    it('should be mounted and have ffsponsors English data', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.ffsponsors["en"]).toEqual(ffsponsors["en"])
    })
})
