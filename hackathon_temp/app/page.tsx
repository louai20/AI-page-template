Louai
louai2000
Idle





Group DM


nima20, thomasjohan, Jakub Maruszczak (Kolomolo), ezcoolaks, Ivan Truedson
Edit Group
Search nima20, thomasjohan, Jakub Maruszczak (Kolomolo), ezcoolaks, Ivan Truedson

chat


Edit Group Icon
nima20, thomasjohan, Jakub Maruszczak (Kolomolo), ezcoolaks, Ivan Truedson
Welcome to the beginning of the nima20, thomasjohan, Jakub Maruszczak (Kolomolo), ezcoolaks, Ivan Truedson group.

Invite Friends

Edit Group
February 16, 2026
Ivan Truedson
 added 
nima20
 to the group. — Yesterday at 5:04 PMMonday, February 16, 2026 5:04 PM
Ivan Truedson
 started a call that lasted an hour. — Yesterday at 5:04 PMMonday, February 16, 2026 5:04 PM
Ivan Truedson
 added 
ezcoolaks
 to the group. — Yesterday at 5:35 PMMonday, February 16, 2026 5:35 PM
Ivan Truedson
 added 
thomasjohan
 to the group. — Yesterday at 5:36 PMMonday, February 16, 2026 5:36 PM

Ivan Truedson — Yesterday at 5:39 PMMonday, February 16, 2026 5:39 PM
@thomasjohan

thomasjohan — Yesterday at 5:39 PMMonday, February 16, 2026 5:39 PM
Är i mötet

Ivan Truedson — Yesterday at 5:39 PMMonday, February 16, 2026 5:39 PM
ah cool

Louai

Java
 — Yesterday at 5:58 PMMonday, February 16, 2026 5:58 PM

tele2-brand-toolkit(1).zip
2.95 MB
Download
Ivan Truedson
 added 
Jakub Maruszczak (Kolomolo)
 to the group. — Yesterday at 7:12 PMMonday, February 16, 2026 7:12 PM
February 17, 2026

thomasjohan — 9:51 AMTuesday, February 17, 2026 9:51 AM
Prompt for a product listing page for phones. Phone images are in the brand guidelines toolkit.
# Prompt: Build a Tele2-Branded Mobile Phone Listing Page

## Goal

We are testing how well an AI can generate a branded, production-quality web page when given strong design guidelines, real assets, and creative freedom. This is not about copying an existing page — it's about **interpreting** the Tele2 brand and producing your own take on a mobile phone listing page.

Expand (129 lines)
cursor-prompt-phone-listing.md
cursor-prompt-phone-listing.md (8 KB)
8 KB
Change language
View whole file
More

thomasjohan — 10:08 AMTuesday, February 17, 2026 10:08 AM
design-tokens-usage.md updated
# Tele2 SE Design Tokens — Usage in Design

This document describes how the design tokens in `Tele2 SE/Light.tokens.json` are used across the Tele2 SE design system (light mode).

---

Expand (301 lines)
design-tokens-usage.md
design-tokens-usage.md (9 KB)
9 KB
Change language
View whole file
More

