import { mount } from '@vue/test-utils'

// Component & Data
import ffevents from '@/assets/data/events-home'
import SectionEvents from '@/components/sections/SectionEvents.vue'

describe('SectionEvents.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(SectionEvents, {
            data() {
                return {
                    ffevents: ffevents,
                };
            },
            computed: {
                events() {
                    const currentLocal = this.$i18n.locale;
                    return this.ffevents[currentLocal];
                },
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
        expect(wrapper.vm.ffevents["en"]).toEqual(ffevents["en"])
    })
})
