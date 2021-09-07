<template>
  <section class="destinations-we-love">
      <div class="container">
          <h1 class="section-title">Destinations we love</h1>

          <div class="review-tabs">
              <input type="radio" name="destination-tabs" id="regions" checked="checked">
              <label for="regions">Regions</label>
              <div class="tab">
                  <a class="tab-item" href="" v-for="(item, index) in hotelReviews" :key="index">
                      <h3 class="header-dark-blue tab-item-header">{{item.cityName}}</h3>
                      <small class="review-text tab-item-text">{{item.reviewCount}} hotel reviews</small>
                  </a>
              </div>

              <input type="radio" name="destination-tabs" id="cities">
              <label for="cities">Cities</label>
              <div class="tab">
                  <a class="tab-item" href="" v-for="(item, index) in bbInnReviews" :key="index">
                      <h3 class="header-dark-blue tab-item-header">{{item.cityName}}</h3>
                      <small class="review-text tab-item-text">{{item.reviewCount}} hotel reviews</small>
                  </a>
              </div>

              <input type="radio" name="destination-tabs" id="places-of-interest">
              <label for="places-of-interest">Places of interest</label>
              <div class="tab">
                  <a class="tab-item" href="" v-for="(item, index) in holidayRentalReviews" :key="index">
                      <h3 class="header-dark-blue tab-item-header">{{item.cityName}}</h3>
                      <small class="review-text tab-item-text">{{item.reviewCount}} hotel reviews</small>
                  </a>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    computed : {
        hotelReviews() {
            return this.$store.getters.hotelReviews;
        },
        bbInnReviews() {
            return this.$store.getters.bbInnReviews;
        },
        holidayRentalReviews() {
            return this.$store.getters.holidayRentalReviews;
        }
    }
}
</script>

<style lang="scss">
.destinations-we-love {
    margin-bottom: 130px;
}

.review-tabs {

    label {
        padding: 15px 25px;
        border-radius: 0;
    }
}

</style>