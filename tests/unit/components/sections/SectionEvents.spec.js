import { mount } from '@vue/test-utils'

// Component & Data
import events from '@/assets/data/events-home'
import SectionEvents from '@/components/sections/SectionEvents.vue'

describe('SectionEvents.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(SectionEvents, {
            props: {
                ffevents: {
                    en: [
                        {
                            "id": 1,
                            "title": "Japan Meetup",
                            "date": "2020-10-04T18:25:43.511Z",
                            "startEvent": "4:00 PM",
                            "finishEvent": "05:30 PM",
                            "location": "Madrid",
                            "description": "Lorem ipsum dolor sit amet, consecte adipisc elit, sed do eiusmod tempor.",
                            "cta": "meetup",
                            "active": true,
                            "image": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
                            "link": "#"
                        }
                    ],
                    es: []
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

    it('should be mounted and have events English data', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.ffevents["en"]).toEqual(events["en"])
    })
})
