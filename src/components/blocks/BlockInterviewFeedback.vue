<template>
    <div class="block-interview-feedback">
        <div class="block-interview-feedback__image-box">
            <img
                class="block-interview-feedback__image"
                src="../ui/icons/feedback.png"
                alt="image of jake saunders"
            >
        </div>

        <p class="block-interview-feedback__text">
            Louie Fletcher, 40 years old, construction worker
        </p>
    </div>
</template>

<script lang="ts">
export default {name: 'BlockInterviewFeedBack'}
</script>

<script setup>

</script>

<style lang="scss" scoped>
.block-interview-feedback {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__image-box {
        position: relative;
        flex-shrink: 2;
        width: 100%;
        max-height: 218px;
        overflow: hidden;

        &::after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }

        @media screen and (min-width: 550px) {
            max-height: 400px;
        }

        @include onTablet {
            max-height: 475px;
        }
    }

    &__image {
        position: absolute;
        width: 100%;
        height: 100%;
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
}
</style>
