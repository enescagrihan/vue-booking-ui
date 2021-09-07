<template>
    <nav class="Navigation">
        <div class="container">
            <a class="Navigation-item Navigation-selected">Accommodation</a>
            <a class="Navigation-item">Flights</a>
            <a class="Navigation-item">Rental cars</a>
            <a class="Navigation-item">Airport taxis</a>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">

    .Navigation {
        background-color: $color-soft-blue;
        height: 50px;
        white-space: nowrap;
        .container {
            height: 100%;
            display: flex;
            align-items: center;
            overflow-x: scroll;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
        }

        &-item {
            margin-right: 40px;
            color: #AFC1DE;
            

            &:last-child {
                padding-right: 20px;
            }            
        }

        &-selected {
            color: $color-navy;
            font-weight: 600;
        }
}
</style>

