<template>
    <div class="block-interview-sounders">
        <div class="block-interview-sounders__image-box">
            <img
                class="block-interview-sounders__image"
                src="../ui/icons/jake-saunders.png"
                alt="jake saunders"
            >
        </div>

        <p class="block-interview-sounders__text">
            Jake Saunders, Chief Development Engineer of
                <a class="block-interview-sounders__link" href="#">
                    NFT Profit
                </a>
        </p>
    </div>
</template>

<script>
export default {name: 'BlockInterviewSounders'}
</script>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.block-interview-sounders {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__image-box {
        position: relative;
        flex-shrink: 2;
        width: 100%;
        height: 192px;
        overflow: hidden;

        &::after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }

        @media screen and (min-width: 50px) {
            min-height: 350px;
        }

        @include onTablet {
            height: 420px;
        }
    }

    &__image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;

    }

    &__text {
        font-style: italic;
        font-size: 12px;
        line-height: 16px;
        color: $color-main-text;

        @include onTablet {
            font-size: 14px;
            line-height: 19px;
        }
    }

    &__link {
        color: $color-main-blue;
    }
}
</style>
