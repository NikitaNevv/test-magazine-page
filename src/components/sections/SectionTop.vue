<template>
    <section class="section-top">
        <h1 class="section-top__title">
            NICK KYRGIOS' SECRET INCOME: "I'm going to end
            my career because of EASY and HUGE PROFITS from NFT investments!"
        </h1>

        <div class="section-top__author-info">
            <div class="section-top__box">
                <a class="section-top__icon-link" href="#">
                    <img class="section-top__icon" src="../ui/icons/author.jpg" alt="icon">
                </a>

                <div class="section-top__bio">
                    <a class="section-top__name">Jayden Tanner</a>
                    <a class="section-top__id">@JTnr</a>
                </div>
            </div>

            <div class="section-top__links">
                <a class="section-top__link" href="#">
                    <IconInstagram/>
                </a>

                <a class="section-top__link" href="#">
                    <IconTwitter/>
                </a>

                <a class="section-top__link" href="#">
                    <IconLinkedin/>
                </a>

                <a class="section-top__link" href="#">
                    <IconFacebook/>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {name: ''}
</script>

<script setup lang="ts">

import IconInstagram from '../ui/icons/IconInstagram.vue';
import IconTwitter from '../ui/icons/IconTwitter.vue';
import IconLinkedin from '../ui/icons/IconLInkedin.vue';
import IconFacebook from '../ui/icons/IconFacebook.vue';
</script>

<style lang="scss" scoped>
.section-top {
    padding: 15px 10px;
    font-family: 'Open Sans', sans-serif;

    @include onTablet {
        padding: 30px 14px;
    }

    &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;

        @include onTablet {
            font-size: 36px;
            line-height: 49px;
        }
    }

    &__author-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid $color-secondary-grey;
    }

    &__box {
        display: flex;
        gap: 6px;
        align-items: center;
    }

    &__icon-link {
        cursor: pointer;
    }

    &__icon {
        width: 40px;
        height: 40px;
        border-radius: 190px;
    }

    &__bio {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-weight: 700;
        font-size: 12px;
        line-height: 1;
    }

    &__name {
        cursor: pointer;

        @include onDesktop {
            &:hover {
                color: rgba(0, 0, 0, 0.6);
            }

            &:active {
                color: rgba(0, 0, 0, 0.4);
            }
        }
    }

    &__id {
        cursor: pointer;

        @include onDesktop {
            &:hover {
                color: rgba(0, 0, 0, 0.6);
            }

            &:active {
                color: rgba(0, 0, 0, 0.4);
            }
        }
    }

    &__links {
        display: flex;
        gap: 18px;
    }

    &__link {
        width: 22px;
        height: 22px;
        color: $color-main-blue;

        @include onDesktop {
            &:hover {
                color: rgba(9, 111, 250, 0.61);
            }

            &:active {
                color: rgba(9, 111, 250, 0.4);
            }
        }
    }
}
</style>
