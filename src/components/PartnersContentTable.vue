<template>
  <div class="partners-content-table">
    <ul
      class="table-row"
      v-for="data in dataPartners.slice(points.start, points.end)"
      :key="data.external_id"
    >
      <p class="row">
        {{ new Date(Date.parse(data.created)).toLocaleDateString() }}
      </p>
      <p class="row">{{ data.name }}</p>
      <p class="row">{{ data.company.name }}</p>
      <p class="row">{{ data.phone }}</p>
      <p class="row">{{ data.email }}</p>
      <p class="row">
        <StatusPartner :data="data.status" :idPartner="data.external_id" />
      </p>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StatusPartner from "@/components/StatusPartner";

export default {
  name: "PartnersContentTable",
  props: ["dataPartners"],
  data: () => ({
    startingPoint: 0,
    endPoint: 10,
  }),
  computed: {
    ...mapGetters(["points"]),
  },
  components: {
    StatusPartner,
  },
};
</script>

<style scoped lang="scss">
@import "~@/theme/_mixins.scss";
.partners-content-table {
  @include displayFlex();
  @include flexDirection(column);
  width: 100%;
  .table-row {
    width: 100%;
    max-height: 62px;
    @include displayFlex();
    justify-content: flex-start;
    background-color: #fff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06);
    .row {
      @include displayFlex();
      justify-content: space-between;
      align-items: center;
      flex-basis: 100%;
      padding: 24px 0 23.5px 24px;
      text-align: start;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #333333;
      margin: 0px 8px;
      width: 100%;
    }
  }
  .table-row:hover {
    background: #f3f3ff;
  }
}
</style>
