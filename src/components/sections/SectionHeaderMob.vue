<template>
    <header class="section-header" :class="classes">
        <nav class="section-header__options">
            <a class="section-header__link" href="#">Subscribe</a>
            <a class="section-header__link section-header__link--border" href="#">Log in</a>
        </nav>

        <div class="section-header__navigation">
            <button @click="showSlide = !showSlide">
                <BurgerMenu class="section-header__burger"/>
            </button>

            <div class="section-header__logo"></div>
        </div>

        <nav class="section-header__nav">
            <button class="section-header__nav-button" @click="showSlide = !showSlide">RETURN</button>

            <a class="section-header__nav-link" href="#">sydney</a>

            <a class="section-header__nav-link" href="#">politics</a>

            <a class="section-header__nav-link" href="#">business</a>

            <a class="section-header__nav-link" href="#">world</a>

            <a class="section-header__nav-link" href="#">lifestyle</a>

            <a class="section-header__nav-link" href="#">culture</a>

            <a class="section-header__nav-link" href="#">sport</a>
        </nav>
    </header>
</template>

<script>
export default {name: 'SectionHeaderMob'}
</script>

<script setup>
import {ref} from 'vue'
import BurgerMenu from '../ui/icons/BurgerMenu.vue'
import {computed} from 'vue'

const showSlide = ref(false)

const classes = computed(() => {
    return {
        ['section-header--slider']: showSlide.value
    }
})

</script>

<style lang="scss" scoped>
.section-header {
    &__options {
        display: flex;
        justify-content: end;
        align-items: center;
        padding: 14px 10px;
    }

    &__link {
        display: inline-block;
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        color: rgba(255, 255, 255, 0.81);

        &--border {
            padding-left: 8px;
            border-left: 1px solid $color-main-grey;
            margin-left: 8px;
        }
    }

    &__navigation {
        height: 42px;
        display: flex;
        border-top: 1px solid $color-main-grey;
        padding: 8px 10px;
    }

    &__logo {
        width: 250px;
        margin: 0 auto;
        background-image: url("./src/components/ui/icons/logos/logo-mob.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        cursor: pointer;
    }

    &__burger {
        align-self: center;
        color: $color-snow;
    }

    &__nav {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100vw;
        padding: 50px 20px;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: $color-main-back;
        transform: translateX(-100%);

        &-link {
            color: $color-snow;
            text-transform: uppercase;
        }

        &-button {
            display: inline-block;
            width: max-content;
            margin-bottom: 20px;
            color: $color-snow;
            text-transform: uppercase;
        }
    }

    &--slider .section-header__nav {
        transform: translateX(0);
    }
}
</style>
