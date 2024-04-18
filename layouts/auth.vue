<script  setup>

</script>

<template>
  <div>
    <AuthentificateHead />
    <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
     <asidenav />
      <div class="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
      <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <main class=" min-h-screen p-4 w-full">
          <slot />
        </main>

      </div>

    </div>

  </div>
</template>

<style scoped>
[sidebar-toggle-item] {
  transition: all 0.2s;
}

[sidebar-toggle-item]:hover {
  color: #4f46e5;
}

[sidebar-bottom-menu] {
  bottom: 0;
  left: 0;
}

[sidebar-bottom-menu] a {
  transition: all 0.2s;
}

[sidebar-bottom-menu] a:hover {
  color: #4f46e5;
}

[sidebar-bottom-menu] button {
  transition: all 0.2s;
}

[sidebar-bottom-menu] button:hover {
  color: #4f46e5;
}

[sidebar-bottom-menu] button svg {
  transition: all 0.2s;
}

[sidebar-bottom-menu] button:hover svg {
  fill: #4f46e5;
  transform: scale(1.1);
}

[sidebar-bottom-menu] [data-tooltip-target] {
  transition: all 0.2s;
}

[sidebar-bottom-menu] [data-tooltip-target]:hover {
  color: #4f46e5;
}

[sidebar-bottom-menu] [data-dropdown-toggle] {
  transition: all 0.2s;
}

[sidebar-bottom-menu] [data-dropdown-toggle]:hover {
  color: #4f46e5;
}

[sidebar-bottom-menu] [data-dropdown-toggle]:hover svg {
  fill: #4f46e5;
}

.open-container {
  transition: max-height 0.3s ease-out, padding 0.3s ease;
}</style>
