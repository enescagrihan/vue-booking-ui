<template>
  <section>
      <div class="container">
          <h1 class="section-title">More Destinations</h1>
          <div class="Destinations">
              <div class="Destination" v-for="(item, index) in destinations" :key="index">
                  <div class="Destination-image">
                      <img :src="item.destinationImg" alt="">
                  </div>
                  <div class="Destination-body">
                      <div class="Destination-body-header">
                          <div class="Destination-body-header-location">
                              <h3 class="Destination-body-header">{{item.destinationName}}</h3>
                              <div class="Destination-body-location">
                              <span class="material-icons icon-location">place</span>
                              <p>{{item.destinationCountry}}</p>
                              <span v-if="item.showTopIcon" class="material-icons icon-top">stars</span>
                              <span v-if="item.showPlaneIcon" class="material-icons icon-airplane">airplane_ticket</span>
                            </div>
                        </div>
                        <div class="Destination-body-header-right-arrow">
                            <span class="material-icons icon-body-right-arrow">keyboard_arrow_right</span>
                        </div>
                      </div>
                      <a href="" class="Destination-body-info">{{item.destinationInfo}}</a>
                  </div>
              </div>
              <button class="button button-big">Show me all destinations <span class="material-icons icon-right-arrow">keyboard_arrow_right</span> </button>
          </div>
          <div class="Section-info">
              <div class="Section-info-item">
                  <span class="material-icons icon-info-answer">question_answer</span>
                  <div class="Section-info-item-body">
                      <h2 class="Section-info-header"><span class="light-blue-text">131,130,000</span><br> reviews</h2>
                      <p class="Section-info-text">Real guests. Real stays. Real opinions to help you make the right choice.</p>
                  </div>
              </div>
              <div class="Section-info-item">
                  <span class="material-icons icon-info-review">rate_review_round</span>
                  <div class="Section-info-item-body">
                      <h2 class="Section-info-header">We're here to help <br><span class="light-blue-text">24/7</span></h2>
                      <p class="Section-info-text">Find answers, manage your booking and more in our <a href="" class="link-blue">Help Center</a>.</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    computed : {
        destinations() {
            return this.$store.getters.destinations;
        }
    }
}
</script>

<style lang="scss">
.Destinations {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // @include bPoint("for-search") {
    //     justify-content: space-between;
    // }

    .button-big {
        width: 370px;
        height: 100px;
        font-size: 17px;
        border-radius: 2px;
        font-weight: normal;
        color: rgba($color: white, $alpha: .8);
        display: flex;
        align-items: center;
        justify-content: center;
        
        margin-bottom: 45px;

        @include bPoint("for-search") {
            margin-right: 0;
            margin-left: 0;
        }
    }

    .icon-right-arrow {
        color: rgba($color: white, $alpha: .8);
        margin-left: 20px;
    }
}

.Destination {
    display: flex;
    margin-bottom: 45px;    

    &-image {
        img {
            width: 100px;
            height: 100px;
        }
    }

    &-body {
        width: 250px;
        height: 100px;
        background: white;
        margin-left: 20px;
        border-bottom: 2px solid #F7F8FB;

        &:hover {
            cursor: pointer;
        }

        .icon-body-right-arrow {
            transition: .3s;
            color: $color-icon-gray;
        }

        &:hover .icon-body-right-arrow{
            transform: translateX(-25px);
        }
        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $color-dark-blue;
        }

        &-location {
            display: flex;
            align-items: center;
            color: $color-icon-gray;
        }

        &-info {
            font-size: 14px;
            width: 240px;
            display: inline-block;
            margin-top: 10px;
            text-decoration: underline;
            color: #BFC4CD;
        }
        // moved to global.scss
        // .icon-location {
        //     color: $color-icon-gray;
        //     font-size: 20px;
        //     position: relative;
        //     left: -2px;
        // }

        .icon-top {
            font-size: 22px;
            color: $color-yellow;
            margin-left: 5px;
        }
        
        .icon-airplane {
            color: $color-button-blue;
            margin-left: 5px;
        }
    }
}

.Section-info {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    // margin-bottom: 25px;
    margin-top: 30px;
    overflow-x: hidden;
    @include bPoint("desktop") {
        flex-direction: row;
    }

    &-item {
        display: flex;
        justify-content: center;
        width: 300px;

        margin-bottom: 70px;

        .icon-info-answer, .icon-info-review {
            font-size: 55px;
            color: $color-dark-blue;
            width: 55px;
            margin-right: 30px;
        }
    }

    &-header {
        margin-bottom: 20px;
        color: $color-dark-blue;
    }

    &-text {
        color: $color-icon-gray;
    }
}
</style>