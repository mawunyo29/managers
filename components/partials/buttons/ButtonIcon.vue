<template>
   <component :is="tag" :to="to" class="flex items-center space-x-2">
     <slot name="icon"></slot>
     <span class="text-sm font-medium text-gray-900">
       {{ title }}
     </span>
    </component>
</template>

<script setup>
 const defineProps = (props) => {
  return {
    title: {
      type: String,
      default: 'Apps'
    },
    icon: {
      type: Object,
      default: () => {}
    },
  }
}   
const icon = defineProps.icon
</script>