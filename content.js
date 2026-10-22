/*
 * Edit this file to update the lists and links on your website.
 * Edit index.html for the introductory bio and contact paragraph.
 * Use only links and facts that you are ready to make public.
 */
window.SITE_CONTENT = {
  // Add a real portrait in assets/, then set this to "assets/portrait.jpg".
  portrait: null,
  portraitAlt: "Xiaoshuang Wang",
  // Optional: a privacy-reviewed CV PDF. The original internship CV is NOT copied.
  cvUrl: null,
  // Optional: your public ISyE profile URL, not the account-editing /user URL.
  departmentProfileUrl: null,
  links: [
    { label: "Email", url: "mailto:xwang3094@gatech.edu" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=gKjjnGQAAAAJ" },
    { label: "GitHub", url: "https://github.com/wxsgoo123-cloud" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/xiaoshuang-wang-1904b522b" }
  ],
  interests: [
    {
      title: "Safe reinforcement learning",
      text: "Learning policies while controlling risk during exploration, using certified safe sets and Gaussian process models."
    },
    {
      title: "Risk-sensitive decision-making",
      text: "Accounting for Bayesian model uncertainty and risk preferences in sequential decision problems."
    },
    {
      title: "Stochastic optimization",
      text: "Developing and analyzing optimization algorithms for policy learning and nonconvex problems."
    }
  ],
  papers: [
    {
      title: "Safe Learning Through Controlled Expansion of Exploration Set",
      authors: ["Xiaoshuang Wang", "Raid Ayoub", "Enlu Zhou"],
      year: "2026",
      status: "Preprint",
      summary: "A safe reinforcement learning framework that progressively expands a verified exploration set.",
      overview: "The framework uses certified safe state-action pairs and a Gaussian process model. The work establishes high-probability training-time safety and logarithmic regret bounds, with Python experiments in Safety Gymnasium evaluating reward, safety violations, and sample efficiency.",
      // Add actual public URLs when available; empty links are not rendered.
      links: []
    },
    {
      title: "Bayesian Risk-Sensitive Policy Optimization for MDPs with General Loss Functions",
      authors: ["Xiaoshuang Wang", "Yifan Lin", "Enlu Zhou"],
      year: "2026",
      status: "Preprint",
      summary: "Policy optimization with coherent risk measures over a Bayesian posterior distribution.",
      overview: "This work develops a projected subgradient algorithm for risk-sensitive policy optimization under Bayesian model uncertainty. It establishes a nonasymptotic convergence rate to stationarity with fixed-batch data and global convergence under episodic updates, with Python experiments on FrozenLake.",
      links: []
    }
  ],
  education: [
    { institution: "Georgia Institute of Technology", degree: "Ph.D. in Operations Research", date: "Expected May 2028", note: "Advisor: Prof. Enlu Zhou" },
    { institution: "ETH Zürich", degree: "M.Sc. in Mathematics / Applied Mathematics", date: "August 2023", note: "" },
    { institution: "Nanjing University", degree: "B.Sc. in Mathematics", date: "July 2021", note: "" },
    { institution: "University of Wisconsin–Madison", degree: "Visiting Student", date: "January–August 2020", note: "" }
  ],
  experience: [
    { title: "Master’s thesis · ETH Zürich", date: "January–August 2023", text: "Open-loop control for inventory management. Advised by Prof. Andreas Krause and Dr. Yifan Hu." },
    { title: "Semester project · ETH Zürich", date: "February–September 2022", text: "Batch-free stochastic cubic regularization for nonconvex optimization. Advised by Prof. Niao He and Dr. Yifan Hu." },
    { title: "Research · CUHK, Shenzhen", date: "December 2020–August 2021", text: "Multi-armed bandits with additional information sources. Advised by Prof. Pin Gao and Prof. Lianmin Zhang." }
  ],
  teaching: [
    { title: "Statistical Methods", date: "Fall 2025", text: "Graduate Teaching Assistant · Georgia Tech" },
    { title: "Stochastic Processes I", date: "Fall 2024", text: "Graduate Teaching Assistant · Georgia Tech" }
  ],
  awards: [
    { title: "Samsung Scholarship", date: "2019", text: "Nanjing University" },
    { title: "First Prize, National College Students Mathematical Competition", date: "2018", text: "Jiangsu Division" }
  ]
};
