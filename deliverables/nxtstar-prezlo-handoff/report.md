# NXTSTAR website implementation and Prezlo product handoff

Prepared for Lopty Pascal and Claude on 23 November 2026

## Purpose and conclusion

Turn the NXTSTAR website work into a repeatable Prezlo implementation workflow. The useful product is a manager that takes a business objective, understands the current website and approved business facts, makes an integrated page and linking plan, executes supported changes, and verifies the public result. Customers should be able to describe the customers they want to reach without learning how to coordinate SEO tools themselves.

NXTSTAR demonstrates a practical method: preserve existing useful URLs, fill genuine service gaps, answer buyer questions on the right pages, connect the pages through a service directory and contextual links, keep visible content and structured data consistent, and verify the built and deployed website. The recorded result is implementation and publication, not proven recovery of ChatGPT recommendations.

Prezlo already implements much of this foundation. The inspected source contains positioning plans, approved facts and evidence, modelled buyer keywords, article research and review, site drafts, internal link insertion, technical diagnostics, CMS operations, and a repository coding workspace. The main recommendation is to connect and extend these components through a durable website programme with explicit intent ownership and dependency-aware execution. Replacing the existing systems with another generic writer would lose useful safeguards.

## Reading guide and evidence status

The first sections explain NXTSTAR and its reusable technique. The next sections identify Prezlo capabilities and concrete gaps, then specify a proposed implementation manager, a pilot and acceptance tests. The appendix reproduces the user and assistant message history returned for this chat, excluding tool logs and image binaries. It includes the current turn only up to retrieval.

Historical NXTSTAR checks are identified by date and commit. The current checkout is at cee44be and reports four commits behind its locally recorded origin/main; no pull or website change was performed for this report. Prezlo findings are a read-only source review of the named local files, not a production runtime audit or a claim that every feature is deployed. Existing project documents describe earlier validations and limitations; those are not new test results.

The travel-site screenshot and the statement about towek.ai are business-reported context. The screenshot says a three-day-old travel website generated three leads in three days. It does not establish attribution, repeatability, or NXTSTAR performance. Do not turn it into a verified product case study without the underlying analytics and permission. Phone numbers, verification tokens and unrelated chat details are not reproduced from the screenshot.

## What the customer wanted for NXTSTAR

The initial request mentioned Najd Rent a Car, but the owner corrected the business to NXTSTAR. Two factual articles were requested: one explaining what NXTSTAR learned with expert insights from Lopty Pascal, and another explaining Prezlo. The owner then clarified that the first article should lead with NXTSTAR and its customers, not be a biography or a marketing landing page about Lopty Pascal.

The intended story was that a useful service and strong customer relationships do not automatically make a business visible when buyers ask AI tools. The owner described Lopty Pascal identifying that gap and NXTSTAR beginning to use Prezlo, built by Lopty Pascal and Neha Jakhar. These relationship statements were supplied by the business. The article should explain the customer problem and learning before the final background section about Lopty Pascal. Always use the full name Lopty Pascal. The owner also requested removal of the visible editorial disclaimer shown in the earlier screenshot.

The later objective became commercially specific: NXTSTAR was reportedly no longer appearing in ChatGPT for the exact prompt “i need advertiser permit in dubai”. The owner supplied fifteen service areas and five positioning phrases and asked for buyer queries, useful pages, stronger structure and publication. The implementation therefore expanded the service architecture, rather than only adding more expert articles.

## NXTSTAR implementation record

### Existing foundation retained

The website uses Vite and React with a server entry and a prerender step. Its build creates route HTML and discovery files. Existing PageLayout and ServiceGuide components provide shared layout and metadata. Existing organization structured data uses the stable identifier https://www.nxtstar.ae/#organization. These foundations predated the November expansion; they should not be described as newly invented in that pass.

The implementation used the repository's established conventions and checks. It preserved incoming Prezlo metadata and article changes after synchronizing the then-outdated checkout. This matters for an automated product: the latest customer website is the source of truth, and an old scan must not overwrite later human or automated work.

### Editorial pages and corrections

