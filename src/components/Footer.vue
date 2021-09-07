<template>
  <footer class="Footer">
      <div class="container">

        <div class="Footer-head">
            <a href="">Your account</a>
            <a href="">Make changes to your booking online</a>
            <a href="">Customer Service help</a>
            <a href="">Become an affiliate</a>
            <a href="">Booking.com for Business</a>
            <a href="">List your property</a>
        </div>
        <div class="Footer-main">
            <div class="Footer-main-links">
                <div class="Footer-main-links-group">
                    <a href="">Countries</a>
                    <a href="">Regions</a>
                    <a href="">Cities</a>
                    <a href="">Districts</a>
                    <a href="">Airports</a>
                </div>
                <div class="Footer-main-links-group">
                    <a href="">Holiday rentals</a>
                    <a href="">Apartments</a>
                    <a href="">Resorts</a>
                    <a href="">Villas</a>
                    <a href="">Hostels</a>
                </div>
                <div class="Footer-main-links-group">
                    <a href="">All property types</a>
                    <a href="">All themes</a>
                    <a href="">All destinations</a>
                    <a href="">Reviews</a>
                    <a href="">Travel articles</a>
                </div>
                <div class="Footer-main-links-group">
                    <a href="">Car hire</a>
                    <a href="">Flight finder</a>
                    <a href="">Restaurant reservations</a>
                    <a href="">Seek&Go</a>
                    <a href="">For travel agents</a>  
                </div>
                <div class="Footer-main-links-group">
                    <a href="">About Booking.com</a>
                    <a href="">Press centre</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy & Cookies</a>
                    <a href="">Contact us</a>
                </div>
            </div>
            <div class="Footer-main-other">
                <div class="Footer-main-other-app">
                    <img class="svg-apple" src="@/assets/img/apple-blue.svg" alt="">
                    <img class="svg-google" src="@/assets/img/google-blue.svg" alt="">
                </div>
                <div class="Footer-main-other-info">
                    <p>Booking.com B.V. is based in Amsterdam in the Netherlands, and is supported internationally by <a href="" class="white-underlined">204 offices in 70 countries</a></p>
                </div>
            </div>
        </div>
        <div class="Footer-copyright">
            <p>Copyright © 1996 - 2017 Booking.com™. All rights reserved.</p>
        </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.Footer {
    background-image: linear-gradient(to right, #083B87, #126BBA);
    width: 100%;
    padding: 24px;
    @include bPoint("for-search") {
        padding: 75px 150px;
    }

    &-head {
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
        white-space: nowrap;
        color: #B9CEE4;
        font-size: 15px;
        border-bottom: 1px solid;
        border-image: linear-gradient(to right, #174B93, #1F6EB7) 1;
        padding-bottom: 23px;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }

        a + a {
            margin-left: 20px;
        }
    }

    &-main {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        justify-content: center;
        @include bPoint("tablet") {
            justify-content: space-evenly;
        }
        &-links {
            color: #B9CEE4;
            display: flex;
            overflow-x: scroll;
            margin-bottom: 63px;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }

            @include bPoint("for-search") {
                flex-grow: 1;
            }

            &-group {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                white-space: nowrap;
                font-size: 15px;
                @include bPoint("for-search") {
                flex-grow: 1;
            }
                min-width: 170px;

                a  {
                    margin-bottom: 11px;
                }
            }
        }

        &-other {
            width: 300px;
            &-app {
                border-bottom: 1px solid #1E6BB5;
                padding-bottom: 18px;
                margin-bottom: 18px;
                display: flex;
                justify-content: space-between;
            }

            &-info {
                color: #B9CEE4;
                font-size: 15px;
            }

            .svg-apple, .svg-google {
                background-color: white;
                border-radius: 4px;
            }
            
            .svg-apple {
                padding: 8px 18px;
            }

            .svg-google {
                padding: 8px 16px;
            }

            .white-underlined {
                color: white;
                text-decoration: underline;
            }
        }
    }

    &-copyright {
        font-size: 15px;
        text-align: center;
        margin-top: 45px;
        color: #6A95C4;
    }
}

</style>