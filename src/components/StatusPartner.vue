<template>
  <div class="status-partner" :class="dataStatus">
    <span>
      <p>{{ dataStatus === "active" ? "Активен" : "Заблокирован" }}</p>
    </span>
    <img
      :src="dataStatus === 'active' ? imgLock : imgUnlock"
      @click="blockAndUnblock"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import unlock from "../assets/icons/Разблокировать.svg";
import lock from "../assets/icons/Заблокировать.svg";

export default {
  name: "StatusPartner",
  props: ["dataStatus", "idPartner"],
  data: () => ({
    imgLock: lock,
    imgUnlock: unlock,
  }),
  methods: {
    ...mapActions(["blockPartner", "unblockPartner"]),
    blockAndUnblock() {
      if (this.dataStatus === "activate") {
        this.blockPartner(this.idPartner);
      } else if (this.dataStatus !== "activate") {
        this.unblockPartner(this.idPartner);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/theme/_mixins.scss";
.table-row:hover {
  .status-partner {
    img {
      opacity: 1;
    }
  }
}
.status-partner {
  @include displayFlex();
  justify-content: space-between;
  width: 100%;
  span {
    @include displayFlex();
    @include flexContentCenter();
    flex-direction: row;
    padding: 6px 16px;
    width: 118px;
    height: 30px;
    border-radius: 20px;
    p {
      padding: 17.5px 3px;
      @include displayFlex();
      @include flexContentCenter();
      font-family: "Inter-Light";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      text-transform: lowercase;
    }
  }
  img {
    opacity: 0;
    margin-right: 11px;
  }
}

.blocked {
  span {
    background: #ffe2e2;
    p {
      width: 83px;
      height: 24px;
      color: #eb5757;
    }
  }
}

.active {
  span {
    background: #f3f3ff;
    p {
      width: 48px;
      height: 24px;
      color: #99579e;
    }
  }
}
</style>
