import { mount } from '@vue/test-utils'

// Component & Data
import SectionMessage from '@/components/sections/SectionMessage.vue'

describe('SectionMessage.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(SectionMessage, {
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
