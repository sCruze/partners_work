<template>
  <ul class="table-row">
    <div
      class="row"
      v-for="dataRow in dataRowTable"
      :key="dataRow.rowName"
      :class="dataRow.className"
    >
      <p>{{ dataRow.rowName }}</p>
    </div>
  </ul>
</template>

<script>
export default {
  name: "NameRowTable",
  props: ["dataRowTable"],
};
</script>

<style scoped lang="scss">
@import "~@/theme/_mixins.scss";
.table-row {
  @include displayFlex();
  @include unselectable();
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06);
  justify-content: flex-start;
  height: 62px;
  width: 100%;
  .row {
    @include displayFlex();
    flex-basis: 25%;
    width: 100%;
    padding: 24px 0 23.5px 24px;
    font-family: "Inter-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #333333;
    margin: 0px 8px;
  }
}
</style>