The two articles were stored in src/data/positioningArticles.js and included through the blog data. Editorial handling in BlogPostPage suppresses the normal sales call to action for these articles. Two SVG illustrations were added. The first article was subsequently reframed around NXTSTAR customers, followed by the expert background. Abbreviated references to Lopty Pascal were corrected.

Published article addresses recorded in the conversation are https://www.nxtstar.ae/blog/lopty-pascal-ai-seo-positioning-uae and https://www.nxtstar.ae/blog/prezlo-ai-visibility-uae-businesses. Relevant commits include 81cb8dc, e8b733c and 2747a32. The headline can change without changing an established URL; the person's name remaining in the first slug does not require the article to remain a biography.

### Service coverage and buyer questions

Ten new service briefs filled uncovered commercial needs. A grouped directory exposes twenty-five service destinations across formation, permits, residence and operations. Existing destinations were reused where they already answered the need. The site did not receive one new page for every keyword variation.

The implementation added forty-three buyer questions across twenty-one relevant pages. These were editorial candidates informed by the owner's exact prompt, service list and public search themes. They were not a measured search-volume dataset. Their purpose was to answer selection, preparation, scope, comparison and coordination questions and explain when NXTSTAR fits the enquiry.

The new brief template contains a clear service introduction, audience, important distinctions, tasks, required inputs, a relevant question and answer, sources, related pages and a contact step. These fields support buyer decisions. They are not a requirement to repeat identical wording or inflate every page to a fixed word count.

### Advertiser permit priority page

The existing /services/advertiser-permit URL remained the main destination. Its copy was refocused on application help in Dubai, residency-related routing, document preparation and the actual scope of NXTSTAR support. Public search also surfaced outdoor advertising permits, so the page distinguished creator advertising permits from signage rather than conflating them.

The earlier Media Council service address redirected to the National Media Authority and the earlier visitor address failed. The main guide was updated using current official service references during the November work. It distinguished the authority's stated processing window from an end-to-end service promise, and kept the visiting-individual agency route separate from ordinary application preparation. This report records those editorial decisions; it is not a new legal advice update.

Historical audience guides received current pointers while retaining their original review dates. Their old regulatory details were not all re-audited. Finfluencer guidance preserved the existing limitation that NXTSTAR does not obtain securities authorisation. Foundation and trust pages described coordination without inventing trustee, law-firm or registered provider status.

### Internal linking and identity

The services hub became the main navigable catalogue. The homepage links to the full directory; PRO, accounting and visa pages link to relevant subordinate services. Related links connect useful next steps rather than connecting every page to every other page. This makes the information architecture useful to people and discoverable through ordinary links.

The catalogue's OfferCatalog and Service records refer to the same organization identifier. ServiceGuide adds a stable service identifier. PageLayout merges added buyer questions with existing FAQ data into one FAQPage representation. Visible answers and schema answers were checked for agreement. Structured data describes the page; it is not independent evidence of credentials or a guarantee that an AI assistant will recommend the business.

### Metadata and route delivery

A case-sensitive brand check appended NXTSTAR to titles already containing Nxtstar. Case-insensitive detection fixed that duplication. Relevant metadata overrides were updated as well as page copy, so the effective title and description reflected the work. This is an important lesson for automation: editing a component alone may not change the final head when another metadata layer takes precedence.

New brief routes were registered in the server entry so the normal build could prerender and include them in discovery. The llms template was expanded with the directory. No claim was made that llms.txt causes recommendation or that broad bot allowances were newly installed during this work.

### Verification and publication

The November 18 check ran lint, TypeScript, production build and the site audit. The recorded output was 106 generated pages and 102 indexable pages. Additional assertions checked forty-three visible buyer questions and their merged FAQ data, ten new routes linked from the hub, twenty-five catalogue entries, provider identity and title handling. Browser review covered the directory, the RERA template and the advertiser-permit page. The directory's oversized introduction was corrected during review.