thomasjohan — 10:24 AMTuesday, February 17, 2026 10:24 AM
{
  "typography": {
    "fontFamily": {
      "brand": {
        "$type": "string",
        "$value": "tele2",... (76 KB left)

Expand (More than 1,632 lines)
Light.tokens.json
Light.tokens.json (126 KB)
126 KB
Change language
View whole file
More
:thumbsup:
Click to react
:ok_hand:
Click to react
:joy:
Click to react
Add Reaction
Reply
Forward
More

ezcoolaks

RELC
 — 1:43 PMTuesday, February 17, 2026 1:43 PM
export default function Page() {
  return (
    <main className="min-h-screen bg-base-surface-primary">
      {/* Hero Section */}
      <Hero
        Device="Desktop"

Expand (193 lines)
page.tsx
page.tsx (8 KB)
8 KB
Change language
View whole file
More

1
Add Reaction
:thumbsup:
Click to react
:ok_hand:
Click to react
:joy:
Click to react
Add Reaction
Reply
Forward
More

Louai

Java
 — 1:48 PMTuesday, February 17, 2026 1:48 PM
https://n8n.srv1061736.hstgr.cloud/webhook/06dde8a3-386d-4362-b9f5-17894ba2694d

Message nima20, thomasjohan, Jakub Maruszczak (Kolomolo), ezcoolaks, Ivan Truedson
﻿
Send GIF
Members—6

ezcoolaks

RELC

Jakub Maruszczak (Kolomolo)


Louai

Java

nima20

Ivan Truedson
Group Owner

thomasjohan
export default function Page() {
  return (
    <main className="min-h-screen bg-base-surface-primary">
      {/* Hero Section */}
      <Hero
        Device="Desktop"
        Variant="Image" 
        Width="Standard"
        Badge={true}
        Heading={true}
        Body={true}
        CTAs={true}
        Price={false}
        USPs={false}
        Countdown={false}
      />

      {/* Subscription Card */}
      <div className="max-w-[952px] mx-auto my-16">
        <SubscriptionCard
          Device="Desktop"
          Highlight="Yes"
          Price_config="Regular"
          Heading={true}
          Badge={true}
          Binding_status={true}
          Feature_list={true}
          Logotypes={true}
          Image={false}
        />
      </div>

      {/* FAQ Section */}
      <div className="max-w-[952px] mx-auto mb-16">
        <FAQBlock_Default
          Heading={true}
          Body={true}
          Button={true}
          Chips={false}
        />
      </div>
    </main>
  )
}

// Component Implementations

function Hero({ Device, Variant, Width, Badge, Heading, Body, CTAs, Price, USPs, Countdown }) {
  return (
    <section className="relative bg-base-surface-primary py-16">
      <div className={`mx-auto ${Width === "Standard" ? "max-w-[1440px]" : "max-w-[952px]"} px-4`}>
        <div className="flex items-center gap-12">
          <div className="flex-1">
            {Badge && (
              <span className="inline-block mb-4 px-3 py-1 bg-accent-surface-brand text-accent-onSurface-brand rounded-full text-sm font-secondary">
                New Launch
              </span>
            )}
            
            {Heading && (
              <h1 className="font-primary text-5xl mb-6 text-base-onSurface-primary">
                Experience Lightning-Fast 5G
              </h1>
            )}
            
            {Body && (
              <p className="font-secondary text-xl mb-8 text-base-onSurface-secondary">
                Connect to the future with our newest 5G network. Enjoy speeds up to 20x faster than 4G.
              </p>
            )}
            
            {CTAs && (
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-accent-surface-brand text-accent-onSurface-brand rounded-lg font-secondary">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-interface-border text-base-onSurface-primary rounded-lg font-secondary">
                  Learn More
                </button>
              </div>
            )}
          </div>
          
          {Variant === "Image" && (
            <div className="flex-1">
              <img 
                src="/5g-network.jpg"
                alt="5G Network Visualization"
                className="rounded-xl w-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function SubscriptionCard({ Device, Highlight, Price_config, Heading, Badge, Binding_status, Feature_list, Logotypes, Image }) {
  return (
    <div className={`rounded-xl p-8 ${Highlight === "Yes" ? "bg-accent-surface-brand" : "bg-base-surface-secondary"}`}>
      {Badge && (
        <span className="inline-block mb-4 px-3 py-1 bg-accent-surface-primary text-accent-onSurface-primary rounded-full text-sm font-secondary">
          Most Popular
        </span>
      )}
      
      {Heading && (
        <h2 className="font-primary text-3xl mb-4 text-base-onSurface-primary">
          Unlimited 5G
        </h2>
      )}
      
      <div className="mb-6">
        <span className="text-4xl font-primary text-base-onSurface-primary">499kr</span>
        <span className="text-base-onSurface-secondary">/month</span>
      </div>
      
      {Binding_status && (
        <p className="text-sm text-base-onSurface-secondary mb-6">
          24 month binding period
        </p>
      )}
      
      {Feature_list && (
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-accent-onSurface-brand" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="font-secondary text-base-onSurface-primary">Unlimited Data</span>
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-accent-onSurface-brand" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="font-secondary text-base-onSurface-primary">5G Network Access</span>
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-accent-onSurface-brand" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="font-secondary text-base-onSurface-primary">Unlimited Calls & SMS</span>
          </li>
        </ul>
      )}
      
      <button className="w-full py-4 bg-accent-surface-primary text-accent-onSurface-primary rounded-lg font-secondary">
        Choose Plan
      </button>
    </div>
  )
}

function FAQBlock_Default({ Heading, Body, Button, Chips }) {
  return (
    <section className="bg-base-surface-primary p-8 rounded-xl">
      {Heading && (
        <h2 className="font-primary text-3xl mb-8 text-base-onSurface-primary">
          Frequently Asked Questions
        </h2>
      )}
      
      {Body && (
        <div className="space-y-6">
          <div className="border-b border-interface-border pb-6">
            <h3 className="font-primary text-xl mb-2 text-base-onSurface-primary">
              What is 5G technology?
            </h3>
            <p className="font-secondary text-base-onSurface-secondary">
              5G is the fifth generation of mobile networks, offering faster speeds and more reliable connections on smartphones and other devices.
            </p>
          </div>
          
          <div className="border-b border-interface-border pb-6">
            <h3 className="font-primary text-xl mb-2 text-base-onSurface-primary">
              Where is 5G available?
            </h3>
            <p className="font-secondary text-base-onSurface-secondary">
              Our 5G network is currently available in major cities and expanding rapidly. Check our coverage map for details.
            </p>
          </div>
        </div>
      )}
      
      {Button && (
        <button className="mt-8 px-6 py-3 border border-interface-border text-base-onSurface-primary rounded-lg font-secondary">
          View All FAQs
        </button>
      )}
    </section>
  )
}