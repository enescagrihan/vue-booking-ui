<template>
    <section class="Showcase">
        <div class="container">
            <h1 class="Showcase-title-primary">More deals than days in a year.</h1>
            <h3 class="Showcase-title-secondary">From cosy country homes to funky city flats</h3>

            <div class="Search">
                <form action="" class="Search-form">
                    <div class="Search-form-item">
                        <div class="form-element">
                            <span class="material-icons">place</span>
                            <input class="custom-input" type="text" placeholder="Berlin, Germany" />
                        </div>
                        <small class="form-description">Destination, property name or address</small>
                    </div>

                    <div class="Search-form-item">
                        <div class="form-element">
                            <span class="material-icons">insert_invitation</span>
                            <input class="custom-input" type="date" />
                        </div>
                        <small class="form-description">When?</small>
                    </div>

                    <div class="Search-form-item">
                        <div class="form-element">
                            <span class="material-icons">person</span>
                            <select class="custom-select">
                                <option>Guests</option>
                            </select>
                            <span class="material-icons expand-icon ">expand_more</span>
                        </div>
                    </div>

                    <div class="Search-form-item">
                        <div class="custom-area">
                            <label class="form-checkbox">
                                <small >Are you travelling for work?</small>
                                <div class="custom-checkbox">
                                    <input type="checkbox" name="" id="" />
                                    <span class="material-icons">check</span>
                                </div>
                            </label>
                        </div>
                        <button class="button button-navy button-full">Let's get started</button>
                    </div>
                </form>
            </div>

            <div class="Showcase-shortlink">
                <a class="Showcase-shortlink-item" href="">Find deals</a>
                <a class="Showcase-shortlink-item" href="">Travel guides</a>
                <a class="Showcase-shortlink-item" href="">How was your stay?</a>
                <a class="Showcase-shortlink-item" href="">Holiday rentals</a>
                <a class="Showcase-shortlink-item" href="">for Business</a>
            </div>

            <div class="Showcase-store">
                <a class="Showcase-store-item" href="">
                    <img src="@/assets/img/apple.svg" alt="" />
                </a>
                <a class="Showcase-store-item" href="">
                    <img src="@/assets/img/google.svg" alt="" />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

.Showcase {
    background: $color-navy url(../assets/img/showcase_back.jpg) no-repeat center center / cover;
    color: white;
    padding-top: 35px;

    @include bPoint("tablet") {
        padding-top: 80px;
        padding-bottom: 100px;
    } 
    
    &-title-primary {
        font-size: 36px;
        color: white;
        text-align: center;
        margin-bottom: 15px;

        @include bPoint("tablet") {
            font-size: 65px;
        }
     }

    &-title-secondary {
        color: rgba($color: #fff, $alpha: .9);
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        margin-top: 35px;

        @include bPoint("tablet") {
            font-size: 22.5px;
        }
    }

    &-shortlink {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 45px;
        white-space: nowrap;

        @include bPoint("tablet") {
            flex-direction: row;
        }

        &-item {
            margin-top: 10px;
            & + & {
                @include bPoint("tablet") {
                    margin-left: 20px;

                }
            }

            &:hover {
                text-decoration: underline;
            }
        }
    }

    &-store {
        display: flex;
        justify-content: center;
        margin-top: 45px;
        margin-bottom: 45px;
        padding-bottom: 45px;
        
        @include bPoint("tablet") {
            padding-bottom: 0;
        }

        &-item {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.15);  
            height: 50px;
            padding-right: 20px;
            padding-left: 20px;
            border-radius: 2px;
            transition: .2s;

            &:hover {
                background-color: rgba(0, 0, 0, 0.3);  
            }
            & + & {
                margin-left: 30px;
            }

            img {
                width: 90px;

                @include bPoint("tablet") {
                    width: 110px;
                }
            }
        }
    }
}

.Search {
    background-color: $color-yellow;
    padding: 20px;
    margin-top: 35px;
    
    @include bPoint("for-search") {
        padding: 40px;  
        margin-right: 100px;
        margin-left: 100px;
    }
    
    &-form {
        position: relative;
        display: flex;
        flex-direction: column;

        @include bPoint("for-search") {
            flex-direction: row;
            justify-content: flex-start;
        }

        &-item {
            & + & {
                margin-top: 20px;

                @include bPoint("for-search") {
                    margin-top: 0;
                    margin-left: 10px;
                    flex-grow: 1;
                }
            }
        }
    }
}
</style>