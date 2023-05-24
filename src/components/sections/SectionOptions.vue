<template>
    <section class="section-options">
        <h2 class="section-options__title">
            start making money now!
        </h2>

        <BlockOptionRegister/>

        <div class="section-options__arrow"></div>

        <BlockOptionsDeposit/>

        <div class="section-options__arrow"></div>

        <BlockOptionsCall/>

        <div class="section-options__block">
            <p class="section-options__text">
                Deposit $350 or more to get the most profitable
                money opportunity of the whole life:
            </p>

            <ButtonMainLink class="section-options__btn">Click To Start</ButtonMainLink>
        </div>
    </section>
</template>

<script>
export default {name: 'SectionOptions'}
</script>

<script setup>

import BlockOptionRegister from '../blocks/BlockOptionsRegister.vue'
import BlockOptionsDeposit from '../blocks/BlockOptionsDeposit.vue'
import BlockOptionsCall from '../blocks/BlockOptionsCall.vue'
import ButtonMainLink from '../ui/ButtonMainLink.vue'
</script>

<style lang="scss" scoped>
.section-options {
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-family: $family-secondary;

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

    &__arrow {
        width: 200px;
        height: 30px;
        margin: 0 auto;
        background-image: url("../ui/icons/arrow-big-blue.jpg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

    &__block {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 20px;

        @include onTablet {
            margin-top: 10px;
        }
    }

    &__text {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        text-align: center;

        @include onTablet {
            font-size: 26px;
            line-height: 35px;
        }
    }

    &__btn {
        margin: 0 auto;
        width: 340px;

        @include onTablet {
            width: 340px;
        }
    }
}
</style>
