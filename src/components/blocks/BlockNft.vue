<template>
    <section class="block-nft">
        <div class="block-nft__image-container">
            <img class="block-nft__image" src="../ui/icons/nft-banner.jpg" alt="image of NFTs">
        </div>
    </section>

    <div class="block-nft__box">
        <h2 class="block-nft__title">Editor's Note: WHAT IS NFT</h2>

        <p class="block-nft__text">
            Editor's Note: WHAT IS NFT An NFT token is a unique an image, a song or even the text message with a digital
            certificate of ownership. There is an NFT market with $10 billion in fund turnover. Authors and celebrities
            create a unique NFT, and the buyer becomes the owner of an exclusive asset that grows in value like Vincent
            van Gogh painting or a rare baseball card. Now NFTs are in great demand, and single objects of digital art
            are selling for up to $70 million per NFT.
        </p>
    </div>
</template>

<script>
export default {name: 'BlockNft'}
</script>

<script setup>

</script>

<style lang="scss" scoped>
.block-nft {
    display: flex;
    flex-direction: column;
    padding-top: 15px;

    @include onTablet {
        padding-top: 30px;
    }

    &__image-container {
        position: relative;
        width: 100%;
        max-height: 192px;
        overflow: hidden;
        border-radius: 10px 10px 0 0;

        &::after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }

        @include onTablet {
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

    &__box {
        background-color: rgba(9, 111, 250, 0.02);
        padding: 20px;
        border: 2px solid $color-main-blue;
        border-radius: 0 0 10px 10px;
    }

    &__title {
        color: #000;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        color: $color-main-blue;

        @include onTablet {
            font-size: 18px;
        }
    }

    &__text {
        font-size: 16px;
        line-height: 150%;
        margin-top: 5px;
        color: $color-main-text;

        @include onTablet {
            font-size: 18px;
        }
    }
}
</style>
