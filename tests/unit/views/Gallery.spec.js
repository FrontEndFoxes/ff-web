import { mount } from '@vue/test-utils'

// Component & Data
import Gallery from '@/views/Gallery.vue'
import ffEventsGalleries from "@/assets/data/events-gallery";


describe('Gallery.vue', () => {
    let wrapper

    const mountFunction = options => {
        return mount(Gallery, {
            data() {
                return {
                    ffEventsGalleries: ffEventsGalleries,
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

    it('should be mounted and ffEventsGalleries data is the same as the json file', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.ffEventsGalleries["en"]).toEqual(ffEventsGalleries["en"])
    })

    it('should set yearToFilter to the year sent, when onShow method is called', () => {
        wrapper.vm.onShow('2050')
        wrapper.vm.$nextTick()
        expect(wrapper.vm.yearToFilter).toEqual('2050')
    })
})
