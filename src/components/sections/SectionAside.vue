<template>
    <aside class="section-aside">
        <h2 class="section-aside__title">trending now</h2>

        <a class="section-aside__link" href="#">
            <img class="section-aside__link-img" src="../ui/icons/walmart.png" alt="image of walmart">

            <span class="section-aside__link-text">
                Walmart hiring crypto expert to develop digital currency strategy
            </span>
        </a>

        <a class="section-aside__link" href="#">
            <img class="section-aside__link-img" src="../ui/icons/mortgage.png" alt="image of house with coin">

            <span class="section-aside__link-text">
                Second-largest U.S. mortgage lender will accept payment in bitcoin
            </span>
        </a>

        <a class="section-aside__link" href="#">
            <img class="section-aside__link-img" src="../ui/icons/amazon-bitcoin.png" alt="image of amazon and bitcoin">

            <span class="section-aside__link-text">
                Amazon may soon allow users to pay in cryptocurrencies like Bitcoin
            </span>
        </a>

        <a class="section-aside__link" href="#">
            <img class="section-aside__link-img" src="../ui/icons/stocks.png" alt="image of stocks graphic">

            <span class="section-aside__link-text">
                Indian stock market turns world beaters with RBI in ‘whatever it takes’ mode
            </span>
        </a>

        <a class="section-aside__link" href="#">
            <img class="section-aside__link-img" src="../ui/icons/bitcoin.png" alt="image of bitcoin">

            <span class="section-aside__link-text">
                Bitcoin in longest winning streak in 2022 as crypto rebounds
            </span>
        </a>
    </aside>
</template>

<script>
export default {name: 'SectionAside'}
</script>

<script setup >

</script>

<style lang="scss" scoped>
.section-aside {
    flex-direction: column;
    gap: 15px;
    padding-bottom: 600px;

    &__title {
       text-transform: uppercase;
    }

    &__link {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: 'Open Sans', sans-serif;
        color: rgba(0, 0, 0, 0.8);

        &:hover {
            color: rgba(0, 0, 0, 0.6);
        }

        &:active {
            color: rgba(0, 0, 0, 0.4);
        }

        &-img {
            width: 100px;
            height: 75px;
        }

        &-text {
            font-size: 14px;
            line-height: 22px;
        }
    }
}
</style>
