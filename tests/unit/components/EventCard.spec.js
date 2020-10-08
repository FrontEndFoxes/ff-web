import { shallowMount } from '@vue/test-utils'

// Component & Data
import EventCard from '@/components/EventCard.vue'

describe('EventCard.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return shallowMount(EventCard, {
            props: {
                eventToShow: {}
            },
            ...options,
        })
    }

    beforeEach(() => {
        wrapper = mountFunction()
    })

    it('should be mounted and bgEventImage should be empty', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.bgEventImage).toEqual('')
    })

    it('should set bgEventImage to empty string when eventToShow is undefined', () => {
        wrapper = mountFunction({
        props: {
            eventToShow: undefined
        },
        })
        expect(wrapper.vm.bgEventImage).toEqual("")
    })

    it('should set bgEventImage when eventToShow comes with an image property', () => {
        const responseObject = {
        "background-image": "url(bgEventImage.jpg)",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        height: "13rem",
        }

        wrapper = mountFunction({
        props: {
            eventToShow: {
            image: 'bgEventImage.jpg'
            }
        },
        })
        expect(wrapper.vm.bgEventImage).toEqual(responseObject)
    })
})
