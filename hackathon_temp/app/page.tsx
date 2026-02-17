export default function Page() {
  return (
    <main className="min-h-screen bg-base-surface-primary">
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

function Hero({ Device, Variant, Width, Badge, Heading, Body, CTAs, Price, USPs, Countdown }) {
  return (
    <section className="relative bg-base-surface-primary py-16" aria-labelledby="hero-heading">
      <div className={`mx-auto ${Width === "Standard" ? "max-w-[1440px]" : "max-w-[952px]"} px-4`}>
        <div className="flex items-center gap-12">
          <div className="flex-1">
            {Badge && (
              <span className="inline-block mb-4 px-3 py-1 bg-accent-surface-brand text-accent-onSurface-brand rounded-full text-sm font-secondary">
                New Launch
              </span>
            )}
            
            {Heading && (
              <h1 id="hero-heading" className="font-primary text-5xl mb-6 text-base-onSurface-primary">
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
                <button type="button" className="px-6 py-3 bg-accent-surface-brand text-accent-onSurface-brand rounded-lg font-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Get Started
                </button>
                <button type="button" className="px-6 py-3 border border-interface-border text-base-onSurface-primary rounded-lg font-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
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
    <article className={`rounded-xl p-8 ${Highlight === "Yes" ? "bg-accent-surface-brand" : "bg-base-surface-secondary"}`} aria-labelledby="subscription-heading">
      {Badge && (
        <span className="inline-block mb-4 px-3 py-1 bg-accent-surface-primary text-accent-onSurface-primary rounded-full text-sm font-secondary">
          Most Popular
        </span>
      )}
      
      {Heading && (
        <h2 id="subscription-heading" className="font-primary text-3xl mb-4 text-base-onSurface-primary">
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
            <svg className="w-5 h-5 text-accent-onSurface-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="font-secondary text-base-onSurface-primary">Unlimited Data</span>
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-accent-onSurface-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="font-secondary text-base-onSurface-primary">5G Network Access</span>
          </li>
          <li className="flex items-center gap-3">
            <svg className="w-5 h-5 text-accent-onSurface-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="font-secondary text-base-onSurface-primary">Unlimited Calls & SMS</span>
          </li>
        </ul>
      )}
      
      <button type="button" className="w-full py-4 bg-accent-surface-primary text-accent-onSurface-primary rounded-lg font-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Choose Plan
      </button>
    </article>
  )
}

function FAQBlock_Default({ Heading, Body, Button, Chips }) {
  return (
    <section className="bg-base-surface-primary p-8 rounded-xl" aria-labelledby="faq-heading">
      {Heading && (
        <h2 id="faq-heading" className="font-primary text-3xl mb-8 text-base-onSurface-primary">
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
        <button type="button" className="mt-8 px-6 py-3 border border-interface-border text-base-onSurface-primary rounded-lg font-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          View All FAQs
        </button>
      )}
    </section>
  )
}