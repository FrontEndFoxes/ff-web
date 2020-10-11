import { mount } from '@vue/test-utils'

// Component & Data
import CardEvent from '@/components/cards/CardEvent.vue'

describe('CardEvent.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(CardEvent, {
            props: {
                event: {}
            },
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
