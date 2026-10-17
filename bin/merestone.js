#!/usr/bin/env node
/**
 * `npx merestone` —— 占位期的一行回执。
 *
 * 存在的理由：一个能跑起来的 bin 比一个空包更像"有主的名字"，
 * 也让好奇的人在两秒内知道这是什么、什么时候有真的。
 */

import { VERSION, STATUS } from '../index.js'

const lines = [
  `merestone ${VERSION} — name reserved.`,
  '',
  'Stable addresses for durable project memory.',
  'Records addressed by codes that are never renamed or reused; every reference',
  're-checked by a gate, so a dead pointer fails loudly instead of silently.',
  '',
  STATUS,
  '',
  'https://github.com/starwithfox/merestone',
]

process.stdout.write(lines.join('\n') + '\n')
