<template>
  <div class="bg-gray-900">
    <NuxtLayout :layout="layout">
      <NuxtPage />
      <ClientOnly>
        <LazyPageLoader />
      </ClientOnly>
    </NuxtLayout>
  </div>
</template>
<script setup >

const layout = useRoute().meta.layout || 'default'
// const handleBeforeUnload = (event) => {
//   event.preventDefault();
//   event.returnValue = '';
//   console.log('beforeunload');
// };

// const handleLoad =()=> {
//       // Action à effectuer lorsque le DOM complet a été chargé
//       console.log('Le DOM a été entièrement chargé');
//     }

// onUnmounted(() => {
//   window.removeEventListener('beforeunload', handleBeforeUnload);
//   window.removeEventListener('load', handleLoad);
// });


// onMounted(() => {
//   window.addEventListener('beforeunload', handleBeforeUnload);
//   window.addEventListener('load', handleLoad);
// });
</script>
<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>

