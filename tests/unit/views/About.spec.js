import { mount } from '@vue/test-utils'

// Component
import About from '@/views/About.vue'

describe('About.vue', () => {
    let wrapper
    
    const mountFunction = () => {
        return mount(About, {
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
