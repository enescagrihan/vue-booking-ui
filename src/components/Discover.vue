<template>
  <section class="section-Discover">
      <div class="container">
          <h1 class="section-title section-title-local">Discover</h1>

          <div class="Discover">
              <div class="Discover-item" v-for="(item, index) in discoverList" :key="index">
                  <div class="Discover-item-picture" :style="{'background-image' : 'url(' + item.pictureUrl + ')'}">
                      <div class="Discover-item-picture-text">
                        <h2>{{item.countryName}}</h2>
                        <p>{{item.text}}</p>
                      </div>
                  </div>
              </div>
              <div class="Discover-item">
                  <div class="Discover-item-button">
                      <a href="">
                        <span class="material-icons icon-button-right-arrow">keyboard_arrow_right</span>
                        <div class="Discover-item-picture-text">
                                <h2>More</h2>
                                <p>Put tranquillity, scenery and old town on your to-do list during your next visit to France!</p>
                        </div>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    computed : {
        discoverList() {
            return this.$store.getters.discoverList;
        }
    }
}
</script>

<style lang="scss">
    .section-Discover{
        margin-bottom: 70px;
    }
    
    .section-title-local {
        margin-bottom: 50px;

        @include bPoint("for-search") {
            margin-bottom: 70px;
        }
    }

    .Discover {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        
        &-item {
            width: 270px;
            height: 270px;

            margin-top: 20px;
            
            @include bPoint("for-search") {
                margin-top: 0;
            }

            &-picture, &-button {
                width: 100%;
                height: 100%;
                background: $color-button-blue no-repeat center center / cover;
                padding: 25px;
                color: white;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                
                &-text {
                    z-index: 1;

                    p {
                        font-size: 15px;
                        margin-top: 15px;
                        color: rgba($color: #fff, $alpha: .9);
                    }
                }

                .icon-button-right-arrow {
                    position: absolute;
                    right: 30px;
                    top: 30px;
                }
            }

            &-picture {
                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 270px;
                    height: 270px;
                    background-color: rgba($color: #337F7C, $alpha: .3);
                }
            }
        }
    }
</style>