<template>
  <q-layout view="hHh lpR fFf" class="q-pa-md bg-grey-1">
    <q-header reveal class="bg-grey-1 text-primary" height-hint="98">
      <q-tabs align="left" class="paragraph-font">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/gallery" label="Gallery" />
        <q-space />
        <p class="title-font text-primary text-h4 q-my-md">Kayla Carlisle Photography</p>
        <q-space />
        <q-route-tab to="/investment" label="Investment" />
        <q-route-tab to="/contact" label="Contact" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-3 text-primary paragraph-font text-center">
      <q-toolbar>
        <div>
          <!-- <q-icon name="fa-brands fa-facebook-f" /> -->
          <q-btn flat size="md" icon="fa-brands fa-facebook-f" @click="routeToFacebook"/>
          <q-btn flat size="md" icon="fa-brands fa-instagram" @click="routeToInsta"/>
        </div>
        <q-space />
        <div class="absolute-center">Photographing weddings in the St. Louis metro area and beyond</div>
        <q-space />
        <div class="text-left">
          Email: kayla@weddingsbykmc.com <br />
          Phone: 618-334-3237
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    function routeToFacebook() {
      window.open("https://www.facebook.com/KaylaCarlislePhotography/")
    }

    function routeToInsta() {
      window.open("https://www.instagram.com/kaylacarlislephotography/")
    }

    return {
      routeToFacebook,
      routeToInsta
    }
  }
});
</script>