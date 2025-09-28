
/**
 * Types
 */
import type { JSX } from "react";

type SubmenuItem = {
  href: string;
  icon: JSX.Element;
  label: string;
  desc: string;
}

type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[]
};

import { heroBanner } from "@/assets";
/**
 * Assets
 */
import {
  ChartArea,
  Building2,
  Component,
  Code,
  BetweenHorizonalEnd,
  Landmark,
  Blocks,
  Terminal,
  Package,
  SquareMousePointer,
  ChartPie,
  Files,
  UserRoundPen,
  GitFork,
  LaptopMinimal,
  ArrowBigDownDash,
  CreditCard,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Youtube,  Facebook,

} from 'lucide-react';

import {
  feature1,
  feature2,
  blog1,
  blog2,
  blog3,
  avatar1,
  avatar2,
  avatar3,
  GeniLogo,
} from '@/assets';

// Header
export const navMenu: MenuItem[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/products',
    label: 'Products',
    submenu: [
      {
        href: '/products/geniflowcore',
        icon: <ChartArea />,
        label: 'GeniFlow',
        desc: 'Poweful automation tool for facebook',
      },
      {
        href: '#',
        icon: <Building2 />,
        label: 'B2B SaaS Suite',
        desc: 'Add-on features built specifically for B2B applications',
      },
      {
        href: '#',
        icon: <Component />,
        label: 'React Components',
        desc: 'Embeddable prebuilt UI components for quick and seamless integrations',
      },
      {
        href: '#',
        icon: <Code />,
        label: 'Next.js Analytics',
        desc: 'The fastest and most seamless authentication solution for Next.js',
      },
      {
        href: '#',
        icon: <BetweenHorizonalEnd />,
        label: 'AnalytiX Elements',
        desc: 'Unstyled UI primitives for endless customization. Powered by AnalytiX',
      },
      {
        href: '/products',
        icon: <Landmark />,
        label: 'View All',
        desc: 'View All Products From Team GeniFlow ',
      },
    ],
  },
  {
    href: '/features',
    label: 'Features',
  },
  {
    href: '/docs',
    label: 'Docs',
    submenu: [
      {
        href: '#',
        icon: <Terminal />,
        label: 'Getting Started',
        desc: 'Powerful options to securely authenticate and manage',
      },
      {
        href: '#',
        icon: <Package />,
        label: 'Core Concepts',
        desc: 'Add-on features built specifically for B2B applications',
      },
      {
        href: '#',
        icon: <SquareMousePointer />,
        label: 'Customization',
        desc: 'Embeddable prebuilt UI components for quick and seamless integrations',
      },
      {
        href: '#',
        icon: <Blocks />,
        label: 'Official Plugins',
        desc: 'The fastest and most seamless authentication solution for Next.js',
      },
    ],
  },
  {
    href: '/pricing',
    label: 'Pricing',
  },
];

// Hero
export const heroData = {
  sectionSubtitle: 'All in one Automation tool',
  sectionTitle: 'Presenting the next-gen AI',
  decoTitle: 'Automation',
  sectionText:
    'AI-Powered Social Media Automation: Seamlessly automate Facebook, YouTube, and content creation — no manual posting, just results.',
};

