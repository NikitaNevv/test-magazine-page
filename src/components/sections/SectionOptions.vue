<template>
    <section class="section-options">
        <h2 class="section-options__title">
            start making money now!
        </h2>

        <BlockOptionRegister/>

        <div class="section-options__arrow"></div>
    </section>
</template>

<script>
export default {name: 'SectionOptions'}
</script>

<script setup>

import BlockOptionRegister from '../blocks/BlockOptionsRegister.vue'
</script>

<style lang="scss" scoped>
.section-options {
    display: flex;
    flex-direction: column;
    gap: 25px;

    @include onTablet {
        gap: 50px
    }

    &__title {
        font-weight: 700;
        font-size: 40px;
        line-height: 115%;
        color: $color-warning;
        text-transform: uppercase;
        text-align: center;

        @include onTablet {
            font-size: 44px;
        }
    }


}
</style>
