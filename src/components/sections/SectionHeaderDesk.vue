<template>
    <header class="section-header-desk">
        <div class="section-header-desk__wrapper">
            <a class="section-header-desk__log" href="#">Log in</a>

            <div class="section-header-desk__box">
                <div class="section-header-desk__menu-box">
                    <BurgerMenu class="section-header-desk__burger"/>
                </div>

                <div class="section-header-desk__logo"></div>
                <div class="section-header-desk__logo section-header-desk__logo-desc"></div>

                <button class="section-header-desk__btn">
                    <span class="section-header-desk__btn-text">subscribe</span>
                </button>
            </div>

            <nav class="section-header-desk__nav">
                <a class="section-header-desk__nav-link" href="#">sydney</a>

                <a class="section-header-desk__nav-link" href="#">politics</a>

                <a class="section-header-desk__nav-link" href="#">business</a>

                <a class="section-header-desk__nav-link" href="#">world</a>

                <a class="section-header-desk__nav-link" href="#">lifestyle</a>

                <a class="section-header-desk__nav-link" href="#">culture</a>

                <a class="section-header-desk__nav-link" href="#">sport</a>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
export default {name: 'SectionHeaderDesk'}
</script>

<script setup lang="ts">
import BurgerMenu from '../ui/icons/BurgerMenu.vue'
</script>

<style lang="scss" scoped>
.section-header-desk {
    display: flex;
    justify-content: center;
    background-color: $color-main-back;
    width: 100vw;

    &__log {
        position: absolute;
        top: 10px;
        right: 26px;
        color: rgba(255, 255, 255, 0.81);
        font-size: 10px;

        @include onDesktop {
            font-size: 14px;
        }

        &:hover {
            color: rgba(204, 204, 204, 0.8);
        }

        &:active {
            color: rgba(163, 163, 163, 0.8);
        }
    }

    &__wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 1500px;
    }

    &__box {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 26px;
    }

    &__burger {
        align-self: center;
        color: $color-snow;
        cursor: pointer;

        &:hover {
            color: #cccccc;
        }

        &:active {
            color: #a3a3a3;
        }
    }

    &__menu-box {
        width: 100px;
    }

    &__logo {
        width: 350px;
        height: 70px;
        background-image: url("./src/components/ui/icons/logos/logo-tablet.jpg");
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: contain;
        cursor: pointer;

        @include onDesktop {
            display: none;
        }

        &-desc {
            display: none;
            background-image: url("./src/components/ui/icons/logos/logo-desk.jpg");
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: contain;
            cursor: pointer;
            width: 600px;
            height: 100px;

            @include onDesktop {
                display: initial;
            }
        }
    }

    &__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 24px;
        border: 1px solid $color-main-grey;
        border-radius: 4px;

        @include onDesktop {
            width: 120px;
            height: 34px;
        }

        &:hover {
            border-color: rgba(128, 128, 128, 0.8)
        }

        &:active {
            border-color: rgba(128, 128, 128, 0.6)
        }

        &-text {
            font-size: 12px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.81);

            @include onDesktop {
                font-size: 16px;
            }

            &:hover {
                color: rgba(204, 204, 204, 0.8);
            }

            &:active {
                color: rgba(163, 163, 163, 0.8);
            }
        }
    }

    &__nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        padding: 4px 0;
        text-transform: uppercase;
        font-size: 10px;

        @include onDesktop {
            gap: 24px;
            padding: 10px 0;
            font-size: 16px;
        }

        &-link {
            color: rgba(255, 255, 255, 0.81);

            &:hover {
                color: rgba(204, 204, 204, 0.8);
            }

            &:active {
                color: rgba(163, 163, 163, 0.8);
            }
        }
    }
}
</style>