Commit cee44be4fcf3f5508e688eb0eccd9f78799bb545 contains the buyer-focused expansion, with twenty-three changed files. It was pushed to main and the website deployment succeeded. All ten new service URLs, the directory and the priority page were checked for successful public responses and expected content during that work.

There was no documented mobile viewport audit, Core Web Vitals measurement, Search Console review or measured ChatGPT recovery. A separate API-form deployment failed and had also failed on the preceding revision. That issue was not fixed in this pass, and the failure alone did not prove the existing production form was broken. An implementation manager must track website delivery and conversion-path health separately.

## Page inventory and source map

The ten new pages below were verified live during the November implementation. Their status has not been rechecked as part of this document-only task.

- Corporate structuring: https://www.nxtstar.ae/services/corporate-structuring
- Corporate tax registration: https://www.nxtstar.ae/services/corporate-tax-registration
- Tourist visa: https://www.nxtstar.ae/services/tourist-visa
- RERA registration: https://www.nxtstar.ae/services/rera-registration
- Labour file opening: https://www.nxtstar.ae/services/labour-file-opening
- Establishment card: https://www.nxtstar.ae/services/establishment-card
- ADGM setup: https://www.nxtstar.ae/services/adgm-setup
- Foundation setup: https://www.nxtstar.ae/services/foundation-setup
- Trust setup: https://www.nxtstar.ae/services/trust-setup
- Virtual office: https://www.nxtstar.ae/services/virtual-office

In the NXTSTAR repository, src/data/serviceBriefs.js stores the ten briefs; src/pages/services/ServiceBrief.jsx renders them. src/data/serviceCatalogue.js, src/components/layout/ServiceDirectory.jsx and src/seo/serviceCatalogueSchema.js define the directory and its machine representation. src/data/buyerQuestions.js supplies the question bank. PageLayout.jsx coordinates page-level output. src/data/serviceGuides.js contains the main advertiser guide; advertiserAudienceGuides.js contains the audience variants.

docs/search-visibility/2026-11-17-audit.md records scope, sources and validation. docs/search-visibility/query-baseline.csv contains twenty-three seed queries plus forty-three buyer-question candidates. Blank measurement columns are intentional: candidate research and completed AI visibility observations are different records.

## The reusable technique

### Start with a business and website inventory

Record confirmed services, customer types, service jurisdictions, actual offices, operating constraints, brand language, available proof and the conversion action. Inventory existing URLs, their page roles, canonical destinations, indexability, internal links and source templates. Record which pages were observed and which were not. Ask only for missing facts that change decisions; reuse approved information already available.

Separate a business's office location from where a customer lives and where the service is legally or operationally delivered. A Dubai-based customer seeking a service in another jurisdiction does not prove that the supplier has a Dubai office. Locations are business constraints, not just words to insert into titles.

### Research and assign buyer intent before drafting

Collect candidate queries from actual customer questions, saved AI responses, search performance where connected, site search, public search themes and modelled suggestions. Preserve the source and observation date. Do not attach invented volume or difficulty to modelled ideas. Cluster by the decision the buyer is making, not just by shared terms.

Assign each cluster a preferred destination and a reason. For example, “advertiser permit help in Dubai” belongs to the existing permit service; questions about eligibility or documents can be sections on that page. A distinct visitor route may merit an existing audience page with its own useful detail. Corporate tax registration has a separate service purpose and therefore received a new brief. A query does not automatically deserve a URL.

Use explicit actions: retain, improve, create, consolidate, redirect, exclude or defer. Consolidation needs content and traffic review, not a similarity score alone. A canonical is not a substitute for making the right architecture decision. Related pages can overlap naturally; the aim is clear ownership of the primary buyer task, not zero shared vocabulary.

### Build page briefs and a link plan together

A brief should state the buyer need, audience, geography, existing or proposed URL, unique contribution, approved service claims, evidence, necessary source research, sections, related destinations and desired next action. Keep exclusions visible to the writer: no invented approvals, customer results, offices, testimonials or competitive superiority.

Plan inbound links as well as outgoing links. Every important new service should have an appropriate parent or hub and useful contextual routes from existing pages. A service page can link to a prerequisite, an associated service or a supporting article. A supporting article should help the reader reach the relevant service without pretending to be an independent endorsement.

