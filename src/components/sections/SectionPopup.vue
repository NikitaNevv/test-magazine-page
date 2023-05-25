<template>
        <section
            class="section-popup"
            @click.self="emits('onClose')"
        >
            <IconCrossBig class="section-popup__close" @click="emits('goBack')"/>

            <p class="section-popup__text">Please log in!</p>

            <form class="section-popup__form" action="#" method="post">
                <label for="username">Username:</label>
                <input class="section-popup__input" name="username" type="text" value="" pattern="\w{3,16}" required>

                <label for="pin">PIN:</label>
                <input class="section-popup__input" name="pin" type="password" pattern="\d{4,4}" required>

                <ButtonMainLink class="section-popup__btn">Submit</ButtonMainLink>
            </form>
        </section>
</template>

<script>
export default {name: 'SectionPopup'}
</script>

<script setup>
import {defineEmits} from 'vue'
import IconCrossBig from '../ui/icons/IconCrossBig.vue'
import ButtonMainLink from '../ui/ButtonMainLink.vue'

const emits = defineEmits(['onClose', 'goBack'])
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

<style lang="scss" scoped>
.section-popup {
    position: relative;
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    background-color: $color-snow;
    color: $color-main-text;
    font-family: $family-default;
    border-radius: 20px;

    @include onTablet {
        width: 500px;
        height: 500px;
    }

    &__close {
        margin-left: auto;
        position: absolute;
        right: 2.1rem;
        top: 2.1rem;
        width: 20px;
        height: 20px;
        transition-property: transform;
        cursor: pointer;

        @include onDesktop {
            &:hover {
                transform: rotate(-90deg);
            }

            &:active {
                opacity: 0.5;
            }
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }

    &__input {
        border-radius: 5px;
    }

    &__btn {
        height: 50px;
    }
}
</style>

