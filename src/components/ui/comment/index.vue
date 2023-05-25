<template>
  <article class="ui-comment">
    <div class="ui-comment__img-box">
      <img class="ui-comment__img" :src="`/public/img/${props.info.photo}.png`" alt="User's photo">
    </div>

    <div class="ui-comment__content-box">
      <div class="ui-comment__content-top">
        <span class="ui-comment__name">{{ props.info.name.split(' ')[0] }} <span class="ui-comment__nickname" v-if="props.info.nickname">{{ props.info.nickname }}</span> {{ props.info.name.split(' ')[1] }}</span>
        <span class="ui-comment__date">{{ props.info.date }}</span>
      </div>

      <p class="ui-comment__text" v-html="props.info.text"></p>

      <span class="ui-comment__rating">
        <svg class="ui-comment__like" @click.once="props.info.count++" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.61157 0.439306C8.81257 -0.397694 7.51957 0.0523071 7.18057 1.02931C6.90057 1.83631 6.53657 2.80131 6.18257 3.51231C5.12257 5.63831 4.50457 6.84831 2.79857 8.36231C2.54852 8.57282 2.26401 8.73859 1.95757 8.85231C0.827565 9.29831 -0.232435 10.4673 0.0445653 11.8563L0.397565 13.6213C0.488582 14.0767 0.704634 14.4977 1.0215 14.8372C1.33837 15.1767 1.74353 15.4212 2.19157 15.5433L7.79157 17.0703C8.39314 17.2342 9.02221 17.2713 9.63887 17.1792C10.2555 17.0871 10.8463 16.8679 11.3738 16.5354C11.9013 16.2029 12.3539 15.7645 12.7029 15.2479C13.052 14.7313 13.2899 14.1477 13.4016 13.5343L14.0866 9.77231C14.1652 9.33992 14.1479 8.89553 14.0359 8.47056C13.9239 8.0456 13.7198 7.65043 13.4382 7.31302C13.1566 6.97561 12.8043 6.7042 12.4063 6.51796C12.0082 6.33173 11.574 6.23524 11.1346 6.23531H10.2516L10.2616 6.18331C10.3416 5.77531 10.4376 5.21331 10.5016 4.60031C10.5666 3.99031 10.6016 3.31631 10.5506 2.6883C10.5006 2.07131 10.3666 1.4383 10.0466 0.958305C9.93657 0.794306 9.77457 0.610306 9.61157 0.439306Z" fill="#cccccc"/>
        </svg>

        <span class="ui-comment__count">{{ props.info.count }}</span>

        <svg class="ui-comment__dislike" @click.once="props.info.count--" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.3148 16.1997C7.6548 17.1767 8.9468 17.6267 9.7448 16.7897C9.9088 16.6197 10.0708 16.4347 10.1808 16.2707C10.5008 15.7907 10.6358 15.1577 10.6848 14.5407C10.7348 13.9127 10.7008 13.2387 10.6368 12.6287C10.5795 12.0978 10.4991 11.5696 10.3958 11.0457L10.3858 10.9937H11.2688C11.7083 10.9938 12.1424 10.8973 12.5405 10.7111C12.9386 10.5248 13.2909 10.2534 13.5725 9.91601C13.8541 9.5786 14.0581 9.18344 14.1701 8.75847C14.2822 8.33351 14.2995 7.88912 14.2208 7.45673L13.5368 3.69473C13.4252 3.08109 13.1872 2.49735 12.838 1.98056C12.4888 1.46377 12.036 1.02521 11.5083 0.692723C10.9806 0.360233 10.3896 0.141071 9.77268 0.0491447C9.15578 -0.0427814 8.52651 -0.00546384 7.9248 0.158729L2.3248 1.68573C1.87714 1.80818 1.4724 2.05284 1.15591 2.39229C0.839413 2.73175 0.623659 3.1526 0.532803 3.60773L0.179803 5.37273C-0.0981967 6.76173 0.963803 7.93073 2.0928 8.37773C2.4158 8.50473 2.7068 8.66673 2.9328 8.86773C4.6398 10.3807 5.2578 11.5907 6.3178 13.7167C6.6718 14.4267 7.0358 15.3927 7.3158 16.1987L7.3148 16.1997ZM9.2798 10.6147V10.6167L9.2818 10.6237L9.2888 10.6547C9.33488 10.8482 9.37689 11.0425 9.4148 11.2377C9.4908 11.6277 9.5818 12.1577 9.6418 12.7337C9.7028 13.3107 9.7318 13.9177 9.6878 14.4617C9.6438 15.0167 9.5278 15.4467 9.3478 15.7157C9.2888 15.8057 9.1768 15.9377 9.0218 16.0987C8.8228 16.3077 8.3938 16.2587 8.2598 15.8717C7.9768 15.0577 7.5958 14.0417 7.2118 13.2707C6.1448 11.1307 5.4558 9.76973 3.5958 8.11973C3.25888 7.83168 2.8745 7.6043 2.4598 7.44773C1.5798 7.09973 1.0128 6.29873 1.1598 5.56873L1.5118 3.80373C1.56649 3.53047 1.69623 3.27784 1.88646 3.07419C2.07669 2.87053 2.3199 2.7239 2.5888 2.65073L8.1888 1.12373C8.65672 0.996164 9.14605 0.967241 9.62574 1.03879C10.1054 1.11035 10.565 1.28081 10.9753 1.53938C11.3857 1.79795 11.7378 2.13897 12.0093 2.54082C12.2809 2.94267 12.466 3.39657 12.5528 3.87373L13.2368 7.63573C13.2892 7.92399 13.2777 8.22025 13.203 8.50356C13.1283 8.78687 12.9923 9.05031 12.8046 9.27525C12.6168 9.50019 12.382 9.68114 12.1166 9.80529C11.8512 9.92944 11.5618 9.99377 11.2688 9.99373H9.7638C9.68794 9.9939 9.61311 10.0113 9.54498 10.0447C9.47685 10.0781 9.41721 10.1265 9.37057 10.1864C9.32394 10.2462 9.29153 10.3159 9.2758 10.3901C9.26008 10.4643 9.26144 10.5411 9.2798 10.6147Z" fill="#cccccc"/>
        </svg>
      </span>
    </div>
  </article>
