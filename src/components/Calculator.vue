<template>
  <div id="calculator">
		<b-container>
			<b-row>
				<b-col></b-col>
				<b-col cols="10">
					<b-card header="前提条件">
						<b-card-text>前半は通常楽曲のみ、後半はイベ楽曲のみを消化する想定です</b-card-text>
						<b-card-text>イベ楽曲は後半戦のMMのみで走る想定です</b-card-text>
						<b-card-text>1楽曲プレイにかかる想定時間は一律3分で計算しています</b-card-text>
						<b-card-text>通常楽曲で獲得するイベントPtは除外しているため、必要な石数やかかる時間は結果よりも少なくなります</b-card-text>
						<b-card-text>1時間で作ったので、細かい条件とか考えてません。あくまで目標値としての使用をおすすめします</b-card-text>
					</b-card>
					<b-form>
						<b-form-group id="group-eventPointGoal" label="目標ポイント" label-for="input-eventPointGoal">
							<b-form-input id="input-eventPointGoal" type="number" v-model="eventPointGoal"></b-form-input>
						</b-form-group>
						<b-form-group id="group-maxStamina" label="MAXスタミナ" label-for="input-maxStamina">
							<b-form-input id="input-maxStamina" type="number" v-model="maxStamina"></b-form-input>
						</b-form-group>
					</b-form>
					<b-card class="mb-2" header="計算結果">
						<b-card-text>
							<b-container>
								<b-row>
									<b-col>必要イベアイテム数：</b-col>
									<b-col cols="6">{{ requiredEventItem }}</b-col>
								</b-row>
								<b-row>
									<b-col>通常楽曲プレイに必要な石：</b-col>
									<b-col cols="6">{{ requiredJwelPerNormalSong }}</b-col>
								</b-row>
								<b-row>
									<b-col>通常楽曲必要プレイ数：</b-col>
									<b-col cols="6">{{ requiredPlayingCountNormalSong }}</b-col>
								</b-row>
								<b-row>
									<b-col>イベント楽曲必要プレイ数(Boost)：</b-col>
									<b-col cols="6">{{ requiredPlayingCountEventSong }}</b-col>
								</b-row>
								<b-row>
									<b-col>必要な石数：</b-col>
									<b-col cols="6">{{ requiredJwel }}</b-col>
								</b-row>
								<b-row>
									<b-col>かかる時間(通常)(hour)：</b-col>
									<b-col cols="6">{{ requiredTimeToPlayNormalSong }}時間</b-col>
								</b-row>
								<b-row>
									<b-col>かかる時間(イベ)(hour)：</b-col>
									<b-col cols="6">{{ requiredTimeToPlayEventSong }}時間</b-col>
								</b-row>
							</b-container>
						</b-card-text>
					</b-card>
				</b-col>
				<b-col></b-col>
			</b-row>
		</b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
				eventPointGoal: 0,
				maxStamina: 0,
				eventItemPerNormalSong: 595,
				eventPointPerEventItem: 2.983,
      }
    },
    computed: {
      requiredEventItem: function() {
				return Math.ceil(this.eventPointGoal / this.eventPointPerEventItem)
			},
			requiredJwelPerNormalSong: function() {
				return Math.ceil(300 / this.maxStamina * 50)
			},
			requiredPlayingCountNormalSong: function() {
				return Math.ceil(this.requiredEventItem / this.eventItemPerNormalSong)
			},
			requiredPlayingCountEventSong: function() {
				return Math.ceil(this.requiredEventItem / 720)
			},
			requiredJwel: function() {
				return Math.ceil(this.requiredJwelPerNormalSong * this.requiredPlayingCountNormalSong)
			},
			requiredTimeToPlayNormalSong: function() {
				return Math.ceil(3 * this.requiredPlayingCountNormalSong / 60 * 10) / 10
			},
			requiredTimeToPlayEventSong: function() {
				return Math.ceil(3 * this.requiredPlayingCountEventSong / 60 * 10) / 10
			},
    }
  }
</script>

<style>
#calculator {
  margin-top: 20px;
}
</style>