Create an industry or city page only when it answers a materially different need with real service coverage and enough specific information. Where only the place name changes, keep a strong regional service page and explain coverage there. Evaluate proposed combinations before generation, rather than producing the full service by industry by city Cartesian product.

### Generate from evidence and implement through the actual stack

Distinguish business-attested facts, website-observed statements, independently supported claims and editorial interpretation. A government page supports the procedure it describes, not the provider's credentials. A screenshot of a lead report is an input to verification, not proof of causation. Preserve private-source permissions when turning attachments into public claims.

Use shared content models and templates where they fit the repository. Preserve the customer design, contact information and unrelated changes. Generate visible HTML, metadata and appropriate schema from consistent data. Inspect output rather than assuming a successful build proves that a route has the intended text and canonical.

### Verify delivery and measure outcomes separately

Before publication, check route ownership, unique purpose, approved claims, real links, metadata precedence, schema parity, renderability and project checks. After publication, verify the expected version at the actual public URL, including links and important metadata. Retain a rollback path. A pull request, merge, deployment and successful public verification are different states.

For AI visibility, save exact prompts, full answers, model or interface, date, language, location context and search mode. Separate mention, relevant recommendation, accurate service description and citation. Use independent unbranded prompts; do not seed the company name into the test and call the result discovery. The proposed NXTSTAR protocol starts with three independent responses per priority query and reports the small sample honestly. Track enquiries and qualified leads separately, without claiming a causal lift from a single before-and-after comparison.

## What Prezlo already implements

### Buyer research and positioning

server/buyer-keywords.ts requests modelled buyer phrases with hire, cost, compare and specific-need intent, explicitly labels them modelled, deduplicates them and restricts suggestions to approved services. Its geography rule separates business base, service destination and customer residence. Preserve that distinction.

shared/site-positioning.ts defines PositioningInput, PositioningPlan, gap records, page briefs and link ideas. buildPositioningPlan checks service and location coverage, trust gaps, orphan pages and other signals. It uses approved facts and observed visibility inputs. server/site-positioning-server.ts assembles the inputs and limits visibility observations to current targets. This is already a website positioning planner, not just a keyword generator.

### Evidence and article intelligence

server/content-intelligence.ts plans an article angle, chooses evidence excerpts, researches primary sources and reviews claims. It distinguishes subject evidence from proof about the business and treats source content as untrusted input. docs/content-intelligence.md describes the website-blog integration and publication guard, with mocked-test limitations. The project also includes trust-evidence, claim-evidence, evidence-reading and evidence-finder modules and user-facing evidence components.

These should be the basis of the implementation manager's claim provenance. Do not recreate an unrelated evidence database simply to support a new page planner. Verify the shared record contracts and make each generated page retain its specific claim and source dependencies.

### Drafting and internal linking

server/site-agent/agent.ts reads a saved plan, approved facts and live pages; it can prepare pages and link drafts, ask a fact question and finish. Publication is deliberately outside that model tool loop. server/site-agent/toolbox.ts supplies the real context and charges. draft-gates.ts reports claim, brand, structure and link findings; it exposes brand rules the automatic checker cannot enforce.

draft-links.ts inserts approved links where the anchor already occurs and validates against known destinations, including URLs planned in the same task. This is useful editing machinery. A complete site-wide link graph and a dependency-aware sequence of publication are a larger responsibility than insertion into one page.

### Technical operations and repository execution

server/seo-site-plan.ts groups technical work and distinguishes configured connections from tested permission. It prioritizes representative commercial pages and derives verification criteria from observations. The technical operations handoff describes canonical repair, checkpointing, uncertain-write recovery, raw-versus-rendered comparisons and WordPress machine delivery, with explicit integration limitations.

server/coding-workspace/orchestrator.ts checks repository and sandbox capabilities, runs a coding task, records diffs and checks, and prepares review. Approval opens a PR or MR. A failed-check result can remain reviewable with an explicit warning; this is not the same as a safe-to-deploy result. The source includes before-and-after preview support and limits the coding loop to thirty steps.

