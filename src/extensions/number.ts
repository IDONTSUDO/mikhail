const _maxDesignScale = 1.0;
const _minDesignScale = 0.6;

export const NumberExtensions = () => {
  if (Number.prototype.fh === undefined) {
    Number.prototype.fh = function () {
      return (
        String(Math.max(_minDesignScale, Math.min(_maxDesignScale, window.innerHeight / 844)) * Number(this)) + "px"
      );
    };
  }
  if (Number.prototype.fw === undefined) {
    Number.prototype.fw = function () {
      return String(Math.max(_minDesignScale, Math.min(_maxDesignScale, window.innerWidth / 1000)) * Number(this));
    };
  }
};
