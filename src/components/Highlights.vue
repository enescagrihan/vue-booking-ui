<template>
  <section class="Highlights">
      <div class="container">
          <div class="slider">
              <flickity :options="flickityOptions">
                <div class="carousel-cell" v-for="(slide, index) in slides" :key="index">
                    <div class="carousel-picture" :style="{ 'background-image': 'url(' + slide.photoUrl+ ')'}">
                        <div class="carousel-picture-text">
                            <h3 class="carousel-cityName">{{slide.cityName}}</h3>
                            <small class="carousel-static-text">Top reasons to visit:</small>
                            <h4 class="carousel-visit-reasons">{{slide.visitReasons}}</h4>
                        </div>
                    </div>
                    <div class="carousel-info">
                        <div class="carousel-container">
                            <div class="carousel-info-header">
                                <h3>Still planning a trip to {{slide.cityName}}?</h3>
                            </div>
                            <div class="carousel-info-date-and-person">
                                <span class="material-icons">date_range</span>
                                <b style="font-size: 15px;">{{slide.date}} </b>
                                <small class="seperate-char">/</small> 
                                <small> {{slide.roomInfo}} room, {{slide.personInfo}}</small>
                            </div>
                            <div class="carousel-info-button">
                                <button class="button">View properties</button>
                            </div>
                        </div>
                    </div>
                </div>
              </flickity>
          </div>

          <div class="options">
              <div class="option option-selected">
                  <h3 class="option-header">New deals listed daily - for every budget!</h3>
                  <p class="option-text">No booking fees / Save money!</p>
                  <a class="link-blue" href="">We match price</a>
              </div>

              <div class="option">
                  <h3 class="option-header"><span class="option-header-blue">1,490,411</span> properties worldwide</h3>
                  <p class="option-text">Including 829,668 holiday rentals in 121,734 destinations in 229 countries <a class="link-blue" href="">List your property</a></p>
              </div>

              <div class="option">
                  <h3 class="option-header">Make changes to your booking, anytime</h3>
                  <p class="option-text">You can make changes,span <a class="link-blue" href="">send a request or cancel</a> in just a few clicks.</p>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
    components : {
        Flickity
    },
    data() {
        return {
            selectedCarouselIndex : 0,
            flickityOptions: {
                cellAlign: 'left',
                contain: true,
                prevNextButtons: false,
                pageDots: false,
            }
        }
    },
    computed : {
        slides() {
            return this.$store.getters.slides;
        }
    },
}
</script>

<style lang="scss">

.Highlights {
    margin-bottom: 48px;
    overflow: hidden;

    @include bPoint("tablet") {
        overflow: visible;
    }
    @include bPoint("for-search") {
        margin-bottom: 70px;
    }

    .container {
        padding-right: 0;
    }    
}

.slider {
    margin-bottom: 45px;

    .flickity-viewport {
        overflow: visible;
    
        @include bPoint("for-search") {
            overflow: visible;
        }
    }

    @include bPoint("tablet") {
        transform: translateY(-50%);
        margin-bottom: 0;
    }
}

.carousel-cell {
    height: 200px;
    display: flex;
    margin-right: 30px;
    box-shadow: 0 5px 30px rgba($color: #000000, $alpha: .2);

    &:first-child .carousel-info {
        @include bPoint("tablet") {
            display: flex;
        }
    }
}

.carousel-picture {
    width: 300px;
    height: 100%;
    background: center bottom no-repeat;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 100%;
        background-color: rgba($color: #337F7C, $alpha: .3);
    }

    &-text {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
    }
}

.carousel-cityName {
    margin-bottom: 2px;
}

.carousel-info {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    background-color: white;
    
    .material-icons {
        color: $color-icon-gray;
        font-size: 19px;
        margin-right: 5px;
    }

    .seperate-char {
        margin-right: 7px;
        margin-left: 7px;
    }

    &-header {
        margin-bottom: 10px;
        color: $color-navy;
    }

    &-date-and-person {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
}

.options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;    
    margin-left: -20px;       
    @include bPoint("for-search") {
        justify-content: space-between;
    }

    .option {
        width: 350px;
        height: 195px;
        background-color: #fff;
        padding: 46px;
        transition: .4s;
        margin-bottom: 22px;
        @include bPoint("tablet") {
            width: 370px;

        }

        &:last-child {
            margin-bottom: 0;
        }
        
        @include bPoint("for-search") {
            margin-bottom: 0;
        }
        
        &:hover, &-selected {
            box-shadow: 0 0px 20px rgba($color: #000000, $alpha: .1);
        }

        &-header {
            color: $color-dark-blue;
            margin-bottom: 20px;
            font-size: 19px;

            &-blue {
                color: $color-button-blue;
            }
        }

        &-text {
            color: #676767;
            font-size: 15px;
        }
    }
}

</style>