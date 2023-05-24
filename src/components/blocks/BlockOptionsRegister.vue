<template>
    <section class="block-option-register">
        <div class="block-option-register__content">
            <span class="block-option-register__sub-title">
                registration
            </span>

            <h3 class="block-option-register__title">
                Register in the system
            </h3>

            <p class="block-option-register__text">
                Provide your first and last name, email address,
                selected security password, and phone number.
                After confirming the entered data, you become
                a full member of the system.
            </p>
        </div>

        <div class="block-option-register__box">
            <div class="block-option-register__wrapper">
                <div class="block-option-register__instruction-mail">
                    <span class="block-option-register__inst-text">
                        Enter your email address to get VIP access to the system
                    </span>

                <IconArrow class="block-option-register__arrow"/>
                </div>

                <div class="block-option-register__instruction-mob">
                    <span class="block-option-register__inst-text">
                        Enter your mobile phone number to verify your identity
                    </span>

                    <IconArrow class="block-option-register__arrow block-option-register__arrow--position"/>
                </div>
            </div>

            <div class="block-option-register__image-box">
                <img class="block-option-register__form" src="../ui/icons/form.jpg" alt="form">
            </div>
        </div>

    </section>
</template>

<script>
export default {name: 'BlockOptionRegister'}
</script>

<script setup>

import IconArrow from '../ui/icons/IconArrow.vue'
</script>

<style lang="scss" scoped>
.block-option-register {
    font-family: $family-secondary;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include onTablet {
        flex-direction: row;
        align-items: center;
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

        @include onTablet {
            padding: 0;
        }
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__instruction-mail {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 162px;
        padding: 34px 9px;
        border: 2px solid $color-accent-positive;
        background: rgba(56, 255, 24, 0.02);
        border-radius: 4px;
    }

    &__inst-text {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.03em;
        color: $color-main-text;
    }

    &__arrow {
        position: absolute;
        bottom: 6px;
        right: -20px;
        z-index: 2;
        width: 36px;
        height: 26px;

        &--position {
            top: 24px;
            right: -20px;
            z-index: 2;
        }
    }

    &__instruction-mob {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 163px;
        padding: 34px 9px;
        border: 2px solid $color-accent-positive;
        background: rgba(56, 255, 24, 0.02);
        border-radius: 4px;
    }

    &__image-box {
        position: relative;
        width: 172px;
        max-height: 244px;
        overflow: hidden;
    }

    &__form {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
