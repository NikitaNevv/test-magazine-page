<template>
    <section class="section-top">
        <h1 class="section-top__title">
            NICK KYRGIOS' SECRET INCOME: "I'm going to end
            my career because of EASY and HUGE PROFITS from NFT investments!"
        </h1>

        <div class="section-top__bio">

        </div>
    </section>
</template>

<script lang="ts">
export default {name: ''}
</script>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.section-top {
    padding: 15px 10px;
    font-family: 'Open Sans', sans-serif;

    @include onTablet {
        padding: 30px 14px;
    }

    &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;

        @include onTablet {
            font-size: 36px;
            line-height: 49px;
        }
    }
}
</style>