</template>

<script lang="ts">
export default {name: 'UiComment'}
</script>

<script setup lang="ts">
interface Props {
  info: any
}

//@ts-ignore
const props = withDefaults(defineProps<Props>(), {
  info: null
})
</script>

<style lang="scss">
.ui-comment__text {
  a {
    color: #096FFA;
    transition-duration: 0.3s;
    transition-property: color;
    &:hover {
      color: lighten(#096FFA, 20%)
    }
    &:active {
      opacity: 0.6;
    }
  }
}
</style>

<style lang="scss" scoped>
.ui-comment {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  gap: 16px;

  &__img-box {
    width: 40px;
    height: 40px;
    position: relative;
    flex-shrink: 0;
    user-select: none;
  }

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__name {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #323232;
  }

  &__nickname {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #096FFA;
    display: inline-flex;
    align-items: center;
    &:before {
        content: '<';
      color: #000000;
      position: relative;
      top: -1px;
    }
    &:after {
      content: '>';
      color: #000000;
      position: relative;
      top: -1px;
    }

  }

  &__date {
    font-size: 12px;
    line-height: 1;
    color: #cccccc;
    font-weight: 300;
    margin-left: 5px;

  }

  &__text {
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: $color-main-text;
  }

  &__rating {
    margin-top: 10px;
    display: inline-flex;
    gap: 5px;
  }

  &__like {
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      opacity: 0.5;
    }
  }

  &__count {
    color: #cccccc;
    user-select: none;
  }

  &__dislike {
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      opacity: 0.5;
    }

  }
}
</style>
