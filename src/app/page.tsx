"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardFourteen from '@/components/sections/feature/FeatureCardFourteen';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import PricingCardSix from '@/components/sections/pricing/PricingCardSix';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles } from "lucide-react";

export default function PilatesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="noise"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen 
          brandName="Pilates Flow"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Classes", id: "classes" },
            { name: "Team", id: "team" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Transform Your Body"
          bottomRightText="hello@pilatesflow.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll 
          tag="Pilates Redefined"
          title="Transform Your Body, Elevate Your Mind"
          description="Experience the perfect blend of strength, flexibility, and mindfulness. Join our vibrant community of pilates enthusiasts and discover your best self."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807824408-mgoebr7j.jpg"
          imageAlt="Woman practicing pilates with perfect form"
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "View Classes", href: "classes" }
          ]}
        />
      </div>

      <div id="classes" data-section="classes">
        <FeatureCardFourteen 
          tag="Our Classes"
          title="Find Your Perfect Pilates Experience"
          description="From energizing reformer sessions to grounding mat classes, we have something for every level and goal."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: "1",
              title: "Reformer Flow",
              description: "Dynamic full-body workout using the pilates reformer machine for maximum strength and toning",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807825283-xr4a2po2.jpg",
              imageAlt: "Reformer pilates class in session"
            },
            {
              id: "2",
              title: "Mat Pilates",
              description: "Classic pilates movements using only your body weight and mindful breathing for core strength",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807826009-g1o6lpql.jpg",
              imageAlt: "Group mat pilates class"
            },
            {
              id: "3",
              title: "Core Power",
              description: "Intensive core-focused sessions that build deep abdominal strength and stability",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807826827-r9bairjz.jpg",
              imageAlt: "Core power pilates class"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne 
          tag="Meet Our Instructors"
          title="Expert Teachers, Passionate Mentors"
          description="Learn from certified pilates instructors dedicated to helping you achieve your fitness goals."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Lead Instructor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807827446-scde2yyt.jpg",
              imageAlt: "Sarah Mitchell pilates instructor"
            },
            {
              id: "2",
              name: "Jessica Chen",
              role: "Reformer Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807828156-3hn60bmz.jpg",
              imageAlt: "Jessica Chen pilates instructor"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Mat Pilates Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807829034-9axwq5yb.jpg",
              imageAlt: "Emma Rodriguez pilates instructor"
            },
            {
              id: "4",
              name: "Lisa Thompson",
              role: "Wellness Coach",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807829612-cat1o9r0.jpg",
              imageAlt: "Lisa Thompson pilates instructor"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEight 
          tag="Client Success Stories"
          title="Real Results From Real Members"
          description="Discover transformations from our community of passionate pilates practitioners."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Maria Santos",
              role: "Marketing Executive",
              company: "San Francisco",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807830359-s4qys0q5.jpg",
              imageAlt: "Maria Santos testimonial"
            },
            {
              id: "2",
              name: "Amanda Lee",
              role: "Fitness Enthusiast",
              company: "Los Angeles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807831298-fw0i3u2l.jpg",
              imageAlt: "Amanda Lee testimonial"
            },
            {
              id: "3",
              name: "Rachel Kim",
              role: "Yoga Instructor",
              company: "New York",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807832035-0ge9ikf6.jpg",
              imageAlt: "Rachel Kim testimonial"
            },
            {
              id: "4",
              name: "Jennifer Davis",
              role: "Physical Therapist",
              company: "Boston",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807832811-7z2t6lre.jpg",
              imageAlt: "Jennifer Davis testimonial"
            },
            {
              id: "5",
              name: "Nicole White",
              role: "Personal Trainer",
              company: "Chicago",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807833889-0typwn0k.jpg",
              imageAlt: "Nicole White testimonial"
            },
            {
              id: "6",
              name: "Sophia Johnson",
              role: "Wellness Coach",
              company: "Miami",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807834576-qlow3f83.jpg",
              imageAlt: "Sophia Johnson testimonial"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardSix 
          tag="Membership Plans"
          title="Choose Your Pilates Journey"
          description="Flexible membership options designed for every lifestyle and commitment level."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          plans={[
            {
              id: "starter",
              price: "$79",
              subtitle: "Per month - Perfect for beginners",
              features: [
                "4 classes per month",
                "Access to all class types",
                "Member community access",
                "Flexible scheduling"
              ],
              buttons: [{ text: "Start Now", href: "contact" }]
            },
            {
              id: "active",
              price: "$149",
              subtitle: "Per month - For dedicated practitioners",
              features: [
                "Unlimited classes",
                "Priority class booking",
                "Personalized fitness plan",
                "One free private session",
                "Member exclusive events"
              ],
              buttons: [{ text: "Choose Active", href: "contact" }]
            },
            {
              id: "premium",
              price: "$199",
              subtitle: "Per month - The ultimate experience",
              features: [
                "Unlimited classes",
                "Monthly private sessions",
                "Personalized nutrition guide",
                "Premium studio access",
                "VIP event invitations",
                "Free merchandise"
              ],
              buttons: [{ text: "Go Premium", href: "contact" }]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia 
          tag="Questions?"
          title="Everything You Need to Know"
          description="Get answers to common questions about our studio, classes, and membership options."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807835486-3565ltfu.jpg"
          imageAlt="Bright and welcoming pilates studio interior"
          mediaPosition="right"
          faqs={[
            {
              id: "1",
              title: "Do I need pilates experience to join?",
              content: "Not at all! Our classes are designed for all levels, from complete beginners to advanced practitioners. Our instructors will guide you through modifications and progressions based on your fitness level."
            },
            {
              id: "2",
              title: "What should I bring to class?",
              content: "We provide mats, props, and equipment. Simply bring a water bottle and wear comfortable, breathable clothing. Most members prefer fitted clothes to see proper alignment."
            },
            {
              id: "3",
              title: "How long are classes?",
              content: "Our standard classes are 55 minutes. We also offer 45-minute express classes and 75-minute advanced sessions. Check our schedule for all available options."
            },
            {
              id: "4",
              title: "Can I cancel my membership anytime?",
              content: "Yes! We offer month-to-month memberships with no long-term contracts. You can cancel or pause your membership anytime with 7 days notice."
            },
            {
              id: "5",
              title: "Do you offer private sessions?",
              content: "Absolutely! Private sessions are available for all membership levels. We offer one-on-one instruction tailored to your specific goals and needs. Contact us for pricing."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit 
          tag="Join Now"
          title="Ready to Transform?"
          description="Subscribe to our newsletter for exclusive class drops, wellness tips, and special member-only offers."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765807824408-mgoebr7j.jpg"
          imageAlt="Pilates studio inspiration"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal logoText="Pilates Flow" />
      </div>
    </ThemeProvider>
  );
}