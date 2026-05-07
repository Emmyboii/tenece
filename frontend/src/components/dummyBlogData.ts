// dummyBlogData.ts
import blogImg from "../assets/blogImg.svg";

import type { BlogPost } from "./types";

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "luxury-real-estate-vs-traditional-investments",
        title: "Luxury Real Estate vs. Traditional Investments: Where Should You Put Your Money?",
        coverImage: blogImg,
        date: "25 Jan 2025",
        author: "Tenece Editorial",
        content: [
            {
                type: "paragraph",
                text:
                    "In a world of volatile markets and shifting economic trends, the pursuit of wealth preservation has never been more strategic. For discerning investors—particularly those with high-net-worth profiles—the decision of where to place capital isn’t just about returns, but also about security, legacy, and lifestyle. While traditional investment vehicles like stocks, bonds, and mutual funds remain popular, a growing number of investors are looking beyond Wall Street. They’re turning toward luxury real estate—especially in emerging economic hubs like Lagos, Nigeria—as a resilient, tangible, and status-enhancing asset class. But what makes luxury real estate a more compelling option? And how does it truly stack up against conventional alternatives? Let’s explore.",
            },
            {
                type: "heading",
                text: "A Philosophy Rooted in Excellence",
            },
            {
                type: "paragraph",
                text:
                    "At Tenece Residences, every project begins with a commitment to quality and innovation. Our design philosophy prioritizes form, function, and timeless appeal.",
            },
            {
                type: "heading",
                text: "Diversification with Prestige",
            },
            {
                type: "paragraph",
                text: "Luxury real estate isn’t just about numbers—it’s about diversification with distinction. It adds depth to your portfolio by combining economic value with emotional and experiential returns. You’re not just investing in property; you’re investing in an address, a lifestyle, and a legacy. Imagine hosting clients in your private penthouse, using it as a high-end short-let for visiting executives, or passing it down to the next generation. These benefits are intangible—but invaluable. And unlike stocks, luxury property rarely “crashes overnight.” Its high entry barrier protects it from the kind of panic selling that plagues public markets.Take Mrs. Adetola, a Nigerian tech executive based in the UK. In early 2022, she was deciding between increasing her international stock portfolio and acquiring a unit at The Mirasol, Ikoyi. Her considerations: The stocks offered projected returns of 10% but came with market volatility The Mirasol offered long-term asset appreciation, tangible ownership, and prestige She opted for a smart duplex at The Mirasol and signed during the off-plan phase. By 2024: The property had appreciated 24% She began renting it to a diplomatic client for ₦20M/year She used it for part-time personal stays during trips to Nigeria “I’ve never felt more confident about an investment,” she notes. “It gives me both peace of mind and pride.”"
            },
            {
                type: "list",
                items: [
                    "Long-term value appreciation",
                    "Stable rental income",
                    "Tangible asset security",
                    "Hedge against inflation",
                ],
            },
            {
                type: "heading",
                text: "Where Design Meets Smart Living",
            },
            {
                type: "paragraph",
                text:
                    "Smart living is not an add-on — it is embedded in our architectural planning. From intelligent layouts to future-ready infrastructure, each residence is built for modern living.",
            },
            {
                type: "paragraph",
                text:
                    "This approach ensures that residents enjoy comfort today while securing value for tomorrow.",
            },
        ],
    },
];
