import { shallowMount } from '@vue/test-utils'

// Component & Data
import ffstaff from "@/assets/data/staff.json";
import Team from '@/views/Team.vue'

describe('Team.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return shallowMount(Team, {
            ...options,
        })
    }

    beforeEach(() => {
        wrapper = mountFunction()
    })

    it('should be mounted and have ffstaff data', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.ffstaff).toEqual(ffstaff)
    })
})
