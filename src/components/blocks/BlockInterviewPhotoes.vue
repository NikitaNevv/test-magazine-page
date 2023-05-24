<template>
    <div class="block-interview-photos">
        <div class="block-interview-photos__container">
            <div class="block-interview-photos__image-box">
                <img
                    class="block-interview-photos__image"
                    src="../ui/icons/green-car.png"
                    alt="image of good car"
                >
            </div>

            <div class="block-interview-photos__image-box block-interview-photos__image-box--flex-grow">
                <img
                    class="block-interview-photos__image "
                    src="../ui/icons/modern-house.png"
                    alt="image of good house"
                >
            </div>

        </div>

        <p class="block-interview-photos__text">
            Nick Kyrgios makes money by investing in NFTs
        </p>
    </div>
</template>

<script lang="ts">
export default {name: 'BlockInterviewPhotos'}
</script>

<script setup>

</script>

<style lang="scss" scoped>
.block-interview-photos {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__container {
        display: flex;
        gap: 4px;
    }

    &__image-box {
        position: relative;
        flex-shrink: 2;
        width: 100%;
        min-height: 192px;
        overflow: hidden;

        &::after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }

        @media screen and (min-width: 600px) {
            min-height: 300px;
        }

        @include onTablet {
            min-height: 420px;
        }

        &--flex-grow {
            flex-shrink: 1.5;
        }
    }

    &__image {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    &__text {
        font-family: 'Open Sans', serif;
        font-style: italic;
        font-weight: 400;
        font-size: 12px;
        line-height: 1;
        color: $color-main-text;

        @include onTablet {
            font-size: 14px;
            line-height: 19px;
        }
    }
}
</style>
