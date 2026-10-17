# merestone

> **Name reserved.** This is a placeholder release (`0.0.0`), published on 2026-10-13 so that the name
> belongs to the project described below. The first real release — the MCP server — will be `0.1.0`.
> Until then this package does nothing except hold the name; please do not depend on it.

**Stable addresses for durable project memory.**

`merestone` is an MCP server that turns a repository's working documents into records addressed by
short codes (`PL-…`, `IS-…`) that are **never renamed and never reused**, with every reference
**re-checked by a gate** so a dead pointer fails loudly instead of silently.

## Why "merestone"

A *merestone* is the stone that marks a boundary. It does not move when the land changes hands, and
every year the parish walks the boundary and beats the marks — not because the stones rot, but
because people forget. This package does the same for a codebase's memory: the code is the stone,
the gate is the walk, and the whole thing is written for the next session that arrives without
context.

## Planned surface

| tool | answers |
| --- | --- |
| `show` | what does this code actually say |
| `queue` | what is next / what is ready / what is blocked |
| `knowledge` | what traps are known before I touch this |
| `touches` | which records name this file |
| `claim` | which code may I take next |

Low-frequency commands (`refs`, `stale`, `codemap`) stay in the CLI on purpose: a tool name is
permanent context, so only the frequent ones get one.

## Status

- `0.0.0` — name placeholder (this release)
- `0.1.0` — first MCP server release (planned)

## License

MIT