server/coding-workspace/site-draft-input.ts freezes a selected draft for a repository task, checks ownership and target host and rejects unresolved error findings. This provides a bridge between drafting and implementation. Extend this bridge to a versioned multi-page programme rather than describing it as absent.

## Concrete gaps and priorities for Prezlo

### Priority one is a persistent programme above existing tasks

The inspected paths have useful plans and individual tasks, but no shared programme contract was established in this review that binds the complete query map, page graph, evidence versions, code changes, deployment and outcomes. Add that contract above the existing engines. It should keep one objective and track dependencies across multiple bounded tasks. A user should not have to restate the same goal in keyword research, website drafting and the coding workspace.

The user-facing experience can feel like one pass while the implementation remains a series of durable, testable stages. Do not implement a single giant prompt that loses state when it reaches a model step limit.

### Priority one is intent ownership and richer page actions

PlanItem.action in shared/site-positioning.ts currently permits create or strengthen. The planner has cleanup guidance, but the typed executable plan does not express retain, consolidate, redirect and defer as first-class actions. Add explicit source and destination URLs, preserved sections, redirect dependencies and review requirements. Create a persistent intent cluster to preferred URL assignment that future runs consult before proposing pages.

Use semantic matching to propose ownership, with deterministic URL and business checks. Preserve ambiguity for review. Test synonymous services, generic hubs, near-identical location pages and distinct regulatory routes. Do not assume matching words in a title proves that a page fully answers the intent.

### Priority one is consistent completeness across planning and execution

buildPositioningPlan initially slices declared services and places to eight each. Some subsequent work uses smaller subsets. toolbox.getPlan exposes only the first eight plan items and truncates each brief to its first eight lines. These are concrete context limits that can omit parts of a fifteen-service business or drop evidence and link detail. The site agent also defaults to fourteen steps, with ten pages and ten link batches per task.

Keep bounded tasks, but make coverage explicit. Persist the entire plan, paginate structured retrieval by item ID and show completed, pending, deferred and blocked segments. Choose the next task by priority and dependency, not array order. Raising every limit would increase cost without fixing omission or coordination.

### Priority two is policy consistency across writers

content-intelligence.ts treats FAQs as optional according to reader need. site-agent/draft-gates.ts defaults minFaqs to three when no explicit value is passed. The positioning planner also treats the absence of question headings as a gap and uses a 300-word thin-page threshold. These are heuristics, not proof of poor usefulness. The default FAQ rule should be reconciled through a common page policy, while checking caller overrides before changing behavior.

Make section requirements depend on page purpose and the approved brief. A concise factual service answer may not need a generic FAQ block. A long page may still fail to answer a buyer question. Keep deterministic checks for missing essential fields; evaluate usefulness separately from length.

### Priority two is a complete context package for every executor

The article pipeline has primary-source research and claim review, but its documentation states that other writers do not automatically inherit that full website-specific pipeline. Route site drafts and repository tasks through equivalent evidence contracts, rather than assuming a free-text factsBlock carries every source limitation, private-use rule and freshness dependency.

Each execution item should receive structured facts, source excerpts, public-use permissions, target query, exclusions, current page snapshot, exact links and policy version. Preserve customer edits when regeneration occurs. A source withdrawal or changed regulation should invalidate only dependent claims and pages.

### Priority two is publication and conversion verification

The coding orchestrator's delivered state refers to opening a review request, not proof that production changed. Extend status tracking through merged, deployed, publicly verified and rolled back. Reconcile uncertain external outcomes before retrying. Retain failed checks visibly and block unattended deployment unless the configured policy permits an explicit exception.

Verify representative templates and every changed commercial URL, including newly created links. Test the contact or enquiry path in a permitted test mode. NXTSTAR's separate form-service deployment failure shows why a website-only success indicator is incomplete for a lead-generation objective.

### Priority two is truthful product copy

