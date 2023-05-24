<template>
    <a class="button-main-link" href="#">
        <span class="button-main-link__text">
            <slot/>
        </span>
    </a>
</template>

<script lang="ts">
export default {name: 'ButtonMainLink'}
</script>

<script setup>

</script>

<style lang="scss" scoped>
    .button-main-link {

        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 380px;
        height: 71px;
        background-color: $color-main-blue;
        border-radius: 5px;

        @include onTablet {
            height: 76px;
        }

        &:hover {
            background-color: rgba(9, 111, 250, 0.8);
        }

        &:active {
            background-color: rgba(9, 111, 250, 0.6);
        }


        &__text {
            font-family: $family-secondary;
            display: inline-block;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;
            text-transform: uppercase;
            color: $color-snow;

            @include onTablet {
                font-size: 22px;
                line-height: 26px;
            }
        }
    }
</style>
