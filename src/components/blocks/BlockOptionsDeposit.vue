<template>
    <section class="block-option-deposit">
        <div class="block-option-deposit__content">
            <span class="block-option-deposit__sub-title">
                making a deposit
            </span>

            <h3 class="block-option-deposit__title">
                Put initial deposit into your account
            </h3>

            <p class="block-option-deposit__text">
                Put an initial deposit ($350) into your account
                before start using the platform. Follow the instructions
                on the screen to complete.
            </p>
        </div>

        <div class="block-option-deposit__box">
                <div class="block-option-deposit__instruction-mail">
                    <span class="block-option-deposit__guide-text">
                        To activate your account and start earning,
                        you must invest an amount not less than the minimum deposit
                    </span>

                    <IconArrow class="block-option-deposit__arrow"/>
                </div>

            <img
                class="block-option-deposit__form"
                src="../ui/icons/deposit-form.png"
                alt="form to fill in credit card data"
            >
        </div>
    </section>
</template>

<script>
export default {name: 'BlockOptionsDeposit'}
</script>

<script setup>

import IconArrow from '../ui/icons/IconArrow.vue';
</script>

<style lang="scss" scoped>
.block-option-deposit {
    font-family: $family-secondary;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    @include onTablet {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @include onDesktop {
        justify-content: space-between;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 356px;

        @include onTablet {
            align-items: start;
            text-align: left;
            order: 2;
        }
    }

    &__sub-title {
        color: rgba(0, 0, 0, 0.5);
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;

        @include onTablet {
            font-size: 14px;
            line-height: 19px;
        }
    }

    &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        text-transform: uppercase;

        @include onTablet {
            font-size: 26px;
            line-height: 35px;
        }
    }

    &__text {
        margin-top: 10px;
        font-family: $family-default;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: $color-main-text;

        @include onTablet {
            font-size: 18px;
            line-height: 150%;
        }
    }

    &__box {
        display: flex;
        gap: 4px;
        justify-content: center;
        padding-top: 10px;
        height: 226px;

        @include onTablet {
            padding: 0;
        }
    }

    &__instruction-mail {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 162px;
        padding: 0 10px;
        border: 2px solid $color-accent-positive;
        background: rgba(56, 255, 24, 0.02);
        border-radius: 4px;
    }

    &__guide-text {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.03em;
        color: $color-main-text;

        @include onTablet {
            font-size: 14px;
            line-height: 19px;
        }
    }

    &__arrow {
        position: absolute;
        bottom: 60px;
        right: -20px;
        z-index: 2;
        width: 36px;
        height: 26px;
    }

    &__form {
        width: 172px;
        max-height: 100%;
    }
}
</style>
