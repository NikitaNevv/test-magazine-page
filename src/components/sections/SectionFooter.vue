<template>
    <footer class="section-footer">
        <div class="section-footer__wrapper">
            <div class="section-footer__box">
                <a href="#">
                    <img
                        class="section-footer__logo"
                        src="../ui/icons/logo-footer.png"
                        alt="the sydney morning herald"
                    >
                </a>

                <div class="section-footer__links">
                    <IconInstagram class="section-footer__link"/>
                    <IconTwitter class="section-footer__link"/>
                    <IconLinkedin class="section-footer__link"/>
                    <IconFacebook class="section-footer__link"/>
                </div>
            </div>

            <p class="section-footer__main-text section-footer__main-text--margin-top-20px">
                please read the terms and conditions carefully and agree
                to the following purchase terms and conditions before ordering:
            </p>

            <p class="section-footer__main-text">
                Privacy policy
            </p>

            <p class="section-footer__content">
                We are not affiliated in any way with any press release. All trademarks on this
                website, whether registered or not, are the property of their respective owners.
                The authors of this website are not sponsored by, or associated with any third party
                trademarks or their owners, nor do they represent them, their owners, their products or services.
                Please note that this website and the comments/response presented above are intended to serve
                as an example of what some people have achieved through this or those products. Their website and
                each page on this website is loosely based on a true story, but has been changed in many ways,
                including but not limited to the scope: stories, photos and comments. For this reason,
                this website, as well as any pages on this website, should not be taken literally, nor
                should it be treated as a story based on facts. Their website and the results described on it,
                although possible for some, should not be considered as results that can only be obtained by
                reproducing the methods used. I UNDERSTAND THAT THE WEBSITE CONTAINS EXAMPLES ILLUSTRATING WHAT
                CAN BE ACHIEVED WITH THIS/THESE PRODUCT(S) AND THAT THE STORYS/COMMENTS ABOVE DO NOT SHOULD BE
                TAKEN LITERALLY. Their website receives remuneration for clicks or purchase of products
                presented on this page.
            </p>

            <p class="section-footer__main-text">
                important information for customers
            </p>

            <p class="section-footer__content">
                The term "sponsored article" The advertorial is a combination of advertisement and article.
                It is written in the form of an article as an independent press release when it actually
                advertises he a specific product or object of interest. Sponsored articles present true
                information, but are edited by the author, who is most often a company promoting its
                products, in such a way as to emphasize or to clarify certain elements and thus maintain
                the interest of the reader. A well-known example are magazines available on board aircraft
                that contain articles about the destinations of the airline. Because of being a sponsored
                article, I AGREE THAT THE INTERNET WEBSITE HAS EXAMPLES OF ILLUSTRATING THAT CAN BE ACHIEVED
                THROUGH THIS PROGRAM AND THAT THE STORY DESCRIBED ABOVE SHOULD NOT BE UNDERSTOOD LITERALLY.
                Their website receives payment for clicks or purchases of products presented on this site.
                Their program is not a job, but a development opportunity that can help them learn how to
                make money through entrepreneurial initiatives. Anyone who decides to buy any money-making
                program is not guaranteed to earn money because of the fact that they have purchased this
                program. People who think they "bought this program, so they automatically make money" are
                wrong. Since every kind of education depends on many variables, it is hard to judge what
                effect you can expect, but the people who bought this program have signed up for additional
                workshops and training in addition to it, and have used the knowledge they gained in growing
                markets, kept to their commitments, and continued to learn. If you follow the path that these
                people have followed, you can expect a general increase in knowledge in the selected area,
                but you should not expect any specific earnings. The average users who have read the initial
                material but have not enrolled in training, are not keeping their commitments and do not
                use the knowledge they have gained, usually do not make any money. Although the success of
                the person presented is real, their image and name have been changed to protect their identity.
                According to the concept of the sponsored article, the comments included in the comments
                section are a representation of typical comments and experiences which have been presented
                in the form of dialogue but they are not real entries on this website but have been created
                for illustrative purposes.
            </p>
        </div>
    </footer>
</template>

<script>
export default {name: 'SectionFooter'}
</script>

<script setup>

import IconInstagram from '../ui/icons/IconInstagram.vue'
import IconTwitter from '../ui/icons/IconTwitter.vue'
import IconLinkedin from '../ui/icons/IconLInkedin.vue'
import IconFacebook from '../ui/icons/IconFacebook.vue'
</script>

<style lang="scss" scoped>
.section-footer {
    display: flex;
    background-color: $color-main-back;
    justify-content: center;
    padding: 34px 10px 30px 10px;
    border-top: 1px solid $color-main-grey;
    font-family: $family-secondary;

    &__wrapper {
        width: 1060px;
    }

    &__box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__logo {
        width: 160px;
        height: 18px;

        @include onTablet {
            width: 276px;
            height: 30px;
        }
    }

    &__links {
        display: flex;
        gap: 15px;
        color: $color-snow;
    }

    &__link {
        width: 25px;
        height: 25px;

        &:hover {
            color: rgba(255, 255, 255, 0.81);
        }

        &:active {
            color: rgba(255, 255, 255, 0.61);
        }
    }

    &__main-text {
        margin-top: 10px;
        font-weight: 700;
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: $color-snow;

        &--margin-top-20px {
            margin-top: 20px;
        }
    }

    &__content {
        margin-top: 5px;
        font-size: 10px;
        line-height: 160%;
        color: $color-snow;
    }
}
</style>
