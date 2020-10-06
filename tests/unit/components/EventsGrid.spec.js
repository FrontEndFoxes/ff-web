import { shallowMount } from '@vue/test-utils'

// Component & Data
import events from '@/assets/data/events.json'
import EventsGrid from '@/components/EventsGrid.vue'

describe('EventsGrid.vue', () => {
  let wrapper
  
  const mountFunction = options => {
    return shallowMount(EventsGrid, {
      ...options,
    })
  }

  beforeEach(() => {
    wrapper = mountFunction()
  })

  it('should be mounted and have events data', () => {
    expect(!!wrapper.vm).toBeTruthy()
    expect(wrapper.vm.events).toEqual(events)
  })
})
