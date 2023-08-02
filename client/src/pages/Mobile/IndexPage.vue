<template>
  <q-page class="paragraph-font flex-shrink">
    <div class="row">
      <q-card flat class="col-grow bg-grey-1">
        <!-- Carousel of photos to display -->
        <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" class="q-pa-sm" height="200px">
          <!--TODO: Update size and photos  -->
          <q-carousel-slide :name="1" img-src="static/img/gallery/gallery5.jpg" />
          <q-carousel-slide :name="2" img-src="static/img/home/carousel/carousel2.jpg" />
          <q-carousel-slide :name="3" img-src="static/img/gallery/gallery7.jpg" />
          <q-carousel-slide :name="4" img-src="static/img/gallery/gallery10.jpg" />
          <q-carousel-slide :name="5" img-src="static/img/home/carousel/carousel5.jpg" />
        </q-carousel>
      </q-card>
    </div>
    <div class="row q-pa-sm q-pt-lg">
      <div class="col-grow text-center text-wrap">
        <p class="text-h5 text-primary title-font">
          St. Louis Wedding Photographer
        </p>
        <p class="text-body1 paragraph-font">
          JOYFUL, TIMELESS, & ROMANTIC IMAGES FOR MADLY IN LOVE COUPLES
        </p>
        <p class="text-body2 paragraph-font text-justify">
          If you want to look back on your wedding day and see the genuine laughter of the
          people you love, the emotional moments that brought tears to your eyes, and
          gorgeous couple's portraits that will make you swoon - I am your girl!
        </p>
        <q-btn unelevated color="grey-3" class="paragraph-font text-h4" text-color="primary" size="md"
          label="View the Pretty!" to="/gallery" />
      </div>
    </div>
    <div class="row text-center q-pt-lg">
      <q-card flat class="col-grow home-card bg-grey-1">
        <q-card-section horizontal>
          <q-card-section class="q-pt-lg">
            <div class="text-h5 text-primary title-font">Hi, I'm Kayla!</div>
            <div class="text-body1 q-pt-sm">LOVER OF LOVE & THE LITTLE THINGS</div>
            <div class="text-body2 q-pt-sm q-pb-sm text-justify">
              It's cheesy, but I LOVE love. My marriage, my family, my friends, my three
              adorable fur babies. For me, it's all about love! I'm a sucker for true
              crime podcasts, themed girl dates with my friends, and all things Disney!
            </div>
            <q-btn unelevated color="grey-3" size="md" text-color="primary" class="paragraph-font" label="Get to Know Me!"
              to="/about" />
          </q-card-section>
          <q-card-section class="col-5 flex flex-center">
            <q-img class="rounded-borders q-pa-md" src="static/img/about/about-page2.jpg" />
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="row text-center q-pt-xl">
      <q-card flat class="col bg-grey-1">
          <q-card-section class="q-pt-sm">
            <div class="text-h5 text-primary title-font q-ma-xs">Love Notes</div>
            <div class="text-body2 text-justify">
              {{ getReview() }}
            </div>
            <div class="text-caption text-right q-ma-xs">-{{ getReviewer() }}</div>
            <q-btn flat size="md" class="q-pt-xs paragraph-font" text-color="primary" label="More"
              icon-right="chevron_right" @click="incrementIndex()" />
        </q-card-section>
      </q-card>
    </div>
    <!-- <div class="home-card-lg q-px-sm text-center q-pt-lg">
      <q-card flat class="bg-grey-1">
        <div class="text-h5 col-11-md text-primary title-font q-pb-sm">
          Featured Weddings & Engagements
        </div>
        <q-card-section>
          <q-img v-for="wed in featuredWeds" :key="wed.title" :src="wed.img" fit="scale-down"
            class="rounded-borders col-3 q-ma-xs cursor-pointer" style="height: 70%; width: 120px"
            @click="$router.push(wed.galleryURL)">
            <div class="absolute-bottom text-center title-font" style="font-size: x-small">
              {{ wed.title }}
            </div>
          </q-img>
        </q-card-section>
      </q-card>
    </div> -->
    <div class="flex-break" />
    <div class="text-center offset-1 text-h5 text-primary title-font q-pl-md q-pt-md q-pb-md">
      Let's Chat!
    </div>
    <div class="flex-break" />
    <div class="center" style="width: 70%">
      <iframe name="lc_contact_form" frameborder="0" width="100%" height="600"
        src="https://515338.17hats.com/p#/embed/fsvfbdvnckzxtkvcpztnsfghtrhgwkvc" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    let reviewIndex = ref(0);

    const reviews = [
      {
        review:
          "Kayla is amazing! She is everything you could want in someone " +
          "involved with the wedding process which we all know can be stressful as things " +
          "pile up. She is responsive, efficient, easy going, fun and affordable. Shooting our " +
          "engagement photos with her felt effortless. We had never met Kayla before our shoot, " +
          "but she instantly made us feel like old friends which made being on camera (which can feel awkward) " +
          "very easy and comfortable. We had never really been in a photoshoot before, but she set up our poses " +
          "perfectly and gave all the right cues to make sure we got an excellent variety of photos.",
        reviewer: "Owen & Claire",
        img: "static/img/home/reviews/review1.jpg",
      },
      {
        review:
          "My husband and I could not be happier that we chose Kayla to capture our big day! Kayla was extremely " +
          "flexible when it came to our changing plans due to COVID. We had a party bus rented and ended up using it to drive " +
          "around STL and get photos and it was so much fun! Kayla took the best photos, they are seriously drop dead gorgeous. " +
          "The photos perfectly capture every moment of the day from getting ready, to the ceremony, and our mini reception. We had " +
          "bright colors in our wedding and they showed up so great in the photos. I love that she did not over edit the photos or try " +
          "to add lots of filters. When we got the photos back they were organized so well and they were so easy to share. Kayla and her " +
          "assistant were both extremely nice and friendly. I will forever be thankful for the for the wonderful photos we have to remind " +
          "us of our wedding day.",
        reviewer: "Nick & Claire",
        img: "static/img/home/reviews/review2.jpg",
      },
      {
        review:
          "Oh I cannot say enough good things about Kayla! From our engagement session to our wedding day, she " +
          "was like an angel sent from heaven! She was so relaxed on the wedding day that every time I was around her I " +
          "felt a sense of calm relief. I knew that I didn't need to worry about any of the moments of the day being " +
          "captured because Kayla was always there and ready. We love every single one of our photos and get compliments " +
          "on them all the time. The process of working with Kayla was so fun and easy that I would recommend her to anyone!",
        reviewer: "Jordan & Madison",
        img: "static/img/home/reviews/review3.jpg",
      },
    ];

    const featuredWeds = [
      {
        title: "Sunflower Hill Farm Wedding",
        img: "static/img/IMG_0300.JPG",
        id: 1,
        galleryURL: "/gallery",
      },
      {
        title: "Forest Park Wedding",
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        id: 2,
        galleryURL: "/gallery",
      },
      {
        title: "Dodson Orchards Wedding",
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        id: 3,
        galleryURL: "/gallery",
      },
      {
        title: "Hane Valley Engagement",
        img: "static/img/IMG_0300.JPG",
        id: 4,
        galleryURL: "/gallery",
      },
      {
        title: "Forest Park Engagement",
        img: "https://cdn.quasar.dev/img/mountains.jpg",
        id: 5,
        galleryURL: "/gallery",
      },
      {
        title: "St. Louis Public Library Engagement",
        img: "static/img/IMG_0300.JPG",
        id: 6,
        galleryURL: "/gallery",
      },
    ];

    // reviews.length = total number of reviews, but array index is total - 1,
    // therefore, we must check index + 2
    function incrementIndex() {
      if (reviewIndex.value + 2 > reviews.length) {
        reviewIndex.value = 0;
      } else {
        reviewIndex.value++;
      }
    }

    function getReview() {
      return reviews[reviewIndex.value].review;
    }

    function getReviewImg() {
      return reviews[reviewIndex.value].img;
    }

    function getReviewer() {
      return reviews[reviewIndex.value].reviewer;
    }

    function routeToGallery() { }

    return {
      slide: ref(1),
      autoplay: ref(true),
      carousel: ref(false),
      getReview,
      incrementIndex,
      reviewIndex,
      getReviewImg,
      getReviewer,
      featuredWeds,
      routeToGallery,
    };
  },
});
</script>

<style lang="css">
.flex-break {
  flex: 1 0 100% !important;
}

.row .flex-break {
  height: 0 !important;
}

.column .flex-break {
  width: 0 !important;
}
</style>
