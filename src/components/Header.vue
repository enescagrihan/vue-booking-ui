<template>
  <header class="Header">
      <div class="container">
          <div class="Header-logo">
              <a href="">
                  <img src="../assets/img/site-logo.png" alt="">
              </a>
          </div>

          <button class="button button-icon" @click="isMenuShow = !isMenuShow">
            <span class="material-icons"> menu </span>
          </button>
          
          <div class="Header-menu" :class="{menuToggle : isMenuShow}">
              <div class="Header-menu-register-sign">
                  <a href="">Register</a>
                  <a href="">Sign in</a>
              </div>
              
              <div class="Header-menu-property-btn">
                <button class="button">
                    List your property
                </button>
              </div>
              <div class="Header-menu-helper">
                  <select>
                      <option value="">En</option>
                  </select>
                  <select>
                      <option value="">UAH</option>
                  </select>
              </div>

          </div>
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuShow: false,
        }        
    }
}
</script>

<style lang="scss">
// @import "@/assets/scss/main.scss";

.Header {
    height: 68px;

    .container {
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;        
        z-index: 1;
    }

    &-menu {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 100%;
        right: 100%;
        width: 100%;
        transition: .3s;
        box-shadow: 0 20px 40px rgba($color: #000000, $alpha: .1);
        margin-left: auto;
        background-color: #fff;

        @include bPoint ("tablet") {
            position: static;
            width: auto;
            flex-direction: row;
            box-shadow: none;
            margin-top: 0;

        }

        &-register-sign{
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            margin-top: 7px;
            width: 100%;

            @include bPoint("tablet") {
                width: auto;
                flex-direction: row;
                margin-bottom: 0;
                margin-top: 0;
            }

            a {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 44px;
                color: $color-navy;
                padding-right: 20px;
                padding-left: 20px;
                
                &:hover {
                    background-color: #eee;
                }
            }
            
        }

        &-property-btn {
            padding-right: 20px;
            padding-left: 20px;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
            
            @include bPoint("tablet") {
                width: auto;
                padding-right: 10px;
                padding-left: 10px;
                margin-bottom: 0;
            }

            .button {
                width: 100%;
            }
        }

        &-helper {
            margin-left: 10px;
            margin-bottom: 20px;

            @include bPoint("tablet") {
                margin-bottom: 0;
            }

            select {
                appearance: none;
                padding-right: 10px;
                padding-left: 10px;
                height: 42px;
                border: 2px solid #EEF1F7;
                border-radius: 3px;

                &:first-child {
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                }

                &:last-child {
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                    position: relative;
                    left: -1px;
                }
            }
        }
    }

    .button-icon {
        margin-left: auto;
        position: relative;
        left: 10px;
        @include bPoint("tablet") {
            display: none;
        }
    }

    .menuToggle {
        right: 0;
    }
}

</style>