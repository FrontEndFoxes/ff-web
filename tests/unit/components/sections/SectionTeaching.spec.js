import { mount } from '@vue/test-utils'

// Component & Data
import SectionTeaching from '@/components/sections/SectionTeaching.vue'

describe('SectionTeaching.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(SectionTeaching, {
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

    it('should be mounted', () => {
        expect(!!wrapper.vm).toBeTruthy()
    })
})
