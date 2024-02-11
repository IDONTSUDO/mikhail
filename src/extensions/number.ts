const _maxDesignScale = 1.0;
const _minDesignScale = 0.6;

export const NumberExtensions = () => {
  if (Number.prototype.fh === undefined) {
    Number.prototype.fh = function (offset?: number) {
      let size = Math.max(_minDesignScale, Math.min(_maxDesignScale, window.outerHeight / 844)) * Number(this);
      if (offset) {
        size += offset;
      }
      return String(size) + "px";
    };
  }
  if (Number.prototype.fw === undefined) {
    Number.prototype.fw = function (offset?: number) {
      let size = Math.max(_minDesignScale, Math.min(_maxDesignScale, window.outerWidth / 1000)) * Number(this);
      if (offset) {
        size += offset;
      }
      return String(size) + "px";
    };
  }
  if (Number.prototype.shLessEq === undefined) {
    Number.prototype.shLessEq = function () {
      return Number(this) >= window.outerWidth;
    };
  }
};
