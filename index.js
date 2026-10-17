/**
 * merestone — placeholder release (0.0.0).
 *
 * This package does nothing yet. It exists so that the name belongs to the thing described in
 * README.md; the real implementation — the MCP server (show / queue / knowledge / touches / claim)
 * plus the reference gate — lands in 0.1.0.
 *
 * The one principle everything else serves: **spend as little context as possible.**
 * One object one code, codes never reused, references re-checked by a gate, records superseded
 * instead of edited: none of these is the point. Each is just the cheapest way we know to cut the
 * context an agent burns on *misunderstanding* — re-reading a file because a pointer was dead, or
 * re-deriving what a code meant because the number had been reused.
 *
 * @module merestone
 */

export const NAME = 'merestone'
export const VERSION = '0.0.0'
export const PLACEHOLDER = true

/** The design principle. Everything else in this project is in service of it. */
export const PRINCIPLE = 'Spend as little context as possible.'

/**
 * Mechanisms are means, not ends. Each line is one mechanism and the context waste it removes —
 * read this before arguing about any of them.
 */
export const MECHANISMS = [
  'one record, one code — no tree walk to find "the" document',
  'codes never reused or renamed — no disambiguation between two things that once shared a number',
  'supersede, never edit — no re-reading a whole record just to learn what changed',
  'a gate re-checks every reference — a dead pointer fails at check time, not after three wrong files',
  'excerpts say they were truncated — a 40-line body is never mistaken for the whole record',
  'no numbers in tool descriptions — the tool surface stays stable and cacheable',
]

export const STATUS =
  'Name reserved (0.0.0). The MCP server — show / queue / knowledge / touches / claim, plus the reference gate — ships as 0.1.0.'

export default { NAME, VERSION, PLACEHOLDER, PRINCIPLE, MECHANISMS, STATUS }
