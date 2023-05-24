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
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    &__header {
        position: sticky;
        top: 0;
        z-index: 5;
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
            display: none;
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

        @include onDesktop {
            position: relative;
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 740px 1fr;
            max-width: 1070px;
            grid-template-areas:
                'top top '
                'main aside'
            ;
        }
    }

    &__top {
        @include onDesktop {
            grid-area: top;
        }
    }

    &__wrapper {
        width: 100%;
        padding: 0 10px;
        margin: 0 auto;
        height: 100%;

        @include onTablet {
            padding: 30px 14px;
        }

        @include onDesktop {

            max-width: 740px;
            padding: 0;
        }
    }

    &__aside {
        position: sticky;
        display: none;
        padding-left: 30px;

        @include onDesktop {
            position: sticky;
            top: 500px;
            display: initial;
            grid-area: aside;
        }
    }
}
</style>
