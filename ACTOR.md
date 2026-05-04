# Global AI B2B Lead Enrichment

Find, crawl, enrich, score, and prepare outreach for B2B sales leads.

This Actor is built for agencies, consultants, lead brokers, SEO teams, web design businesses, and SaaS outbound teams that need more than raw scraped URLs. It extracts public company website signals, detects sales gaps, recommends an offer, gives every lead a score, and writes outreach copy.

## What it does

1. Accepts company websites, manual lead records, or search queries.
2. Optionally discovers company websites using SerpApi, Google Custom Search, or Bing Web Search.
3. Crawls each company website with Crawlee CheerioCrawler.
4. Extracts public B2B signals: business name, website, emails, phones, social links, contact forms, booking signals, WhatsApp signals, ecommerce signals, schema, and visible technologies.
5. Detects problems and gaps.
6. Recommends a saleable offer.
7. Scores the lead.
8. Outputs a ready-to-use outreach message.

## Example input

```json
{
  "startUrls": [{ "url": "https://www.example.com" }],
  "manualLeads": [{
    "businessName": "Acme Dental Clinic",
    "website": "https://www.example.com",
    "category": "dentist",
    "city": "Austin",
    "country": "United States"
  }],
  "maxPagesPerWebsite": 3,
  "maxResults": 100
}
```

## Discovery mode

```json
{
  "discoveryProvider": "serpapi",
  "serpApiKey": "YOUR_KEY",
  "searchQueries": ["dentists in Austin Texas contact", "roofing companies in Toronto website"],
  "maxSearchResultsPerQuery": 20,
  "maxResults": 100
}
```

Supported discovery providers: `serpapi`, `googleCustomSearch`, `bing`, and `none`.

## Output fields

Each dataset item includes `businessName`, `website`, `category`, `emails`, `phones`, `socialLinks`, `technologies`, `digitalSignals`, `problemFound`, `allProblems`, `leadScore`, `priority`, `recommendedOffer`, `salesAngle`, `outreachMessage`, `sourceUrl`, and `sourceUrls`.

## Privacy and compliance notes

This Actor is designed for public business website data. By default, it filters likely personal email addresses and prioritizes generic business addresses such as `info@`, `hello@`, `sales@`, and `contact@`.

Users are responsible for complying with applicable laws, website terms, search API terms, and outreach rules such as CAN-SPAM, GDPR, ePrivacy, PECR, and local anti-spam laws.

## Monetization suggestion

If publishing to Apify Store, consider charging per result or per event: basic lead, enriched lead, and outreach message generated. Before enabling pay-per-event in code, configure pricing events in Apify Console and test on a private Actor first.

## Local development

```bash
npm install
npm start
npm run check
```

## Apify deployment

```bash
apify login
apify push
```
