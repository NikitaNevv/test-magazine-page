<template>
    <div class="page-main">
        <SectionHeaderMob class="page-main__header"/>
        <SectionHeaderDesk class="page-main__header-desk"/>

        <SectionTop class="page-main__top"/>

        <main class="page-main__body">
            <SectionInterview/>
            <SectionOptions class="page-main__options"/>
        </main>

        <SectionAside class="page-main__aside"/>

<!--        <SectionFooter/>-->
    </div>
</template>

<script setup>
import SectionHeaderMob from './components/sections/SectionHeaderMob.vue'
import SectionHeaderDesk from './components/sections/SectionHeaderDesk.vue'
import SectionInterview from './components/sections/SectionInterview.vue'
import SectionTop from './components/sections/SectionTop.vue'
import SectionAside from './components/sections/SectionAside.vue'
import SectionOptions from './components/sections/SectionOptions.vue'
</script>

<style lang="scss" scoped>
.page-main {
    position: relative;
    display: flex;
    flex-direction: column;

    @include onDesktop {
        position: relative;
        display: grid;
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr 740px 330px 1fr;
        width: 100%;
    }

    &__header {
        grid-row: 1;
        grid-column: 1 / 5;
        align-self: start;
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
            grid-row: 1;
            grid-column: 1 / 5;
            position: sticky;
            align-self: start;
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
            display: initial;
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
}
</style>
