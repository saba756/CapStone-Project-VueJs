
<template>
  <Layout>
    <template v-slot:header> Header </template>
    <template v-slot:sidebar>
      <Album v-for="album in albums" :key="album.id" :album="album">
        {{ album.title }}
      </Album>
    </template>
    <template v-slot:content>
     <router-view />
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import Album from "./Album.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Layout,
    Album,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("albums/fetch");
    });
    const albums = computed(() => {
      return store.state.albums.all;
    });

    const photos = computed(() => {
      return store.state.photos.all;
    });

    return {
      albums,
      photos,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
