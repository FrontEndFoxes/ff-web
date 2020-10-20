import { mount } from '@vue/test-utils'

// Component & Data
import CardSponsor from '@/components/cards/CardSponsor.vue'

describe('CardSponsor.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(CardSponsor, {
            props: {
                sponsor: {
                    id: 2,
                    title: "Share Now",
                    description: "YOUR FUTURE CAR IS NOW. All you need to know about your future car, right here.",
                    logo: "https://res.cloudinary.com/front-end-foxes/image/upload/v1601861222/Sponsors/sponsor-share-now_wfi0f2.png",
                    link: "https://www.share-now.com/",
                    active: true,
                    level: "platinum"
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
