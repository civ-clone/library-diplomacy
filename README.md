# library-diplomacy

A library of diplomacy-related items like `Interaction`s, `Proposal`s, `Declaration`s, etc.

This style of library will slowly replace all the individual `base-x-y` style repos to reduce the overall number of
repos, since this approach is just as re-usable.

## Declarations

`Peace`, `War`, `Ceasefire` and `Alliance` (each re-exported from its base-diplomacy-declaration-* package; an
`Alliance` is a `Peace`), and the one-way `ShamPeace` and `Vendetta`.

## Proposals

Each carries what it needs:

| Proposal | Carries |
|---|---|
| `OfferPeace`, `OfferCeasefire`, `ProposeAlliance`, `CancelAlliance`, `AskAlly`, `DemandWithdrawal`, `ShareMaps` | nothing |
| `OfferPeaceWithGift` | `kind()`, `gifts()` |
| `CancelTreaty` | `with()`: the third player |
| `JoinWar` | `against()`: the third player |
| `DemandTribute` | `tribute()`: gold or an advance; `kind()` |
| `Gift` | `gift()`: gold, an advance or a unit; `kind()` is `'gold'`, `'advance'` or `'unit'` |
| `SellAdvance` | `advance()` and its `price()` in gold |
| `ExchangeKnowledge` | `advances()` |

What a proposal does once it's accepted is the rule set's `Resolved` rules.
