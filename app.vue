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
const layout = useRoute().meta.layout || 'guest'
const handleBeforeUnload = (event) => {
  event.preventDefault();
  event.returnValue = '';
  console.log('beforeunload');
};

const handleLoad =()=> {
      // Action à effectuer lorsque le DOM complet a été chargé
      console.log('Le DOM a été entièrement chargé');
    }

onUnmounted(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload);
  window.removeEventListener('load', handleLoad);
});


onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload);
  window.addEventListener('load', handleLoad);
});
</script>

