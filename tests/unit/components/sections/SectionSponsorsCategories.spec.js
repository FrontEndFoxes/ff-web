import { mount } from '@vue/test-utils'

// Component & Data
import SectionSponsorsCategories from '@/components/sections/SectionSponsorsCategories.vue'

describe('SectionSponsorsCategories.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(SectionSponsorsCategories, {
            props: {
                sponsors: [
                    {
                        "id": 1,
                        "title": "Frontend Masters",
                        "description": "Advance Your Skills with In-Depth, Modern Front-End Engineering Courses",
                        "logo": "https://res.cloudinary.com/front-end-foxes/image/upload/v1601861223/Sponsors/sponsor-frontendmasters_wtevjd.jpg",
                        "link": "https://frontendmasters.com",
                        "active": true,
                        "level": "platinium"
                    }
                ]
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
