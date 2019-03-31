<style lang="scss">
.anime-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.block {
  width: 2rem;
  height: 2rem;
  border-color: black;
  border-width: 1px;
  border-style: solid;
  position: absolute;
}
.ring {
  width: 20rem;
  height: 20rem;
  border-width: 2px;
  border-color: rgba(1, 1, 1, 0.2);
  border-style: solid;
  position: absolute;
  top: 483px;
  left: 975px;
}
.solid-block {
  background: #33313b;
  width: 30rem;
  height: 30rem;
  position: absolute;
  top: 215px;
  left: 1170px;
}
</style>

<script lang="tsx">
import { VNode, CreateElement } from 'vue';
import { Component, Vue, Prop } from 'vue-property-decorator';
import anime from 'animejs';

interface Coordinate {
  x: number;
  y: number;
}

@Component
export default class Background extends Vue {
  coordinates: Coordinate[] = [];

  created() {
    setInterval(() => {
      if (this.coordinates.length !== 0) {
        this.coordinates.splice(0);
      }
    }, 1000);
    this.$nextTick(() => {
      anime({
        targets: '.ring',
        scale: 1.5,
        easing: 'easeOutSine',
        borderColor: 'rgba(0, 0, 0, 0)',
        duration: 2000,
        autoplay: true,
        loop: true,
      });
    });
  }

  render(h: CreateElement): VNode {
    const contNode: VNode[] = [];
    for (const el of this.coordinates) {
      contNode.push(this.getBlock(h, el.x, el.y));
    }
    return (
      <div
        class='anime-container'
        on-mousemove={(event: MouseEvent) => {
          this.onMouseMove(event);
        }}>
        <div class='solid-block'></div>
        <div class='ring'></div>
        {contNode}
      </div>
    ) as VNode;
  }

  updated() {
    this.setAnime();
  }

  getBlock(h: CreateElement, x: number, y: number): VNode {
    const computedStyle = {
      left: `${x}px`,
      top: `${y}px`,
    };
    return (<div class='block' style={computedStyle}></div>) as VNode;
  }

  onMouseMove(event: MouseEvent) {
    this.coordinates.push({
      x: event.clientX,
      y: event.clientY,
    });
  }

  private setAnime() {
    anime({
      targets: '.block',
      scale: 0,
      easing: 'easeOutSine',
      duration: 500,
    });
  }
}
</script>