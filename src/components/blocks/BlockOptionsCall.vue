<template>
    <section class="block-options-call">
        <div class="block-options-call__content">
            <span class="block-options-call__sub-title">
                welcome to the [platform]
            </span>

            <h3 class="block-options-call__title">
                Answer the call to start getting the passive income every day

            </h3>

            <p class="block-options-call__text">
                After registration, wait a few minutes and answer
                the incoming call from our manager. You'll get the answers
                to all of your questions and find out how to make money on the platform easily.
            </p>
        </div>

        <img
            class="block-options-call__image"
            src="../ui/icons/call-woman.jpg"
            alt="image of woman who calls"
        >
    </section>
</template>

<script>
export default {name: 'BlockOptionsCall'}
</script>

<script setup>

</script>

<style lang="scss" scoped>
.block-options-call {
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
        max-width: 410px;

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
        height: 226px;

        @include onTablet {
            padding: 0;
        }
    }

    &__image {
        width: 225px;
        height: 225px;
        object-position: left top;

        @include onTablet {
            width: 300px;
            height: 300px;
        }
    }
}
</style>
