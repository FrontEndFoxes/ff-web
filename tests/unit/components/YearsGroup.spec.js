import { shallowMount } from '@vue/test-utils'

// Component & Data
import YearsGroup from '@/components/YearsGroup.vue'

describe('YearsGroup.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return shallowMount(YearsGroup, {
            props: {
                currentYear: '20XX'
            },
            ...options,
        })
    }

    beforeEach(() => {
        wrapper = mountFunction()
    })

    it('should be mounted and yearSelected equal to prop currentYear', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.yearSelected).toEqual('20XX')
    })

    it('should set yearSelected to the year sent, when show method is called', () => {
        wrapper.vm.show('2050')
        wrapper.vm.$nextTick()
        expect(wrapper.vm.yearSelected).toEqual('2050')
    })

    it('paintYearSelected method should return cssNormal classes when is called with a different year', () => {
        const cssNormal = "years__title"
        const result = wrapper.vm.paintYearSelected('2050')
        wrapper.vm.$nextTick()
        expect(result).toEqual([cssNormal, cssNormal])
    })

    it('paintYearSelected method should return cssSelected & cssNormal classes when is called with the same year', () => {
        const cssNormal = "years__title"
        const cssSelected = "years__title--selected"
        const result = wrapper.vm.paintYearSelected('20XX')
        wrapper.vm.$nextTick()
        expect(result).toEqual([cssSelected, cssNormal])
    })
})
