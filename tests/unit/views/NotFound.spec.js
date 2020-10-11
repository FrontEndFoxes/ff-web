import { mount } from '@vue/test-utils'

// Component
import NotFound from '@/views/NotFound.vue'

describe('NotFound.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return mount(NotFound, {
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
