export type Category =
  | "Budgeting"
  | "Saving"
  | "Side Hustle"
  | "Make Money Online"
  | "Investing"
  | "Debt Free";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: string;
  featured?: boolean;
  height?: "tall" | "medium" | "short";
}

export const categoryColors: Record<Category, { bg: string; text: string }> = {
  Budgeting: { bg: "bg-sage-100", text: "text-sage-700" },
  Saving: { bg: "bg-cream-200", text: "text-sage-700" },
  "Side Hustle": { bg: "bg-blush-100", text: "text-rose-700" },
  "Make Money Online": { bg: "bg-gold-300/20", text: "text-gold-500" },
  Investing: { bg: "bg-sage-200", text: "text-sage-800" },
  "Debt Free": { bg: "bg-blush-200", text: "text-rose-800" },
};

export const posts: Post[] = [
  {
    slug: "zero-based-budgeting-beginners-guide",
    title: "Zero-Based Budgeting: The Method That Finally Made My Money Make Sense",
    excerpt:
      "Every dollar has a job. That's the core of zero-based budgeting — and it changed how I think about money entirely. Here's how to set it up in a weekend.",
    category: "Budgeting",
    date: "May 14, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    imageAlt: "Budget planner with pen and coffee",
    featured: true,
    height: "tall",
    content: `
## What Is Zero-Based Budgeting?

Zero-based budgeting (ZBB) means your income minus your expenses equals zero — not because you've spent everything, but because every single dollar is assigned to a purpose. Savings count as an expense. Investments count. Even your "fun money" category gets a number.

The idea was popularized by Dave Ramsey, but the method has roots in corporate finance from the 1970s. The magic is that it forces intentionality. You can't accidentally overspend a category if you've already told that money where to go.

## Step 1: Know Your Monthly Income

Start with your take-home pay — the number that actually hits your account. If you're salaried, this is easy. Freelancers: use your lowest-earning month from the past year as your baseline.

## Step 2: List Every Single Expense

Fixed expenses first: rent, car payment, subscriptions, loan minimums. Then variable: groceries, gas, dining out, clothing, entertainment. Then irregular (save monthly for annual bills): insurance, car registration, holidays, birthdays.

**Don't forget:**
- Emergency fund contributions
- Sinking funds for future expenses
- Retirement savings
- Debt snowball/avalanche payments

## Step 3: Give Every Dollar a Job

Add up all your categories. Subtract from income. If the result isn't zero, adjust until it is. Have money left over? Assign it to savings or investments — don't leave it unassigned.

## Step 4: Track All Month Long

This is where most people fall off. You need a system:
- Free: Google Sheets or the EveryDollar free app
- Paid: YNAB ($99/year but genuinely transforms budgeting)
- Paper: A simple notebook works if you're consistent

Check in weekly. Move money between categories when life happens (because it will).

## Common Mistakes to Avoid

1. Forgetting irregular expenses — Set up sinking funds from day one
2. Making the budget too tight — Give yourself a real "fun money" category
3. Quitting after one bad month — Zero-based budgeting takes 3 months to feel natural
4. Not involving your partner — Budget together or budget alone, never in opposition

## My First Month Results

When I started ZBB, I discovered I was spending $340/month on "miscellaneous" — a category I later identified as mostly impulse purchases and forgotten subscriptions. That $340 now goes directly to my emergency fund. In 8 months, I went from $0 saved to $2,720. Not life-changing, but it was proof that the system works.

Zero-based budgeting isn't about restriction. It's about making conscious decisions so your money reflects your actual priorities — not just your habits.
    `,
  },
  {
    slug: "52-week-savings-challenge-variations",
    title: "5 Variations of the 52-Week Challenge That Actually Work",
    excerpt:
      "The classic version saves you $1,378. But what if you can't save $52 in one week? These modified versions fit any income.",
    category: "Saving",
    date: "May 8, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
    imageAlt: "Coins and savings jar",
    featured: true,
    height: "medium",
    content: `
## The Original Challenge — And Its Problem

The classic 52-week savings challenge has you save $1 in week 1, $2 in week 2, and so on until you're saving $52 in week 52. Total saved: $1,378.

It's brilliant in January. It's brutal in December, right when holiday spending peaks and your savings requirement is highest. That's a design flaw.

## Variation 1: Reverse It

Start with $52 in week 1 (when your motivation is highest), and decrease by $1 each week. You end the year saving $1. Same total, much better timing.

## Variation 2: Pick-Your-Week

Write all 52 amounts ($1–$52) on slips of paper. Each week, pull one out and save that amount. Miss a big one this week? Maybe next week's pull is manageable. Total stays the same, stress goes down.

## Variation 3: The Biweekly Version

If you're paid every two weeks, save every two weeks. Double each amount. $2 every two weeks instead of $1 weekly. Same result, fewer transactions to track.

## Variation 4: The Flat Amount Version

Can't stomach variable amounts? Just save $26.50 every week. Exactly $1,378 by December. Predictable, easy to automate, done.

## Variation 5: The Mini Version

Save $0.25 in week 1, increasing by a quarter each week. Total: $344.50. Perfect for students, part-time workers, or anyone rebuilding.

The best savings challenge is the one you'll actually complete. Pick your variation, automate it, and forget about it until December.
    `,
  },
  {
    slug: "freelance-writing-side-hustle-guide",
    title: "How I Made $2,400 My First Month Freelance Writing (Starting From Zero)",
    excerpt:
      "No portfolio, no experience, no connections. Here's the exact strategy I used to land my first paying clients in 3 weeks.",
    category: "Side Hustle",
    date: "April 29, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
    imageAlt: "Person writing at desk with notebook",
    featured: true,
    height: "tall",
    content: `
## The Uncomfortable Truth About Starting

When I decided to try freelance writing, I had no portfolio, no LinkedIn connections in the industry, and no idea what to charge. I'd written exactly one piece for a college publication four years earlier.

Three weeks later, I had three paying clients. Four weeks after that, I'd made $2,400 — part-time, from my kitchen table.

I'm not telling you this to brag. I'm telling you because I made every mistake first, so you don't have to.

## Step 1: Choose a Niche (This Is Non-Negotiable)

"I write about everything" is the fastest way to make nothing. Generalists compete against everyone. Specialists compete against a small pool and can charge more.

Pick based on two factors:
1. What do you already know? (Work experience, hobbies, personal finance journey)
2. What industries pay well? (Finance, B2B tech, health, legal, real estate)

I chose personal finance. I'd been obsessively budgeting for two years and could speak the language naturally.

## Step 2: Build a Portfolio in 2 Weeks — For Free

No one will hire you without samples. Here's how to get samples without clients:

- Guest post: Email small blogs in your niche. Offer a free post in exchange for a byline and a live URL.
- Medium: Publish 3-5 pieces on Medium. Not for money — for proof.
- Your own blog: Even a simple WordPress site with 3 posts establishes credibility.

I wrote four guest posts in two weeks. Zero pay, but four live URLs I could point to.

## Step 3: Find Clients (The Unglamorous Way)

- Upwork: Yes, rates start low. But reviews and momentum compound quickly.
- LinkedIn: Connect with content managers and marketing directors. Comment meaningfully on their posts for 2 weeks before pitching.
- Cold email: Find companies whose blog hasn't been updated in 3+ months. Offer a free diagnostic or sample post.
- Job boards: ProBlogger, Contena, Mediabistro list paid gigs daily.

I landed my first client from Upwork ($0.08/word — humbling). My second from cold email. My third from LinkedIn.

## Step 4: What to Charge

Don't charge by the hour. Charge by the word or the project.

- Starter rate: $0.08–$0.15/word (500-word post = $40–$75)
- 6 months in: $0.20–$0.30/word
- 1+ year: $0.30–$0.50/word
- Specialist authority: $500–$2,000+ per piece

Raise your rates every 3 months. The clients who leave at the higher rate weren't your people anyway.

## The $2,400 Breakdown

- Client 1 (Upwork, personal finance blog): $480 (6 posts at $80 each)
- Client 2 (cold email, fintech company): $900 (3 long-form articles)
- Client 3 (LinkedIn, credit card comparison site): $1,020 (4 posts over the month)

Part-time hours: roughly 3–4 hours per day.

Freelance writing isn't passive income. But it is flexible income — and the ceiling is genuinely high once you specialize and build momentum.
    `,
  },
  {
    slug: "sinking-funds-explained",
    title: "Sinking Funds Are the Secret Weapon Your Budget Is Missing",
    excerpt:
      "Christmas isn't an emergency. Neither is your car registration. Sinking funds turn 'unexpected' expenses into planned ones.",
    category: "Budgeting",
    date: "April 22, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    imageAlt: "Multiple savings jars labeled for different funds",
    height: "medium",
    content: `
## What's a Sinking Fund?

A sinking fund is money you save in small amounts each month for a specific future expense. The term comes from accounting — companies "sink" money into funds to pay future liabilities.

For personal finance: you know your car registration costs $180 every October. Instead of scrambling in October, you save $15/month all year. October arrives, you pay it, no stress.

## Common Sinking Fund Categories

- Car maintenance ($50–$100/month)
- Holiday gifts ($50–$150/month)
- Annual subscriptions (total annual cost divided by 12)
- Travel ($100–$300/month)
- Medical/dental (especially with high-deductible plans)
- Home repairs (1% of home value annually)
- Clothing (quarterly wardrobe refreshes)
- Pet care (vet visits, grooming)
- Birthday gifts

## How to Set Them Up

List every annual or irregular expense from the past year. Add them up. Divide by 12. That's your monthly sinking fund contribution.

Keep sinking funds in a separate high-yield savings account (HYSA) with sub-accounts or buckets if your bank allows it. Marcus, Ally, and SoFi all offer this feature.

Label each bucket. Watching your "Holiday" bucket grow from $50 to $600 by December is genuinely satisfying — and removes the guilt of spending it.

## The Mental Shift

The goal isn't to never spend money. It's to spend money you've already saved. Sinking funds transform guilt-spending into planned spending. That shift alone reduces financial anxiety dramatically.
    `,
  },
  {
    slug: "etsy-shop-passive-income",
    title: "Starting an Etsy Digital Shop: Month-by-Month Revenue Breakdown",
    excerpt:
      "I started selling digital printables on Etsy with $0 upfront. Here's exactly what each month looked like — the good, the slow, and the $847 month.",
    category: "Make Money Online",
    date: "April 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    imageAlt: "Colorful digital product printables on screen",
    height: "tall",
    content: `
## Why Digital Products on Etsy

Digital products are the closest thing to actual passive income that I've found. You create a file once. It sells while you sleep, while you're at your day job, while you're on vacation. No inventory. No shipping. No customer service beyond download issues.

The catch: it takes time to gain traction, and Etsy's algorithm rewards shops that already have traction. Month one is always the hardest.

## What I Sold

Budget spreadsheet templates. I made four initially:
1. Monthly budget planner (Google Sheets)
2. Debt payoff tracker
3. Annual savings goal tracker
4. Grocery budget organizer

Canva templates for social media came later.

## Month-by-Month Breakdown

Month 1: 3 sales, $18.60 revenue. Devastating. I almost quit.

Month 2: 11 sales, $68.20 revenue. SEO starting to work.

Month 3: 24 sales, $148.80 revenue. Added Canva templates.

Month 4: 43 sales, $266.60 revenue. Got my first Etsy search placement.

Month 5: 78 sales, $483.60 revenue. Pinterest traffic kicking in.

Month 6: 137 sales, $847.40 revenue. The compound effect is real.

## What Made the Difference

1. SEO titles: "Budget Planner Spreadsheet Google Sheets | Monthly Budget Template | Personal Finance Planner" — keyword-rich, searchable
2. Pinterest pins: Created 5 fresh pins per listing weekly
3. Pricing at $5–$7: Low enough to be impulse-buy, high enough to feel valuable
4. Star Seller badge: Fast replies plus 5-star reviews unlocked this around month 3

The shop now runs mostly on its own. I spend maybe 2 hours per month on it — creating new listings and responding to the occasional support message.

It's not replacing a full income. But $800/month of near-passive revenue fundamentally changes your financial situation.
    `,
  },
  {
    slug: "emergency-fund-guide",
    title: "Emergency Fund 101: How Much You Actually Need and Where to Keep It",
    excerpt:
      "Three months or six? Checking account or HYSA? The answers depend on your specific situation — here's how to figure out yours.",
    category: "Saving",
    date: "April 8, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    imageAlt: "Piggy bank on wooden surface with coins",
    height: "short",
    content: `
## The Purpose of an Emergency Fund

An emergency fund is not an investment. It is not a savings goal. It is insurance — a buffer between you and debt when life inevitably goes sideways.

Without it, every unexpected expense becomes a credit card charge. With it, a $1,200 car repair is just an inconvenience, not a financial crisis.

## How Much Do You Need?

The standard advice: 3–6 months of expenses. But the right number depends on:

- Job stability: Stable government job = 3 months. Commission-based or contract work = 6–9 months
- Dependents: Children or elderly parents in your care = more buffer
- Health: Chronic conditions with high medical costs = larger fund
- Single income household: 6+ months, no question

Calculate your actual monthly expenses, not income. Only essential costs count: housing, utilities, food, transportation, minimum debt payments, insurance.

## Where to Keep It

Requirements: liquid (accessible within 1-3 days), safe (FDIC-insured), separate from checking (out of sight, out of mind).

Best options in 2025:
- High-yield savings account (HYSA): 4.5–5% APY at Marcus, Ally, or SoFi
- Money market account: Similar rates, sometimes with check-writing capability

Not appropriate:
- Checking account (too accessible, earns nothing)
- Stocks/ETFs (value can drop 30% the month you need it)
- CDs (locked up, penalties for early withdrawal)

## Building It Without a Big Income

If you can't save 6 months overnight, start with a $1,000 "starter fund." This handles most minor emergencies and removes the credit card temptation. Then build slowly — even $50/month compounds over time.

Automate the transfer on payday. Pretend the money doesn't exist until there's an actual emergency. You'll be surprised how fast it grows when you stop looking at it.
    `,
  },
  {
    slug: "debt-avalanche-vs-snowball",
    title: "Debt Avalanche vs. Snowball: Which Method Gets You Debt Free Faster?",
    excerpt:
      "The math clearly favors one method. But the right choice might not be the mathematically optimal one — and that's okay.",
    category: "Debt Free",
    date: "March 31, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=600&q=80",
    imageAlt: "Person cutting credit card",
    height: "medium",
    content: `
## The Avalanche Method

Pay minimums on all debts. Put every extra dollar toward the debt with the highest interest rate. When it's paid off, roll that payment to the next-highest-rate debt.

The math: You pay the least interest overall. If the avalanche method takes you 36 months, the snowball might take 37 months but cost hundreds more in interest.

The catch: Your highest-interest debt might also be your largest balance. You could go months without crossing off a single debt. For some people, this kills motivation.

## The Snowball Method

Pay minimums on all debts. Put every extra dollar toward the smallest balance, regardless of interest rate. Celebrate each payoff. Roll the payment to the next-smallest debt.

The math: You pay more interest overall. Sometimes significantly more.

The win: Quick wins create momentum. Crossing off that first $400 medical bill in month two keeps you going. Behavioral psychology is on your side.

## Which Should You Choose?

Choose avalanche if:
- You are motivated by data and numbers
- Your high-interest debt has a manageable balance
- You've successfully completed long-term goals before

Choose snowball if:
- You've started debt payoff before and quit
- Motivation is your bigger challenge (not math)
- Your smallest debts have high interest rates too (rare)

The honest answer: The best method is the one you'll actually stick with for 2+ years. A "suboptimal" strategy you complete beats an optimal one you abandon in month four.
    `,
  },
  {
    slug: "print-on-demand-beginners",
    title: "Print-on-Demand in 2025: Is It Still Worth Starting?",
    excerpt:
      "Saturated? Yes. Impossible? No. Here's what the successful POD sellers are doing differently this year.",
    category: "Make Money Online",
    date: "March 24, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
    imageAlt: "Custom printed t-shirts and merchandise",
    height: "medium",
    content: `
## The State of Print-on-Demand in 2025

Let's be honest: the market is more competitive than it was in 2020. The sellers who thrived during the pandemic have years of reviews, SEO authority, and product libraries. Starting fresh is harder.

But "harder" isn't "impossible" — and the newcomers still succeeding share specific approaches.

## What's Not Working

- Generic motivational quotes on t-shirts (every platform is saturated)
- Copying bestseller designs (their SEO authority beats yours)
- Spreading across every POD platform simultaneously
- Treating it as fully passive from day one

## What Is Working in 2025

1. Micro-niches with passionate audiences: "Teachers who also love hiking and coffee" beats "teachers" every time. The audience is smaller but searches more specifically and converts better.

2. Seasonal plus trending combinations: Trend research on Google Trends plus seasonal timing equals products people want before the algorithm catches up. Lead time matters.

3. Canva Pro designs, not Shutterstock reskins: Original typography-based designs in distinctive styles outperform downloaded vectors everyone else is also using.

4. Merch by Amazon as your primary platform: Harder to get into, but Amazon's built-in traffic converts at rates Etsy and Redbubble can't match.

5. Cross-platform email capture: Build an email list from day one. The sellers who survived platform algorithm changes all had direct audience access.

## Realistic Expectations

- Month 1–3: Testing, learning, very little revenue
- Month 4–8: $50–$300/month if your research is solid
- Month 12+: $500–$1,500/month is achievable with the right niche and consistent uploading

POD isn't get-rich-quick. It's build-slowly-and-compound. Approach it that way and your expectations will match reality.
    `,
  },
  {
    slug: "index-funds-beginners",
    title: "Index Funds for Complete Beginners: Everything You Were Afraid to Ask",
    excerpt:
      "You don't need to understand the stock market to invest in it. You just need to understand this one concept.",
    category: "Investing",
    date: "March 17, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    imageAlt: "Stock market chart on screen",
    height: "short",
    content: `
## The One Thing You Need to Understand

The S&P 500 is an index of the 500 largest companies in America. Over any 20-year period in history, it has always gone up. Not every year — sometimes it drops dramatically. But 20 years? Always up.

An index fund simply tracks that index. When you buy shares in an S&P 500 index fund, you own tiny pieces of Apple, Microsoft, Amazon, and 497 other companies simultaneously.

## Why Index Funds Beat Most Active Investors

Over 15-year periods, roughly 90% of actively managed funds (where a professional picks stocks) underperform the S&P 500 index. Not 10% underperform — 90%.

This means most professional stock pickers, paid to beat the market, can't. So instead of trying to pick winners, you own the whole market.

## The Best Index Funds for Beginners

- VTSAX / VTI (Vanguard): Total US stock market, 0.03% expense ratio
- FZROX (Fidelity): Zero expense ratio — you pay literally nothing
- SWTSX (Schwab): Total market, 0.03%

The expense ratio matters enormously over time. The difference between 0.03% and 1.0% fees on a $100,000 portfolio over 30 years is over $200,000. Choose low.

## Where to Open an Account

1. Open a Roth IRA at Vanguard, Fidelity, or Schwab (tax-free growth — use this first)
2. Max it out: $7,000/year in 2025
3. Invest in a total market index fund
4. Don't touch it for 20+ years

That's it. That's the whole strategy. The best investors are often the ones who simply do nothing — and let compound interest do its work.
    `,
  },
  {
    slug: "no-spend-challenge",
    title: "I Did a 30-Day No-Spend Challenge. Here's What Happened to My Bank Account (and My Mind)",
    excerpt:
      "I expected to save money. I didn't expect to completely rewire how I thought about spending.",
    category: "Saving",
    date: "March 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80",
    imageAlt: "Empty wallet with coins",
    height: "medium",
    content: `
## The Rules I Set

No discretionary spending for 30 days. Allowed: groceries, bills, gas, medication. Not allowed: restaurants, coffee shops, online shopping, clothing, subscriptions I don't use, Amazon impulse buys.

Simple in theory. Surprisingly hard in practice.

## Week One: The Cravings

Every morning, I wanted my usual $6.50 latte. I made coffee at home and resented it. I got three "quick question" texts from friends suggesting lunch. I said no to all of them. That felt socially painful.

By day 7: I'd made coffee at home every day and actually started to like my home brew routine.

## Week Two: The Revelations

Without the friction of "should I buy this?" removed from every decision, I started noticing patterns. I was using Amazon as entertainment. Scrolling, adding to cart, checking out — not because I needed things, but because I was bored.

I started reading instead. This sounds like cliché, but removing one habit exposed another, and filling the gap with something more intentional changed how I spent my evenings.

## Week Three: The Peace

Money anxiety dropped significantly. Not because my finances changed, but because I wasn't actively making financial decisions every day and second-guessing them.

## Week Four: The Numbers

Final savings vs. an average month:
- Coffee shops: $86 saved
- Restaurants: $143 saved
- Online shopping: $217 saved
- Random purchases: $68 saved
- Total: $514 in 30 days

I also cancelled 4 subscriptions during the challenge that I'd completely forgotten about: $47/month back in my pocket permanently.

The money was great. But the reset in my relationship with spending was more valuable. I still buy coffee out sometimes. I just do it consciously now, not on autopilot.
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.featured);
}

export function getRelatedPosts(
  currentSlug: string,
  category: Category,
  limit = 3
): Post[] {
  return posts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}
