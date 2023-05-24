<template>
    <section class="section-interview">
        <div class="section-interview__image-container">
            <img class="section-interview__image" src="../ui/icons/mobile-dollars.png" alt="mobile with images">
        </div>

        <p class="section-interview__comment">
            Winner of the Grand Slam tournament (Australian Open 2022), tennis player Nick Kyrgios is verging on a
            return to the world's top 100 in the latest ATP Tour singles rankings. The former world number one in the
            junior rankings, despite his success, Kyrgios announced that he was thinking of quitting his sports career.
            As it turned out, there was a big financial secret behind it. Recently, a SHOCKING leak from him about
            secret NFT investment platform outraged the world's governments and big banks!
        </p>

        <p class="section-interview__text section-interview__text--padding">
            An event of the Independent Business Foundation (IBF) took place the other day. The main event announcement
            was the participation of Nick Kyrgios. Everyone thought it was a marketing ploy to draw attention to the
            business event, so our journalist asked Nick Kyrgios on the sidelines about his participation. The star
            shocked us with an unexpected story.
        </p>

        <p class="section-interview__text section-interview__text--padding section-interview__text--bold">
            Attention, this information caused a real scandal. They're scared and doing everything to hide the leak from
            people. Check it out before the article is removed from here.
        </p>

        <div class="section-interview__line"></div>

        <span class="section-interview__role section-interview__role--margin-top">
            Journalist:
        </span>

        <p class="section-interview__text">
            Nick, everyone knows you as a successful tennis player. What is the reason you are at this business event
            today?
        </p>

        <span class="section-interview__role">
            Nick Kyrgios:
        </span>

        <p class="section-interview__text">
            Yes, people think that most of my money comes from my professional activities as well as advertising
            contracts. In fact, the main part of my income is the return on investment.
        </p>

        <p class="section-interview__text">
            To be honest, I know not so much about financial things. My financial advisor always helps me.
        </p>

        <p class="section-interview__text">
            Without him, I would not have known about NFT market. NFT investment is a big new thing, as it turns out.
            Oh... I don't know if it can be revealed. Anyway, I don't know how this works, but we were able to multiply
            investments by 6-7 times during the last month with a kind of automated system for investing in NFT...
        </p>

        <BlockNft class="section-interview__block-nft"/>

        <span class="section-interview__role section-interview__role--margin-top">
            Journalist:
        </span>

        <p class="section-interview__text">
            So, Nick, what "system" are you talking about?
        </p>

        <span class="section-interview__role section-interview__role--margin-top">
            Nick Kyrgios:
        </span>

        <p class="section-interview__text">
            Listen, I don't do those things, and I even don't know its name. I want to point that people simply get
            scared even to try new ways of passive income. Financial tools like this require small start-up capital, but
            bring real money here and now.
        </p>
    </section>
</template>

<script>
export default {name: 'SectionInterview'}
</script>

<script setup>
import BlockNft from '../blocks/BlockNft.vue'
</script>

<style lang="scss" scoped>
.section-interview {
    &__image-container {
        position: relative;
        width: 100%;
        max-height: 193px;
        overflow: hidden;

        &::after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }

        @include onTablet {
            padding-bottom: 0;
            max-height: 420px;
        }
    }

    &__image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    &__comment {
        margin-top: 10px;
        font-family: 'Open Sans', sans-serif;
        font-style: italic;
        font-size: 12px;
        line-height: 16px;
        color: $color-main-text;

        @include onTablet {
            font-size: 14px;
            line-height: 19px;
        }
    }

    &__text {
        font-family: inherit;
        font-weight: 400;
        margin-top: 5px;
        color: $color-main-text;
        font-size: 16px;
        line-height: 24px;

        @include onTablet {
            margin-top: 10px;
            font-size: 18px;
            line-height: 27px;
        }

        &--padding {
            margin-top: 15px;

            @include onTablet {
                margin-top: 30px;
            }
        }

        &--bold {
            font-family: 'Open Sans', sans-serif;
            font-weight: bold;
            color: $color-secondary-text;
        }
    }

    &__line {
        width: 100%;
        height: 1px;
        background-color: $color-secondary-grey;
        margin-top: 15px;

        @include onTablet {
            margin-top: 30px;
        }
    }

    &__role {
        display: inline-block;
        font-family: 'Open Sans', sans-serif;
        margin-top: 15px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;

        @include onTablet {
            font-size: 18px;
            line-height: 24px;
        }

        &--margin-top {
            @include onTablet {
                margin-top: 30px;
            }
        }
    }
}
</style>
