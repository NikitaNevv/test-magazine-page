<template>
    <section class="section-comments">
        <h2 class="section-comments__title">Comments</h2>
            <UiComment
                class="section-comments__item"
                v-for="item in data.items"
                :key="item.name"
                :info="item"
                :class="`section-comments__item--${item.type}`"
            />
    </section>
</template>

<script>
export default {name: 'SectionComments'}
</script>

<script setup >

import UiComment from '../../ui/comment/index.vue';
import { reactive } from 'vue';

const data = reactive({
    items: [
        {
            photo: 1,
            name: 'William Daniel',
            date: '7 minutes ago',
            text: 'I can’t believe this story is true! I’ve just seen the profit on my account... Well, now I have money to quit my job and see the world. Mexico, wait for me🏖🍹\n',
            count: 156,
            type: 'default',
            nickname: ''
        },
        {
            photo: 2,
            name: 'Dewson Buck',
            date: '16 minutes ago',
            text: 'Everyone should invest today. To have a comfortable, secure—and fun—future, you need to build the financial cushion that will fund it all. I want to try this platform!',
            count: 129,
            type: 'default',
            nickname: ''
        },
        {
            photo: 3,
            name: 'Elijah Douglas',
            date: '19 minutes ago',
            text: 'I love this platform, it’s my second month with it, and I am very content with the results. My friend told me once about it, and after that I registered. Now when I see this story on the web, I realize that soon everyone will use this platform.',
            count: 326,
            type: 'default',
            nickname: ''
        },
        {
            photo: 4,
            name: 'Callie Simpson',
            date: '25 minutes ago',
            text: 'I had no previous experience in this area, but it literally took me 5 minutes to register and start investing. It should be the easiest way to invest ever!',
            count: 311,
            type: 'default',
            nickname: ''
        },
        {
            photo: 5,
            name: 'Adalynn Bagshaw',
            date: '7 minutes ago',
            text: 'Everyone speaks about NFTs, I\'ve heard so much about it, and now I feel that I should give this a try!',
            count: 515,
            type: 'default',
            nickname: ''
        },
        {
            photo: 6,
            name: 'Clark Roth',
            date: '38 minutes ago',
            text: 'I want to try that too!!',
            count: 123,
            type: 'default',
            nickname: ''
        },
        {
            photo: 7,
            name: 'Jayden Tanner',
            date: '23 minutes ago',
            text: 'Hi, Clark! Here\'s the link we used to check out the platform. <a href="http://endless.horse/" target="_blank">You can register too.</a>',
            count: 75,
            type: 'answer',
            nickname: 'The Sydney Morning Herald'
        },
        {
            photo: 8,
            name: 'Elena Wiseman',
            date: '44 minutes ago',
            text: 'It’s much better than other investing strategies😱😱😱😱 I have tried different platforms and investing opportunities and today this is my favourite one! ',
            count: 165,
            type: 'default',
            nickname: ''
        }
    ]
})
</script>

<style lang="scss" scoped>
.section-comments {
    font-family: 'Open Sans', sans-serif;

    &__title {
        color: #000;
        font-size: 18px;
        line-height: 1;
        border-bottom: 1px solid #cccccc;
        padding-bottom: 7px;
        color: $color-main-blue;

        @include onTablet {
            color: $color-secondary-text;
        }
    }

    &__item {
        margin-top: 15px;

        &--answer {
            margin-left: 60px;
        }
    }
}
</style>
