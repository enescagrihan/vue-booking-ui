<template>
  <section class="Subscribe">
      <h1 class="Subscribe-title-primary">Save time, save money!</h1>
      <h3 class="Subscribe-title-secondary">Sign up and we'll send the best deals for you</h3>
      <div class="Subscribe-mail">
          <div class="Subscribe-mail-input">
            <input class="mail-input" type="text" placeholder="Your email">
            <span class="material-icons">mail</span>
          </div>
          <button class="Subscribe-button">
              Subscribe
          </button>
      </div>
      <div class="Subscribe-custom-area">
          <input type="checkbox" name="" id="free-book-checkbox">
          <span class="material-icons">check</span>
          <label for="free-book-checkbox">Send me a link to get the FREE Booking.com app!</label>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.Subscribe {
    height: 230px;
    background: $color-navy url(../assets/img/alt_back.jpg) no-repeat center center / cover;
    margin-bottom: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include bPoint("tablet") {
        height: 450px;
        
    }

    &-title-primary, &-title-secondary {
        color: white;
    }

    &-title-primary {
        font-size: 25px;
        margin-bottom: 15px;

        @include bPoint("tablet") {
            font-size: 40px;
        }
    }

    &-title-secondary {
        font-weight: normal;
        font-size: 14px;
        opacity: .9;
        margin-bottom: 35px;

        @include bPoint("tablet") {
            font-size: 18px;

        }
    }

    &-mail {
        display: flex;
        
        &-input {
            position: relative;

            .mail-input {
                width: 180px;
                height: 35px;
                border: none;
                padding-left: 40px;
                font-size: 14px;

                @include bPoint("tablet") {
                    width: 300px;
                    height: 45px;
                }
            }

            .material-icons {
                position: absolute;
                font-size: 22px;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: $color-dark-blue;
            }
        }
    }

    &-button {
        width: 90px;
        height: 35px;
        color: white;
        background-color: $color-button-blue;
        font-size: 14px;

        @include bPoint("tablet") {
            width: 115px;
            height: 45px;
        }
    }

    &-custom-area {
        display: flex;
        align-items: center;

        margin-top: 20px;
        
        &::before {
            content: "";
            display: inline-block;
            width: 14px;
            height: 14px;
            border: 2px solid white;
            border-radius: 2px;
        }

        input {
            display: none;
            &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: red;
                opacity: 1; /* Firefox */
            }
        }

        .material-icons {
            display: none;
            position: absolute;
            font-size: 17px;
            margin-left: -1px;
            color: white;
        }

        input:checked + .material-icons {
            display: block;
        }

        label {
            color: rgba($color: #fff, $alpha: .9);
            margin-left: 10px;
            font-size: 13px;

            @include bPoint("tablet") {
                font-size: 15px
            }
        }

    }
}

</style>