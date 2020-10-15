import { shallowMount } from '@vue/test-utils'
import router from '@/router'

// Component
import App from '@/App.vue'

describe('App.vue', () => {
    let wrapper

    const mountFunction = options => {
        return shallowMount(App, {
            global: {
                plugins: [
                    router
                ]
            },
            ...options,
        })
    }

    beforeEach(async () => {
        router.push('/')
        await router.isReady()
        wrapper = mountFunction()
    })

    it('should be mounted', () => {
        expect(!!wrapper.vm).toBeTruthy()
    })
})
