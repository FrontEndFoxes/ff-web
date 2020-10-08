import { shallowMount } from '@vue/test-utils'

// Component & Data
import Gallery from '@/views/Gallery.vue'

const ffEventsGalleries = [
    {
        "id": 1,
        "title": "Vue Vixens Day Bogota 2019",
        "country": "Colombia",
        "city": "Bogota",
        "month": "Jun",
        "day": "15th",
        "year": 2019,
        "image": "https://source.unsplash.com/collection/3124375/1600x900",
        "link": "https://www.frontendfoxes.org/gallery/galleries/vue-vixens-day-bogota-2019"
    },
    {
        "id": 2,
        "year": 2019,
    }
]

describe('Gallery.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return shallowMount(Gallery, {
        data () {
            return {
            ffEventsGalleries: ffEventsGalleries,
            }
        },
        ...options,
        })
    }

    beforeEach(() => {
        wrapper = mountFunction()
    })

    it('should be mounted and ffEventsGalleries data is the same as the json file', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.ffEventsGalleries).toEqual(ffEventsGalleries)
    })

    it('yearToFilter should be undefined when there is no years on Events galleries', () => {
        wrapper = mountFunction({
        data () {
            return {
            ffEventsGalleries: [
                {
                "id": 1,
                "title": "Vue Vixens Day Bogota 2019",
                }
            ],
            }
        },
        })
        expect(wrapper.vm.yearToFilter).toEqual(undefined)
    })

    it('yearToFilter should be 0 when there is no Events galleries', () => {
        wrapper = mountFunction({
        data () {
            return {
            ffEventsGalleries: undefined,
            }
        },
        })
        expect(wrapper.vm.yearToFilter).toEqual(0)
    })

    it('should set yearToFilter to the year sent, when onShow method is called', () => {
        wrapper.vm.onShow('2050')
        wrapper.vm.$nextTick()
        expect(wrapper.vm.yearToFilter).toEqual('2050')
    })
})
