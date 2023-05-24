<template>
    <section class="block-interview-warning">
        <h2 class="block-interview-warning__title">WARNING:</h2>

        <p class="block-interview-warning__text">
            Nick Kyrgios's leak made a lot of buzz from people around the globe.
            <a class="block-interview-warning__text-link" href="#">NFT Profit</a>
            isn't available for a large number of participants.
            Free registration for everyone will close soon. Hurry to become a part
            of the community of successful crypto investors while registration is
            open for everyone!
        </p>

        <p class="block-interview-warning__text">
            As of August 30, 2021, there are 9 places left for registration.
        </p>
    </section>
</template>

<script lang="ts">
export default {name: 'BlockInterviewWarning'}
</script>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.block-interview-warning {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    background-color: rgba(232, 16, 25, 0.02);
    border: 2px solid #E81019;
    border-radius: 10px;

    &__title {
        font-weight: 700;
        color: $color-warning;
        font-size: 16px;
        line-height: 150%;

        @include onTablet {
            font-size: 18px;
            line-height: 150%;
        }
    }

    &__text {
        font-size: 16px;
        line-height: 150%;
        color: $color-main-text;

        @include onTablet {
            font-size: 18px;
            line-height: 150%;
        }

        &-link {
            font-style: inherit;
            font-weight: 700;
            color: $color-main-blue;
        }
    }
}
</style>
