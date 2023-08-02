<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1 paragraph-font">
    <q-header reveal class="bg-grey-1 text-primary">
      <q-toolbar>
        <q-btn flat @click="bar = true" round dense icon="menu" />
        <q-toolbar-title class="title-font text-center">Kayla Carlisle Photography</q-toolbar-title>
      </q-toolbar>
      <q-dialog v-model="bar" maximized>
        <q-card class="bg-grey1 text-primary">
            <q-btn class="absolute-top-right" size="lg" dense flat icon="close" v-close-popup />
          <q-card-section class="absolute-center text-center text-h5 text-primary">
            <q-list>
              <q-item clickable to="/">
                HOME
              </q-item>
              <q-item clickable to="/about">
                ABOUT
              </q-item>
              <q-item clickable to="/gallery">
                GALLERY
              </q-item>
              <q-item clickable to="/investment">
                INVESTMENT
              </q-item>
              <q-item clickable to="/contact">
                CONTACT
              </q-item>
            </q-list>
            
          </q-card-section>
  
        </q-card>
      </q-dialog>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-3 text-primary paragraph-font text-center">
      <q-toolbar>
        <div>
          <!-- <q-icon name="fa-brands fa-facebook-f" /> -->
          <q-btn flat size="sm" icon="fa-brands fa-facebook-f" @click="routeToFacebook"/>
          <q-btn flat size="sm" icon="fa-brands fa-instagram" @click="routeToInsta"/>
        </div>
        <q-space />
        <!-- <div class="absolute-center">Photographing weddings in the St. Louis metro area and beyond</div> -->
        <!-- <q-space /> -->
        <div class="text-left">
          Email: kayla@weddingsbykmc.com
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
      routeToInsta,
      bar: ref(false)
    }
  }
});
</script>