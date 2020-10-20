import { mount } from '@vue/test-utils'

// Component & Data
import CardStaffer from '@/components/cards/CardStaffer.vue'

describe('CardStaffer.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(CardStaffer, {
            props: {
                staffer: {
                    id: 1,
                    name: "Jen Looper",
                    title: "Founder/President",
                    image: "https://res.cloudinary.com/front-end-foxes/image/upload/v1601908830/ChapterLeaders/jlooper_ghqqse.jpg",
                    description: "Jen Looper is a Google Developer Expert and a Cloud Developer Advocate Lead at Microsoft with over 20 years' experience as a web and mobile developer. Based in Boston, Jen specializes in creating cross-platform mobile apps. She's a multilingual multiculturalist with a passion for hardware hacking, mobile apps, machine learning and discovering new things every day. Jen is a mom of two college-aged girls and loves helping women achieve their full potential.",
                    website: "https://jenlooper.com",
                    twitter: "@jenlooper",
                    active: true,
                    group: "leadership"
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
