<script lang="ts" setup>
  const props = defineProps<{
    type: 'button' | 'submit' | 'reset'
    color: 'primary' | 'secondary' | 'danger'
    size: 'sm' | 'md' | 'lg'
    label: string,
    rounded: string,
    classes: string
  }>()
  const type = props.type || 'button'
  const color = props.color || 'primary'
  const size = props.size || 'md'
  const label = props.label || 'Button'
  const rounded = props.rounded || 'rounded-lg'
  

  const defaultClass = ref([
    'py-2.5',
    'px-5',
    'me-2',
    'mb-2',
    `text-${size}`,
    'font-medium',
    'text-gray-900',
    'focus:outline-none',
    'bg-white',
    'text-center',
    'text-gray-700',
    rounded,
    'border',
    'border-gray-200',
    'hover:bg-gray-100',
    'focus:z-10',
    'focus:ring-4',
    'focus:ring-gray-100',
    'dark:focus:ring-gray-700',
    'dark:bg-gray-800',
    'dark:text-gray-400',
    'dark:border-gray-600',
    'dark:hover:text-white',
    'dark:hover:bg-gray-700'
  ])
 const propsClasses = computed(() => {
  //transforme la chaine de caractère en tableau
  return props.classes.split(' ') || [] as any
    
  })
  if (color === 'primary') {
    defaultClass.value.push('text-gray-700', 'bg-primary-700', 'hover:bg-primary-500', 'focus:ring-primary-300', 'dark:focus:ring-primary-800' ,'hover:text-gray-50')
  } else if (color === 'secondary') {
    defaultClass.value.push('text-gray-700', 'bg-secondary-700', 'hover:bg-secondary-800', 'focus:ring-secondary-300', 'dark:focus:ring-secondary-800', 'hover:text-gray-700')
  } else if (color === 'danger') {
    defaultClass.value.push('text-gray-700', 'bg-red-700', 'hover:bg-red-800', 'focus:ring-red-300', 'dark:focus:ring-red-800')
  }else {
    defaultClass.value = [...defaultClass.value, ...propsClasses.value]
    
  }

</script>

<template>
  <button :type="type" :class="defaultClass"  >
    {{ label }} 
  </button>
</template>

<style scoped></style>