// Feature
export const featureData = {
  sectionSubtitle: 'Features',
  sectionTitle: 'Discover Powerful Features',
  sectionText:
    'Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.',
  features: [
    {
      icon: <ChartPie size={32} />,
      iconBoxColor: 'bg-blue-600',
      title: 'Advance Analytics',
      desc: 'Experience advanced analytics capabilities that enable you to dive deep into data, uncover meaningful patterns, and derive actionable insights',
      imgSrc: feature1,
    },
    {
      icon: <Files size={32} />,
      iconBoxColor: 'bg-cyan-500',
      title: 'Automated Reports',
      desc: 'Save time and effort with automated reporting, generating comprehensive and accurate reports automatically, streamlining your data analysis',
      imgSrc: feature2,
    },
    {
      icon: <UserRoundPen size={32} />,
      iconBoxColor: 'bg-yellow-500',
      title: 'Retention Report',
      desc: 'Enhance retention with our report, maximizing customer engagement and loyalty for business',
      imgSrc: feature1,
    },
    {
      icon: <GitFork size={32} />,
      iconBoxColor: 'bg-red-500',
      title: 'A/B Test Variants',
      desc: 'Efficiently compare A/B test variants to determine the most effective strategies',
      imgSrc: feature1,
    },
    {
      icon: <Blocks size={32} />,
      iconBoxColor: 'bg-purple-500',
      title: 'Integration Directory',
      desc: 'Seamlessly integrate with our directory, maximizing efficiency and unlocking the full potentials',
      imgSrc: feature1,
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: 'How it works',
  sectionTitle: 'Easy Process to Get Started',
  sectionText:
    'Discover how it works by leveraging advanced algorithms and data analysis techniques.',
  list: [
    {
      icon: <LaptopMinimal size={32} />,
      title: 'Create your account',
      text: 'Join us now and create your account to start exploring our platform and unlocking exciting features.',
    },
    {
      icon: <ArrowBigDownDash size={32} />,
      title: 'Install our tracking app',
      text: 'Install our tracking app to effortlessly monitor and manage your activities, gaining valuable insights and optimizing your performance.',
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Start tracking your website',
      text: 'Start tracking your website effortlessly to gain valuable insights into visitor behavior, performance metrics, and optimization opportunities.',
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: 'Overview',
  sectionTitle: 'All-In-One Automation Tool',
  sectionText:
    'Powerful Automation made easy. Content Editing , Uploading ,Anylitis and Id Active Made easy.',
  listTitle: 'Already trusted by people around the world',
  list: [
    {
      title: '500',
      text: 'Active Downloads',
    },
    {
      title: '4.26',
      text: 'Average Rating',
    },
    {
      title: '450',
      text: 'Active Users',
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: 'Reviews',
  sectionTitle: 'What Our Customers Are Says',
  reviewCard: [
    {
      title: 'We’re building a better application now, thanks to AnalytiX.',
      text: 'Our application is undergoing significant improvements with the help of NioLand, resulting in enhanced functionality, improved user experience',
      reviewAuthor: 'Wade Warren',
      avatar: avatar1,
    },
    {
      title: 'Great Service from a expert support system of AnalytiX',
      text: 'Experience exceptional service and support from AnalytiX expert team, dedicated to providing knowledgeable assistance and ensuring a seamless',
      reviewAuthor: 'Dianne Russell',
      avatar: avatar2,
    },
    {
      title: 'Pricing is amazing for the small businesses around the world',
      text: 'Our pricing is tailored to suit the needs of small businesses worldwide, offering affordable and competitive rates that provide excellent value for',
      reviewAuthor: 'Marvin McKinney',
      avatar: avatar3,
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: 'Our Blog',
  sectionTitle: 'Resource Center',
  sectionText:
    'Unlock the potential of our resource center, accessing valuable information and insights for your business growth.',
  blogs: [
    {
      imgSrc: blog1,
      badge: 'Growth',
      title: 'Why customer retention is the ultimate growth strategy?',
      author: {
        avatarSrc: avatar1,
        authorName: 'John Carte',
        publishDate: 'Oct 10, 2024',
        readingTime: '8 min read',
      },
    },
    {
      imgSrc: blog2,
      badge: 'Marketing',
      title: 'Optimizing your advertising campaigns for higher ROAS',
      author: {
        avatarSrc: avatar2,
        authorName: 'Annette Black',
        publishDate: 'Jul 15, 2024',
        readingTime: '5 min read',
      },
    },
    {
      imgSrc: blog3,
      badge: 'Growth',
      title: 'How to build the ultimate tech stack for growth',
      author: {
        avatarSrc: avatar3,
        authorName: 'Ralph Edwards',
        publishDate: 'Mar 24, 2024',
        readingTime: '2 min read',
      },
    },
  ],
};

// Cta
export const ctaData = {
  text: 'Start tracking your user analytics to boost your business',
};

// Footer
export const footerData = {
  links: [
    {
      title: 'Product',
      items: [
        {
          href: '#',
          label: 'Components',
        },
        {
          href: '#',
          label: 'Pricing',
        },
        {
          href: '#',
          label: 'Dashboard',
        },
        {
          href: '#',
          label: 'Feature requests',
        },
      ],
    },
    {
      title: 'Developers',
      items: [
        {
          href: '#',
          label: 'Documentation',
        },
        {
          href: '#',
          label: 'Discord server',
        },
        {
          href: '#',
          label: 'Support',
        },
        {
          href: '#',
          label: 'Glossary',
        },
        {
          href: '#',
          label: 'Changelog',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          href: '#',
          label: 'About',
        },
        {
          href: '#',
          label: 'Careers',
        },
        {
          href: '#',
          label: 'Blog',
        },
        {
          href: '#',
          label: 'Contact',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          href: '#',
          label: 'Terms and Conditions',
        },
        {
          href: '#',
          label: 'Privacy Policy',
        },
        {
          href: '#',
          label: 'Data Processing Agreement',
        },
        {
          href: '#',
          label: 'Cookie manager',
        },
      ],
    },
  ],
  copyright: '© 2025 Team GeniFlow',
  socialLinks: [
    {
      href: 'https://x.com/codewithsadee_',
      icon: <Twitter size={18} />,
    },
    {
      href: 'https://github.com/codewithsadee',
      icon: <Github size={18} />,
    },
    {
      href: 'https://www.linkedin.com/in/codewithsadee/',
      icon: <Linkedin size={18} />,
    },
    {
      href: 'https://www.instagram.com/codewithsadee',
      icon: <Instagram size={18} />,
    },
    {
      href: 'https://www.youtube.com/codewithsadee',
      icon: <Youtube size={18} />,
    },
    {
      href: 'https://www.youtube.com/codewithsadee',
      icon: <Youtube size={18} />,
    },
  ],
};



// All product list 
export const ProductsData = {
  titlehead: "Products",
  TitleText: "Here we have all the avlaible products ",
  Products: [{ img: feature1, title: "GeniFlow", icon: avatar1, desc: "GeniFlow all in one automation tool for social media", productID: 'geniflowcore',isPaid: true },
  { img: feature1, title: "GeniFlow", icon: avatar3, desc: "GeniFlow all in one automation tool for social media", productID: 'geniflowcore' ,isPaid: false},
  { img: feature1, title: "AutoEdits", icon: avatar2, desc: "GeniFlow all in one automation tool for social media", productID: '/' ,isPaid: false },
  { img: feature1, title: "Quote Genrator", icon: avatar1, desc: "GeniFlow all in one automation tool for social media", productID: '/'  ,isPaid: false},
  { img: feature1, title: "Downloader", icon: avatar2, desc: "GeniFlow all in one automation tool for social media", productID: '/'  ,isPaid: false},
  { img: feature1, title: "AN", icon: avatar3, desc: "GeniFlow all in one automation tool for social media", productID: '/'  ,isPaid: false},
  { img: feature1, title: "Fore", icon: avatar2, desc: "GeniFlow all in one automation tool for social media", productID: '/'  ,isPaid: false},
  { img: feature1, title: "Geni", icon: avatar3, desc: "GeniFlow all in one automation tool for social media", productID: '/'  ,isPaid: false},
  ]
}


// Import your feature1 image here
// import feature1 from '...';

export const geniflowcore = {
  title: "GeniFlow Core",
  logo:GeniLogo,
  desc: "For now this is main tool of Team GeniFlow and we are constantly improving it. all the feature of this tool is mention below",



  plans: {
    basic: {
      id: "basic",
      name: "basic",
      displayName: "Basic Plan",
      description: "Perfect for individuals getting started",
      popular: false,
      features: [
        "Up to 5 projects",
        "Basic templates",
        "Email support"
      ],
      billing: {
        monthly: {
          amount: 10,
          currency: "USD",
          interval: "month",
          intervalCount: 1,
          displayPrice: "$10/month"
        },
        quarterly: {
          amount: 25,
          currency: "USD",
          interval: "month", 
          intervalCount: 3,
          displayPrice: "$25/quarter",
          savings: 5,
          savingsPercentage: 17
        },
        halfYearly: {
          amount: 50,
          currency: "USD",
          interval: "month",
          intervalCount: 6,
          displayPrice: "$50/6 months", 
          savings: 10,
          savingsPercentage: 17
        },
        yearly: {
          amount: 100,
          currency: "USD",
          interval: "year",
          intervalCount: 1,
          displayPrice: "$100/year",
          savings: 20,
          savingsPercentage: 17
        }
      }
    },
    
    pro: {
      id: "pro",
      name: "pro", 
      displayName: "Pro Plan",
      description: "Ideal for growing businesses and teams",
      popular: true,
      features: [
        "Unlimited projects",
        "Premium templates", 
        "Priority support",
        "Advanced analytics"
      ],
      billing: {
        monthly: {
          amount: 20,
          currency: "USD",
          interval: "month",
          intervalCount: 1,
          displayPrice: "$20/month"
        },
        quarterly: {
          amount: 50,
          currency: "USD", 
          interval: "month",
          intervalCount: 3,
          displayPrice: "$50/quarter",
          savings: 10,
          savingsPercentage: 17
        },
        halfYearly: {
          amount: 100,
          currency: "USD",
          interval: "month", 
          intervalCount: 6,
          displayPrice: "$100/6 months",
          savings: 20,
          savingsPercentage: 17
        },
        yearly: {
          amount: 200,
          currency: "USD",
          interval: "year",
          intervalCount: 1, 
          displayPrice: "$200/year",
          savings: 40,
          savingsPercentage: 17
        }
      }
    },
    
    max: {
      id: "max",
      name: "max",
      displayName: "Max Plan", 
      description: "Enterprise-grade solution with all features",
      popular: false,
      features: [
        "Everything in Pro",
        "White-label options",
        "Custom integrations",
        "Dedicated account manager"
      ],
      billing: {
        monthly: {
          amount: 50,
          currency: "USD",
          interval: "month",
          intervalCount: 1,
          displayPrice: "$50/month"
        },
        quarterly: {
          amount: 125,
          currency: "USD",
          interval: "month",
          intervalCount: 3, 
          displayPrice: "$125/quarter",
          savings: 25,
          savingsPercentage: 17
        },
        halfYearly: {
          amount: 250,
          currency: "USD",
          interval: "month",
          intervalCount: 6,
          displayPrice: "$250/6 months",
          savings: 50,
          savingsPercentage: 17
        },
        yearly: {
          amount: 500,
          currency: "USD",
          interval: "year", 
          intervalCount: 1,
          displayPrice: "$500/year",
          savings: 100,
          savingsPercentage: 17
        }
      }
    }
  },
  
  metadata: {
    currency: "USD",
    taxIncluded: false,
    freeTrial: {
      enabled: true,
      days: 14
    },
    refundPolicy: {
      enabled: true,
      days: 30
    }
  },



  featureDetails: [
    {
      featureTitle: "Downloader",
      featureDesc: "This tool can download it self",
      featureCards: [
        {
          img: feature1,
          title: "Downloader",
          desc: "This can download itself",
          link: "/",
          moreDetails: { title: "what up?", desc: "here we go again" }
        },
        {
          img: feature1,
          title: "Support Youtube",
          desc: "This can download video and shorts video from Youtube",
          link: "/",
          moreDetails: { title: "what up?", desc: "here we go again" }
        },
        {
          img: feature1,
          title: "Support Instagram",
          desc: "This can download Download video and reels from instagram",
          link: "/",
          moreDetails: { title: "what up?", desc: "here we go again" }
        },
        {
          img: feature1,
          title: "Downloader",
          desc: "This can download itself",
          link: "/",
          moreDetails: {} // Empty object instead of missing properties
        },
        {
          img: feature1,
          title: "Downloader",
          desc: "This can download itself",
          link: "/",
          moreDetails: {} // Empty object instead of missing properties
        },
        {
          img: feature1,
          title: "Downloader",
          desc: "This can download itself",
          link: "/",
          moreDetails: {} // Empty object instead of missing properties
        },
        {
          img: feature1,
          title: "Downloader",
          desc: "This can download itself",
          link: "/",
          moreDetails: {} // Empty object instead of missing properties
        }
      ],

    },
    {
      featureTitle: "Auto Editing",
      featureDesc: "This tool can Edit video and image it self",
      featureCards: [
        {
          img: feature1,
          title: "Auto Editor",
          desc: "This can edit videos automatically",
          link: "/",
          moreDetails: { title: "Auto Editing", desc: "Here we go again" }
        },
        {
          img: feature1,
          title: "Auto Editor",
          desc: "This can edit videos automatically",
          link: "/",
          moreDetails: { title: "Auto Editing", desc: "Here we go again" }
        },
        {
          img: feature1,
          title: "Auto Editor",
          desc: "This can edit videos automatically",
          link: "/",
          moreDetails: {} // Empty object instead of empty string
        },
        {
          img: feature1,
          title: "Auto Editor",
          desc: "This can edit videos automatically",
          link: "/",
          moreDetails: { title: "Auto Editing", desc: "Here we go again" }
        },
        {
          img: feature1,
          title: "Auto Editor",
          desc: "This can edit videos automatically",
          link: "/",
          moreDetails: {} // Empty object instead of empty string
        },
        {
          img: feature1,
          title: "Auto Editor",
          desc: "This can edit videos automatically",
          link: "/",
          moreDetails: { title: "Auto Editing", desc: "Here we go again" }
        },
        {
          img: feature1,
          title: "Auto Editor",
          desc: "This can edit videos automatically",
          link: "/",
          moreDetails: {} // Empty object instead of empty string
        }
      ]
    },
    {
      featureTitle: "Uploading",
      featureDesc: "This tool can upload content automatically",
      featureCards: [
        {
          img: feature1,
          title: "Auto Uploader",
          desc: "This can upload content automatically",
          link: "/",
          moreDetails: {} // Empty object instead of empty string
        },
        {
          img: feature1,
          title: "Auto Uploader",
          desc: "This can upload content automatically",
          link: "/",
          moreDetails: { title: "Auto Upload", desc: "Here we go again" }
        },
        {
          img: feature1,
          title: "Auto Uploader",
          desc: "This can upload content automatically",
          link: "/",
          moreDetails: { title: "Auto Upload", desc: "Here we go again" }
        },
        {
          img: feature1,
          title: "Auto Uploader",
          desc: "This can upload content automatically",
          link: "/",
          moreDetails: {} // Empty object instead of empty string
        },
        {
          img: feature1,
          title: "Auto Uploader",
          desc: "This can upload content automatically",
          link: "/",
          moreDetails: { title: "Auto Upload", desc: "Here we go again" }
        },
        {
          img: feature1,
          title: "Auto Uploader",
          desc: "This can upload content automatically",
          link: "/",
          moreDetails: {} // Empty object instead of empty string
        },
        {
          img: feature1,
          title: "Auto Uploader",
          desc: "This can upload content automatically",
          link: "/",
          moreDetails: { title: "Auto Upload", desc: "Here we go again" }
        }
      ]
    }
  ],
            // Sample images 
     images:[
        {
            url: GeniLogo,
            title: 'Mountain Landscape',
            description: 'Breathtaking mountain vista with morning mist'
        },
        {
            url: heroBanner,
            title: 'Ocean Sunset',
            description: 'Golden hour over the endless ocean'
        },
        {
            url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
            title: 'Forest Path',
            description: 'Mysterious trail through ancient woods'
        },
        {
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            title: 'Urban Architecture',
            description: 'Modern city skyline at twilight'
        },
        {
            url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
            title: 'Desert Dunes',
            description: 'Endless sand dunes under starlit sky'
        },
        {
            url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
            title: 'Desert Dunes',
            description: 'Endless sand dunes under starlit sky'
        },
        {
            url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
            title: 'Desert Dunes',
            description: 'Endless sand dunes under starlit sky'
        },
        {
            url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
            title: 'Desert Dunes',
            description: 'Endless sand dunes under starlit sky'
        },{
            url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
            title: 'Desert Dunes',
            description: 'Endless sand dunes under starlit sky'
        }
        
    ],
    tutorialLinks :[
    {
      name: 'YouTube English ',
      url: 'https://youtube.com/@yourusername',
      icon: Youtube,
      color: 'hover:text-red-500'
    },
    {
      name: 'YouTube Hindi ',
      url: 'https://instagram.com/yourusername',
      icon: Youtube,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: Twitter,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/yourusername',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
      color: 'hover:text-blue-700'
    }
  ],
  downloadcard :{
  downloadLink:"1t463U-sN_FLzau9kE995YuksyIlMBls2",
  LicenceInfo:{title:"License Information",desc:"To get liences or serial code contact these handle and get 1 month free.*Note: If tool is in free category then no liences needs.",whatsaap:"https://wa.me/919113161106?text=Hey",instagram:"",telegram:""},
  title:"Download Now!!",
  desc:"Get Started for free and automate your task now!!"
}
};