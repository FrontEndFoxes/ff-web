import { mount } from '@vue/test-utils'

// Component & Data
import ImageItem from '@/components/ImageItem.vue'
const IMAGE_SRC = "https://res.cloudinary.com/front-end-foxes/image/upload/v1601861222/Sponsors/sponsor-share-now_wfi0f2.png"

describe.only('ImageItem.vue', () => {
    let wrapper

    const mountFunction = () => {
        return mount(ImageItem, {
            props: {
                source: IMAGE_SRC
            },
            directives: {
                lazyload: () => {}
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

    it('should be mounted with an IMG tag', () => {
        const image = wrapper.find('img')
        expect(image.element.tagName).toBe('IMG');
        expect(image.element.src).toBe(IMAGE_SRC);
    })
})
