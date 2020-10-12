import { mount } from '@vue/test-utils'

// Component
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(Home, {
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
