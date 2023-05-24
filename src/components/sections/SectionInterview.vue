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

        <p class="section-interview__text section-interview__text--margin">
            An event of the Independent Business Foundation (IBF) took place the other day. The main event announcement
            was the participation of Nick Kyrgios. Everyone thought it was a marketing ploy to draw attention to the
            business event, so our journalist asked Nick Kyrgios on the sidelines about his participation. The star
            shocked us with an unexpected story.
        </p>

        <p class="section-interview__text section-interview__text--margin section-interview__text--bold">
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

        <BlockNft/>

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

        <BlockInterviewPhotos class="section-interview__block"/>

        <p class="section-interview__text section-interview__text--margin">
            On this, our conversation was interrupted. Our editorial team conducted an investigation, and his financial
            advisor's assistant shared information about
            <a class="section-interview__text-link" href="#">NFT Profit</a>
        </p>

        <p class="section-interview__text section-interview__text--margin">
            So we got in touch with one of the founders, who shared more information about the project.
        </p>

        <BlockInterviewSounders class="section-interview__block"/>

        <p class="section-interview__text section-interview__text--margin">
            <a class="section-interview__text-link" href="#">NFT Profit</a>
            is an auto investing
            system powered by artificial intelligence. We have created a self-learning logic
            core to accurately identify the most profitable transactions at the NFT market to predict
            the growth of the most promising assets.
        </p>

        <p class="section-interview__text">
            Our main goal was to create an innovative investing tool that did not exist before so that
            even a child or a very old man could make money on NFT market growth.
        </p>


        <p class="section-interview__text">
            Our product wasn't widely announced because we have a technical limit on the number
            of users. There's no need to overload the system. It is used by only a few hundred
            investors now. We welcome all new users, but you should hurry up.
        </p>

        <p class="section-interview__text">
            Now we are continuing to develop the system, but big banks are
            trying in every possible way to hide any information about
            <a class="section-interview__text-link" href="#">NFT Profit</a>.
        </p>

        <p class="section-interview__text">
            It is difficult for us to work in such a situation,
            and what warms our souls is the letters of gratitude from our users.
            These are people who have already tried the investing opportunities and have
            a stable passive income. For example, here is a letter that came to us yesterday.
        </p>

        <BlockInterviewFeedBack class="section-interview__block"/>

        <p class="section-interview__text section-interview__text--margin">
            Words like this remind us of the importance of our mission and keep us going despite the difficulties. I can
            say for sure that large banks can block us at any time. Right now you have a chance to start building your
            free and happy future. Welcome! - That's how
            <a class="section-interview__text-link" href="#">NFT Profit</a>
            representative ended his speech.
        </p>

        <button-main-link class="section-interview__btn-link">Register now</button-main-link>

        <BlockInterviewWarning class="section-interview__block"/>
    </section>
</template>

<script>
export default {name: 'SectionInterview'}
</script>

<script setup>
import BlockNft from '../blocks/BlockNft.vue'
import BlockInterviewPhotos from '../blocks/BlockInterviewPhotoes.vue'
import BlockInterviewSounders from '../blocks/blockInterviewSounders.vue'
import BlockInterviewFeedBack from '../blocks/BlockInterviewFeedback.vue'
import ButtonMainLink from '../ui/ButtonMainLink.vue'
import BlockInterviewWarning from '../blocks/BlockInterviewWarning.vue'
</script>

<style lang="scss" scoped>
.section-interview {
    &__image-container {
        position: relative;
        width: 100%;
        height: 193px;
        overflow: hidden;

        &::after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }

        @media screen and (min-width: 500px) {
            min-height: 300px;
        }

        @include onTablet {
            padding-bottom: 0;
            min-height: 420px;
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

        &--margin {
            margin-top: 15px;

            @include onTablet {
                margin-top: 30px;
            }
        }

        &-link {
            font-weight: 700;
            color: $color-main-blue;
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

    &__block {
        margin-top: 10px;

        @include onTablet {
            margin-top: 30px;
        }
    }

    &__btn-link {
        margin: 15px auto 0 auto;

        @include onTablet {
            margin: 30px auto 0 auto;
        }
    }
}
</style>
