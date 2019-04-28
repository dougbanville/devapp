import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  wavesurferStatus: service(),
  actions: {
    playWaveSurfer() {
      this.wavesurferStatus.wavesurfer.play();
    }
  }
});
