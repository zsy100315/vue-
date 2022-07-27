import Mock from 'mockjs';

import menu from './menu';
import { MockParams } from '@/types/mockParams';

const mocks = [...menu];
// console.log(mocks);
//延迟时间
Mock.setup({
  timeout: '200-1000'
});

export function mockXHR() {
  let i: MockParams;
  for (i of mocks) {
    Mock.mock(new RegExp(i.url), i.methods || 'get', i.response);
  }
}
