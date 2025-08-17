'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.dejaVuSans = void 0;
const local_1 = __importDefault(require('next/font/local'));
const dejaVuSans = (0, local_1.default)({
  src: [
    {
      path: '../public/fonts/DejaVuSans.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/DejaVuSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/DejaVuSans-Oblique.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/DejaVuSans-BoldOblique.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-deja-vu-sans',
});
exports.dejaVuSans = dejaVuSans;
