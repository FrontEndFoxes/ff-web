import { shallowMount } from '@vue/test-utils'

// Component
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
    let wrapper
    
    const mountFunction = options => {
        return shallowMount(Header, {
            ...options,
        })
    }

    beforeEach(() => {
        process.client = true
        wrapper = mountFunction()
    })

    it('should be mounted and have isOpen set to false', () => {
        expect(!!wrapper.vm).toBeTruthy()
        expect(wrapper.vm.isOpen).toBeFalsy()
    })

    it('should negate isOpen when drawer method is called', () => {
        wrapper.vm.drawer()
        wrapper.vm.$nextTick()
        expect(wrapper.vm.isOpen).toBeTruthy()
    })

    it('should set isOpen to when the key 27 is pressed and isOpen is true', () => {
        const event = new KeyboardEvent('keydown', { 'keyCode': 27 });
        process.client = false
        wrapper = mountFunction({
        data() {
            return {
            isOpen: true,
            }
        }
        })
        document.dispatchEvent(event);
        expect(wrapper.vm.isOpen).toBeFalsy()
    })
})
