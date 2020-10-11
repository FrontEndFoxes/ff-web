import { mount } from '@vue/test-utils'

// Component & Data
import ffstaff from "@/assets/data/staff";
import Team from '@/views/Team.vue'

describe('Team.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return mount(Team, {
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

    it('should be mounted and have ffstaff English data', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.ffstaff["en"]).toEqual(ffstaff["en"])
    })
})
