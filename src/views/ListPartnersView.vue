<template>
  <div class="list-partners-view">
    <div class="title">
      <p>Партнеры</p>
      <p class="counter-partners">({{ lengthPartners }})</p>
    </div>
    <div class="table">
      <NameRowTable :dataRowTable="rowTableName" />
      <PartnersContentTable :dataPartners="allPartners" />
    </div>
    <BottomNavBar :lengthPartners="lengthPartners" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import NameRowTable from "@/components/NameRowTable";
import PartnersContentTable from "@/components/PartnersContentTable";
import BottomNavBar from "@/components/BottomNavBar";

export default {
  name: "ListPartnersView",
  data: () => ({
    rowTableName: [
      { rowName: "Дата регистрации", className: "row_date_registration" },
      { rowName: "Имя", className: "row_user_name" },
      { rowName: "Название компании", className: "row_company_name" },
      { rowName: "Телефон", className: "row_phone" },
      { rowName: "E-mail", className: "row_email" },
      { rowName: "Статус", className: "row_status" },
    ],
  }),
  methods: {
    ...mapActions(["fetchPartners"]),
  },
  computed: {
    ...mapGetters(["allPartners", "lengthPartners"]),
  },
  async mounted() {
    this.fetchPartners();
  },
  components: {
    NameRowTable,
    PartnersContentTable,
    BottomNavBar,
  },
};
</script>

<style scoped lang="scss">
@import "~@/theme/_mixins.scss";
.list-partners-view {
  @include displayFlex();
  @include flexDirection(column);
  width: 1243px;
  height: 100%;
  margin: 0 auto;
  .title {
    @include displayFlex();
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
    max-height: 24px;
    margin: 32px 0 28px 0;
    p {
      position: static;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 24px;
      color: #333333;
    }
    .counter-partners {
      position: static;
      left: 82.93%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #bdbdbd;
      margin: 0px 8px;
    }
  }
  .table {
    @include displayFlex();
    @include flexDirection(column);
    width: 100%;
  }
}
</style>
