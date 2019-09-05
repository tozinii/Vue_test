<template>
  <div class="fotos">
    <h1>Images list</h1>
    <Foto />
  </div>
</template>

<script>
import Foto from '@/components/Foto.vue';

export default {
  name: 'Fotos',
  components: {
    Foto
  }
};
</script>
