<template>
  <q-page padding>
    <div class="q-pa-xl text-h3 text-center text-primary title-font">
      Coming Soon!
    </div>
    <!-- <div class="center q-px-md text-center q-pt-xl">
      <q-card flat class="bg-grey-1">
        <div class="text-h3 text-primary title-font q-pb-lg">
          Wedding & Engagement Photo Galleries
        </div>
        <q-card-section>
          <q-img
            v-for="wed in weds"
            :key="wed.title"
            :src="wed.img"
            fit="fill"
            style="max-height: 300px; max-width: 300px"
            class="rounded-borders col-shrink q-ma-md cursor-pointer"
            @click="$router.push(`/gallery/${wed.galleryName}`)"
          >
            <div class="absolute-bottom text-h6 text-center title-font">
              {{ wed.title }}
            </div>
          </q-img>
        </q-card-section>
      </q-card>
    </div>
    <div class=" center offset-1 text-h3 text-primary title-font text-center q-pt-xl q-pb-md">
      Let's Chat!
    </div>
    <div class="center" style="width: 70%">
      <iframe
        name="lc_contact_form"
        frameborder="0"
        width="100%"
        height="600"
        src="https://515338.17hats.com/p#/embed/fsvfbdvnckzxtkvcpztnsfghtrhgwkvc"
      />
    </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GalleryPage',
  setup() {
    // TODO: Put this in a store
    const weds = [
      {
        title: "Sunflower Hill Farm Wedding",
        img: "public/static/img/IMG_0300.JPG",
        id: 1,
        galleryName: "sunflower-hill-farm-wedding"
      },
      {
        title: "Forest Park Wedding",
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        id: 2,
        galleryName: "forest-park-wedding",
      },
      {
        title: "Dodson Orchards Wedding",
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        id: 3,
        galleryName: "dodson-orchards-wedding",
      },
      {
        title: "Hane Valley Engagement",
        img: "public/static/img/IMG_0300.JPG",
        id: 4,
        galleryName: "hane-valley-engagement",
      },
      {
        title: "Forest Park Engagement",
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        id: 5,
        galleryName: "gallery",
      },
      {
        title: "St. Louis Public Library Engagement",
        img: "public/static/img/IMG_0300.JPG",
        id: 6,
        galleryName: "gallery",
      },
    ];

    return {
      weds
    }
  }
})
</script>