The inspected server/geo-posts.ts includes broad statements that businesses frequently appear in assistant answers within weeks and contrasts AI retrieval timelines with slower classic SEO. These statements need evidence and scope or should be revised. Product marketing should follow the same claim rules as customer content. This is a source-content finding; whether every passage is currently publicly served was not checked.

### Priority three is operational scale and evaluation

Use tenant-scoped caches, content hashes, source freshness classes and bounded research per intent cluster. Persist budgets before work starts. Cache reuse must respect source expiry and tenant privacy. Record idempotency keys and expected revisions for publication. Scale the queue and coverage accounting, not the number of unreviewed city pages.

Build an evaluation set from real customer projects: NXTSTAR and other projects the owner supplies with permission. Include decisions to avoid creating pages, not only successful drafts. Score intent mapping, supported claims, preserved content, correct links, live delivery and operator time. Measure real generation cost and qualified outcomes before promising automation savings.

## Proposed implementation manager specification

### Customer interaction

Ask the owner for the commercial objective, priority services, customer types, target jurisdictions, budget and desired publication control. Pre-fill everything already approved. A suitable NXTSTAR instruction is: help buyers find advertiser-permit application support in Dubai and improve coverage of our confirmed consultancy services. The manager then presents the proposed changes and any missing business facts in ordinary language.

The review should say which existing pages will improve, which genuinely new pages are needed, where they will be linked and what evidence is still missing. Show a preview and the actual change set. Ask for a specialist input only when a real factual or capability gap blocks progress. Ordinary choices about headings, data wiring and route registration should not be pushed back to the owner.

### Durable records

- WebsiteProgramme: tenant, site, objective, approved services, audiences, geography, budget, publication policy and current revision.
- SiteSnapshot: observed URLs, content hashes, status, canonical, robots state, links, templates, source mappings and observation coverage.
- IntentCluster: query variants, intent, provenance, geography, service scope, preferred URL, confidence and ownership rationale.
- PageDecision: retain, improve, create, consolidate, redirect, exclude or defer; before version, target URL, unique contribution, evidence and dependencies.
- ClaimDependency: claim text, entity, evidence IDs, support scope, approval, public-use permission, validity and dependent page versions.
- ChangeSet: page content, links, schema, metadata, routes, redirects, files or CMS operations, expected revisions and rollback information.
- ExecutionRun: stage, task IDs, attempts, leases, cost, checks, exceptions, public verification and outcome observations.

These names are proposed contracts, not existing Prezlo table names. Map them onto current stores and migrations before adding tables. Keep references to existing evidence, draft and task IDs rather than copying conflicting versions of the same record.

### Stages and dependency rules

Use discover, diagnose, research, plan, prepare, validate, review, deliver, verify and observe stages. A blocked source requirement should pause only dependent page work. A link to a new page should publish after that page exists, or in the same atomic repository deployment. A redirect should follow successful destination creation and reference updates. A failed build must not leave a programme marked complete.

For repository sites, prepare one coherent branch or a deliberate sequence of dependent PRs using the current source snapshot. For CMS sites, apply ordered operations with before-state checks and compensation where transactions are unavailable. Detect concurrent edits and rebase or re-review instead of overwriting them. Record submitted-but-unconfirmed operations and reconcile before retrying.

### Location and industry expansion

Begin with confirmed service capability, then test whether a location or industry changes the buyer's decision. Relevant differences include process, eligibility, service delivery, available team, jurisdiction, documented projects or industry-specific constraints. An audience's location is not proof of a local office. A location page needs an honest delivery model and useful detail, not just a city name in repeated copy.

Choose between one regional page, a focused section, a separate location page or deferral. Store why a candidate was rejected. Reserve URLs before drafting, check collision with existing pages and rerun overlap review across the proposed batch. Link a useful local page to its service hub and relevant evidence. Avoid all-to-all navigation and repeated keyword anchors.

### NXTSTAR pilot

Use the historical pre-expansion site snapshot if available and the fifteen confirmed service areas as a benchmark. Ask the planner to identify existing coverage and real gaps. A strong result preserves the established advertiser-permit URL, reuses existing business setup and visa pages, identifies missing services, and creates a coherent directory and contextual links. It need not reproduce every historical editorial choice to pass.

