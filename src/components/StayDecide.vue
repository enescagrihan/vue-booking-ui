<template>
  <section class="stay-decide">
      <div class="container">
          <h1 class="section-title title-local">Still deciding where to stay?</h1>
          <h2 class="section-subtitle">We want to make your decision easier! With over 131,150,000 verified guest reviews, we can help you find the perfect place to stay.</h2>

          <div class="review-tabs">
              <input type="radio" name="review-tabs" id="hotel-reviews" checked="checked">
              <label for="hotel-reviews">Hotel reviews</label>
              <div class="tab">
                  <a class="tab-item" href="" v-for="(item, index) in hotelReviews" :key="index">
                      <h3 class="header-dark-blue tab-item-header">{{item.cityName}}</h3>
                      <small class="review-text tab-item-text">{{item.reviewCount}} hotel reviews</small>
                  </a>
              </div>

              <input type="radio" name="review-tabs" id="b&b-inn-reviews">
              <label for="b&b-inn-reviews">B&B & inn reviews</label>
              <div class="tab">
                  <a class="tab-item" href="" v-for="(item, index) in bbInnReviews" :key="index">
                      <h3 class="header-dark-blue tab-item-header">{{item.cityName}}</h3>
                      <small class="review-text tab-item-text">{{item.reviewCount}} hotel reviews</small>
                  </a>
              </div>

              <input type="radio" name="review-tabs" id="rental-reviews">
              <label for="rental-reviews">Holiday rental reviews</label>
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

.stay-decide {
    margin-bottom: 80px;
}

.title-local {
    padding-top: 70px;
    margin-bottom: 30px;
    border-top: 1px solid #E9EDF5;
}

.section-subtitle {
    text-align: center;
    margin-right: 40px;
    margin-left: 40px;
    color: $color-icon-gray;
    font-weight: normal;
    font-size: 21px;
    margin-bottom: 70px;
}

.review-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    input[type="radio"] {
        display: none;
    }

    label {
        padding: 15px 25px;
        border-radius: 3px;
        margin-bottom: 45px;
        color: $color-dark-blue;
    }
}

.tab {
    width: 100%;
    padding: 20px;
    background: #fff;
}

.review-tabs input[type='radio']:checked + label + .tab {
    display: flex;
    justify-content: center;
}

.review-tabs input[type='radio']:checked + label {
    background: $color-dark-blue;
    color: rgba($color: #fff, $alpha: .9);
}

.tab {
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
    order: 1;

    &-item {
        min-width: 210px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &-header {
            margin-bottom: 4px;
        }

        &-text {
            color: $color-icon-gray;
        }
    }
}

</style>