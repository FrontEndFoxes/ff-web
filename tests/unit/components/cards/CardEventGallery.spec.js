import { mount } from '@vue/test-utils'

// Component & Data
import CardEventGallery from '@/components/cards/CardEventGallery.vue'

describe('CardEventGallery.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(CardEventGallery, {
            props: {
                eventToShow: {
                    country: "Zoom",
                }
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
