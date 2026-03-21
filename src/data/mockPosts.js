export const mockPosts = [
  {
    _id: "mock1",
    title: "Revolutionizing APFC: Contactor vs Thyristor Switching",
    slug: { current: "contactor-vs-thyristor-switching" },
    publishedAt: "2024-03-15T12:00:00Z",
    author: { name: "Er. Rajesh Sharma" },
    mainImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    excerpt: "An in-depth analysis of switching technologies in Automatic Power Factor Correction systems and how to choose the right one for your plant...",
    body: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "In the industrial power sector, the debate between contactor-based and thyristor-based switching for APFC panels is ongoing. Contactor-based systems are robust and cost-effective for stable loads, whereas thyristor-based systems offer near-instantaneous response for dynamic loads like welding and CNC machines." }]
      },
      {
        _key: "b2",
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Why Response Time Matters" }]
      },
      {
        _key: "b3",
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "For industries with high-frequency load variations, a slow response can lead to reactive power penalties. Thyristors eliminate inrush current and switching transients, protecting your capacitors and extending the panel's lifespan." }]
      },
      {
        _key: "b4",
        _type: "block",
        style: "blockquote",
        children: [{ _type: "span", text: "Engineering tip: Always opt for thyristor switching if your load cycles in less than 60 seconds." }]
      }
    ]
  },
  {
    _id: "mock2",
    title: "Mitigating Harmonics in Modern Power Systems",
    slug: { current: "mitigating-harmonics-modern-systems" },
    publishedAt: "2024-03-10T09:30:00Z",
    author: { name: "Technical Support Team" },
    mainImage: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
    excerpt: "Understanding the impact of non-linear loads on power quality and the role of detuned reactors in harmonic filtration...",
    body: [
      {
        _key: "b1",
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Non-linear loads like VFDs and LED lighting introduce harmonics that can overheat transformers and cause nuisance tripping. Detuned reactors are essential to prevent resonance and ensure system stability." }]
      }
    ]
  }
];
