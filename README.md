# merestone

> **Name reserved.** This is a placeholder release (`0.0.0`), published so that the name belongs to
> the project described below. The first real release — the MCP server — will be `0.1.0`.
> Until then this package does nothing except hold the name; please do not depend on it.

**Stable addresses for durable project memory — and the fewest tokens it takes to find them.**

`merestone` is an MCP server that turns a repository's working documents into records addressed by
short codes (`PL-…`, `IS-…`) that are **never renamed and never reused**, with every reference
**re-checked by a gate** so a dead pointer fails loudly instead of silently.

## The one principle everything else serves

**Spend as little context as possible.**

Everything this project asks of you — one object, one code; codes that are never reused; records that
are superseded rather than edited; references that a gate re-checks — exists for exactly one reason:
**misunderstanding costs context**. Every token spent re-reading a file because a pointer turned out
to be dead, or re-deriving what `IS-048` meant because the number had been reused, is a token not
spent on the actual work.

The rules are not the point. They are the cheapest way we know to keep the context bill down.

| mechanism | the context it saves |
| --- | --- |
| one record, one code | no tree walk to find "the" document — a code is a few tokens and it resolves |
| codes never reused, never renamed | no disambiguation between two things that once shared a number |
| supersede, never edit | no re-reading a whole record just to learn what changed |
| a gate re-checks every reference | a dead pointer fails at check time, not after three wrong files are loaded |
| excerpts that say they were truncated | a 40-line body is never mistaken for the whole record |
| no numbers in tool descriptions | the tool surface stays stable and cacheable |
| low-frequency commands stay in the CLI | every tool name is permanent context; only the frequent ones earn one |

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
