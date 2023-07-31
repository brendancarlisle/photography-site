<template>
  <q-page class="q-pa-md" style="overflow: hidden">
    <div class="text-center text-primary text-h3 title-font full-width">
    {{ galleryName }}
    </div>
    <div class="row q-py-lg">
      <q-card flat class="col-grow bg-grey-1">
        <!-- Carousel of photos to display -->
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          style="width: 100%"
          >
          <!--TODO: Update size and photos  -->
          <!-- TODO: For each gallery, create an assets/img folder of the pics, create a list of pic objects,
          pass that list to this page, list.src for src=, probably scale down for fit -->
          <q-carousel-slide
            :name="1"          >
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img fit="fit" class="rounded-borders col-4 full-height" src="public/static/img/IMG_0300.JPG" />
            <q-img fit="scale-down" class="rounded-borders col-4 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
            <q-img fit="scale-down" class="rounded-borders col-4 full-height" src="public/static/img/IMG_0300.JPG" />
          </div>
          </q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
          <q-carousel-slide
            :name="5"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
        </q-carousel>
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
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent ({
  name: 'GalleryDisplayPage',
  setup() {
    const route = useRoute();

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

    let galleryName
    for(let i = 0; i < weds.length; i++) {
      if(route.params.galleryName === weds[i].galleryName) {
        galleryName = weds[i].title
      }
    }

    console.log(galleryName)

    return {
      weds,
      galleryName,
      slide: ref(1),
      autoplay: ref(true),
      carousel: ref(false),
    }
  }
})
</script>
