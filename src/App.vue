<template>
    <div class="page-main">
        <SectionHeaderMob class="page-main__header"/>
        <SectionHeaderDesk class="page-main__header-desk"/>

        <main class="page-main__body">
            <SectionTop class="page-main__top"/>

            <div class="page-main__wrapper">
                <SectionInterview/>
            </div>

            <SectionAside class="page-main__aside"/>
        </main>

        <SectionFooter/>
    </div>
</template>

<script setup>
import SectionHeaderMob from './components/sections/SectionHeaderMob.vue'
import SectionHeaderDesk from './components/sections/SectionHeaderDesk.vue'
import SectionInterview from './components/sections/SectionInterview.vue'
import SectionTop from './components/sections/SectionTop.vue'
import SectionAside from './components/sections/SectionAside.vue'
</script>

<style lang="scss" scoped>
.page-main {
    display: flex;
    justify-content: center;
    flex-direction: column;

    &__header {
        font-family: 'Open Sans', sans-serif;
        background-color: $color-main-back;

        @include onTablet {
            display: none;
        }

        &-desk {
            display: none;
            font-family: 'Open Sans', sans-serif;
            background-color: $color-main-back;

            @include onTablet {
                display: flex;
            }
        }
    }

    &__body {
        display: flex;
        flex-direction: column;

        @include onDesktop {
            display: grid;
            grid-template-rows: 740px 1fr;
            grid-template-columns: 1fr;
            max-width: 1070px;
        }
    }

    &__top {

    }

    &__wrapper {
        width: 100%;
        max-width: 740px;
        padding: 15px 10px;
        margin: 0 auto;
        height: 100%;

        @include onTablet {
            padding: 30px 14px;
        }

        @include onDesktop {
            padding: 0;
        }
    }

    &__aside {
        display: none;

        @include onDesktop {
            display: initial;
        }
    }
}
</style>
