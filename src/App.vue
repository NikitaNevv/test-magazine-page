<template>
    <div class="page-main">
        <SectionHeaderMob class="page-main__header"/>
        <SectionHeaderDesk class="page-main__header-desk"/>

        <SectionTop class="page-main__top"/>

        <main class="page-main__body">
            <SectionInterview/>
            <SectionOptions class="page-main__options"/>
            <SectionComments class="page-main__comments"/>
        </main>


        <SectionAside class="page-main__aside"/>

        <SectionFooter class="page-main__footer"/>

        <Transition name="fade">
            <div
                class="page-main__blurred"
                v-if="data.isPopupActive"
                @click="closePopup"
            >
                <SectionPopup
                    @onClose="data.isPopupActive = false"
                    @goBack="data.isPopupActive = false"
                />
            </div>
        </Transition>
    </div>
</template>

<script setup>
import {onMounted, reactive, watch} from 'vue'
import SectionHeaderMob from './components/sections/SectionHeaderMob.vue'
import SectionHeaderDesk from './components/sections/SectionHeaderDesk.vue'
import SectionInterview from './components/sections/SectionInterview.vue'
import SectionTop from './components/sections/SectionTop.vue'
import SectionAside from './components/sections/SectionAside.vue'
import SectionOptions from './components/sections/SectionOptions.vue'
import SectionFooter from './components/sections/SectionFooter.vue'
import SectionComments from './components/sections/comments/index.vue'
import SectionPopup from './components/sections/SectionPopup.vue'

const data = reactive({
    isPopupActive: false,
    el: null
})

onMounted(() => {
    data.el = document.querySelector('html')
    setTimeout(() => {
    data.isPopupActive = true
    }, 61000);
})

watch(
    () => data.isPopupActive,
    (val) => {
        val ? data.el.classList.add('hide') : data.el.classList.remove('hide')
    }
)

const closePopup = () => {
    data.isPopupActive = false;
}
</script>

<style lang="scss" scoped>
.page-main {
    position: relative;
    display: flex;
    flex-direction: column;

    @include onDesktop {
        position: relative;
        display: grid;
        grid-template-rows: auto auto auto auto;
        grid-template-columns: 1fr 740px 330px 1fr;
        width: 100%;
    }

    &__header {
        position: sticky;
        top: 0;
        z-index: 5;
        grid-row: 1;
        grid-column: 1 / 5;
        align-self: start;
        width: 100%;
        font-family: 'Open Sans', sans-serif;
        background-color: $color-main-back;

        @include onTablet {
            display: none;
        }

        &-desk {
            position: sticky;
            top: 0;
            z-index: 5;
            grid-row: 1;
            grid-column: 1 / 5;
            display: none;
            align-self: start;
            font-family: 'Open Sans', sans-serif;
            background-color: $color-main-back;

            @include onTablet {
                display: flex;
            }
        }
    }

    &__body {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 10px;
        margin: 0 auto;
        height: 100%;

        @include onTablet {
            padding: 0 14px;
        }

        @include onDesktop {
            grid-row: 3;
            grid-column: 2 / 3;
            max-width: 740px;
            padding: 0;
        }
    }

    &__top {
        @include onDesktop {
            grid-row: 2;
            grid-column: 2 / 4;
        }
    }

    &__aside {
        display: none;
        padding-left: 30px;

        @include onDesktop {
            position: sticky;
            top: 150px;
            bottom: 500px;
            display: flex;
            grid-row: 3;
            grid-column: 3 / 4;
            max-width: 740px;
            align-self: start;
        }
    }

    &__options {
        margin-top: 30px;

        @include onTablet {
            margin-top: 50px;
        }
    }

    &__comments {
        margin-top: 30px;

        @include onTablet {
            margin-top: 50px;
        }
    }

    &__blurred {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 7;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(3px);
    }

    &__footer {
        grid-row: 4;
        grid-column: 1 / 5;
        margin-top: 35px;

        @include onDesktop {
            margin-top: 60px;
        }
    }
}
</style>
