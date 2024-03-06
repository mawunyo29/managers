<template>
    <TransitionRoot as="div" :show="isOpen" class="absolute top-16  right-0  sm:right-3">
        <TransitionChild   enter=" ease-in-out  transition-transform" enter-from="translate-x-full origin-right"
      enter-to="translate-x-0" leave="transition ease-in-out  transition-transform" leave-from="translate-x-0"
      leave-to="translate-x-full">
           <slot></slot>
        </TransitionChild>
    </TransitionRoot>
</template>

<script setup>
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
const props = defineProps({
    toggleOpen: {
        type: Boolean,
        default: false
    },
    buttonEvent: {
        type: Object,
        default: () => {}
    }
})
const emit = defineEmits(['update:clickOutside'])

const isOpen = computed({
    get: () => props.toggleOpen,
    set: (value) => {
        emit('update:clickOutside', value)
    }
})
const buttonEvent = computed(() => props.buttonEvent)
const clickOutsideButton = (e) => {
    if (isOpen.value && buttonEvent.value && !buttonEvent.value.contains(e.target)) {
        console.log('click outside button');
        emit('update:clickOutside')
    }
};

onMounted(() => {
    if (isOpen.value) {
        window.addEventListener('click', clickOutsideButton);
    }
});

watch(() => isOpen.value, (newValue, oldValue) => {
    console.log('watch', newValue, oldValue);
    if (newValue) {
        window.addEventListener('click', clickOutsideButton);
    } else {
        window.removeEventListener('click', clickOutsideButton);
    }
});

onUnmounted(() => {
    window.removeEventListener('click', clickOutsideButton);
})
</script>