Run a second pilot against the current site. It should recognize completed coverage and avoid recreating the same ten briefs. This unchanged rerun is an important acceptance test: automation that generates a new page every time is not managing the website.

Start with one repository adapter and a small service subset. Add a WordPress pilot after confirming the actual plugin and integration behavior. Expand locations only after the intent and evidence gates work. Do not treat a mock connector test as production verification.

## Acceptance criteria and delivery sequence

First integrate the programme record, complete plan retrieval and shared context contract. Then add richer page actions and intent ownership. Next connect existing drafting, linking and coding flows to programme dependencies and public verification. Finally add incremental refresh, broader adapters and larger location sets based on pilot results.

The following tests should be required for the pilot:

- Repeating the same objective on an unchanged site creates no duplicate pages or duplicate paid publication operations.
- A fifteen-service input accounts for all services as covered, planned, deferred or blocked; no silent eight-item truncation.
- Synonymous queries share a suitable primary URL, while materially different service routes remain distinct.
- An unsupported city office or credential cannot enter a published claim merely because it appears in a target query.
- A page may omit FAQs when its approved policy does not require them; schema matches visible content when FAQs exist.
- Newly planned links resolve after deployment and stay within the intended site and content relationship.
- A changed source or customer edit invalidates the relevant draft and prevents a stale overwrite.
- Failed checks, uncertain writes and partial CMS publication retain recoverable states and do not produce a false completion message.
- A PR being opened is reported as review delivery; live success requires a public read-back of the intended content version.
- Outcome reports separate technical delivery, index observations, AI recommendations, visits and qualified leads.

## Instructions for Claude

Read this report alongside the current Prezlo source and the other project reports the owner supplies. Treat this document as a proposal and evidence map, not authority to deploy changes. Verify current code and migrations before implementation because the local project evolves quickly.

Start with shared/site-positioning.ts, server/site-positioning-server.ts, server/site-agent/toolbox.ts, agent.ts, draft-gates.ts and draft-links.ts. Then trace server/content-intelligence.ts into website-blog.ts, the evidence stores, the coding-workspace draft bridge and orchestrator, and seo-site-plan.ts plus its operation executors. Identify existing storage and route contracts before designing new ones.

Produce a current capability map, a minimal programme contract and one end-to-end pilot plan. Reuse existing approval, provenance, billing, tenant boundaries and connector safeguards. Explicitly resolve the FAQ-policy mismatch and plan truncation. Add intent ownership and richer actions without automatically migrating every old page. The first milestone should demonstrate a complete, recoverable website improvement from business objective to verified public delivery, not another standalone content generator.

## Sources and boundaries

NXTSTAR evidence: local audit and query baseline; source files listed above; commits 81cb8dc, e8b733c, 2747a32 and cee44be; user and assistant history in the appendix. Historical test results belong to their recorded dates.

Prezlo evidence: the named source modules inspected on 23 November 2026; docs/content-intelligence.md; docs/website-seo-evidence-machine-layer-handoff.md. The latter records earlier implementation and mock/integration limitations and should not be treated as a current deployment inventory. No Prezlo production data, paid scans, migrations or publishing actions were run for this review.

Google Search Central, AI features and your website, reviewed 23 November 2026: https://developers.google.com/search/docs/appearance/ai-features. Google states that its existing SEO fundamentals apply to AI Overviews and AI Mode, with no special machine file or schema requirement. This is Google guidance, not a specification of ChatGPT selection behavior.

Google Search Central, Spam policies, reviewed 23 November 2026: https://developers.google.com/search/docs/essentials/spam-policies. Its doorway and scaled-content policies support evaluating usefulness before mass location expansion. The proposed programme should improve actual customer information rather than generate near-identical pages to manipulate discovery.

Official regulatory links used in the historical NXTSTAR work are retained in docs/search-visibility/2026-11-17-audit.md. Recheck the responsible authority before updating current regulatory content. The report does not establish recommendation recovery, search ranking improvements or attributable lead generation.
