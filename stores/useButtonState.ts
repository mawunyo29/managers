type ButtonState = {
    isButtonDisabled: boolean
    isButtonLoading: boolean
    clickHandler: () => void
    setButtonState: (state: ButtonState) => void

}
type IsClicked = {
    isClicked: boolean
}
type IsButtonDisabled = {
    isButtonDisabled: boolean
}

type IsButtonLoading = {
    isButtonLoading: boolean
}
type ElementClicked = {
    elementClicked: HTMLElement,
}

export const useButtonState = defineStore('buttonState', () => {
    const isButtonDisabled = ref(false)
    const isButtonLoading = ref(false)
    const setButtonState = (state: IsClicked) => {
        return state
    }
    const clickHandler = () => {
        isButtonLoading.value = true
        setTimeout(() => {
            isButtonLoading.value = false
        }, 1000)
    }

    const elementClicked = ref<ElementClicked | null>(null)
    const isElement = computed(() => elementClicked.value)
    const isClicked = ref<IsClicked | false>(false)
    const isClickedState = computed({
        get: () => {
            return isClicked.value
        
        },
        set: (value) => {
            isClicked.value = value as IsClicked
        }

    })
    const handlerEvent = (event: Event) => {
        if (!elementClicked.value.elementClicked.contains(event.target as Node)) {
            window.removeEventListener('click', handlerEvent)
            //dispatch('clickOutside')
          
            isClickedState.value = false
           
        }
    }

    const listenForClickOutside = (state: IsClicked, element: ElementClicked) => {
        if (state) {
            isClicked.value = state
            elementClicked.value.elementClicked = element
            window.addEventListener('click', handlerEvent)
        }
        if (!state) {
            window.removeEventListener('click', handlerEvent)
        }


    }

    return {
        isButtonDisabled,
        isButtonLoading,
        clickHandler,
        isClickedState,
        isClicked,
        elementClicked,
        listenForClickOutside,
        handlerEvent,

    }
})

