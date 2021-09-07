<template>
  <section class="section-Aparthotels">
      <div class="container">
          <h1 class="section-title">Aparthotels</h1>
          <div class="Aparthotels">
              <div class="Aparthotels-item" v-for="(item, index) in aparthotels" :key="index">
                  <div class="Aparthotels-item-picture" :style="{'background-image': 'url(' + item.photoUrl + ')'}"></div>
                  <div class="Aparthotels-item-text">
                      <h3 class="hotel-name">{{item.hotelName}}</h3>
                      <small class="location-and-review">
                          <span class="material-icons icon-location">place</span>
                          {{item.hotelLocation}}
                          <a href="" class="review-text">{{item.reviewCount}} reviews</a>
                          </small>
                      <p class="hotel-info">{{item.hotelText}}</p>
                  </div>
              </div>
          </div>
          <button class="button button-navy button-all-hotels">
              All aparthotels <span class="material-icons icon-button-right-arrow">keyboard_arrow_right</span>
               
          </button>
      </div>
  </section>
</template>

<script>
export default {
    computed : {
        aparthotels() {
            return this.$store.getters.aparthotels;
        }
    }
}
</script>

<style lang="scss">
.Aparthotels {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 40px;

    @include bPoint("for-search") {
        justify-content: space-between;
    }

    &-item {
        width: 270px;
        box-shadow: 0 10px 20px rgb(0 0 0 / 4%);

        &-picture {
            width: 240px;
            height: 150px;
            margin-left: 15px;
            margin-top: 15px;
            margin-bottom: 25px;
            background: no-repeat center center / cover;
            position: relative;

            &::before {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                background-color: rgba($color: #337F7C, $alpha: .3);
            }
        }

        &-text {
            margin-left: 25px;
            margin-right: 25px;
            margin-bottom: 25px;

            .hotel-name {
                color: $color-dark-blue;
                margin-bottom: 5px;
            }

            .location-and-review {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                color: #8D9095;
            }

            .hotel-info {
                font-size: 14px;
                color: #3C3C3C;
            }
            
            .review-text {
                color: #8D9095;
                text-decoration: underline;
                margin-left: 15px;
            }
        }
    }
}

.button-all-hotels {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 44px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 70px;
    font-weight: 500;
}
</style>