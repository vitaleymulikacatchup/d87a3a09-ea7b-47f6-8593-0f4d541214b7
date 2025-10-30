"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ChefHat, Gift, Heart, MessageSquare, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Italian Dining Experience"
          description="Discover the true taste of Italy with our traditional recipes passed down through generations, crafted with the finest ingredients"
          tag="Benvenuti"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          buttons={[
            { text: "View Menu", href: "product" },
            { text: "Reserve Table", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Since 1952, Bella Vista has been serving authentic Italian cuisine in the heart of the city. Our family recipes have been carefully preserved and passed down through three generations.",
            "We believe in using only the finest imported ingredients from Italy, combined with fresh local produce to create unforgettable dining experiences that transport you straight to the Italian countryside."
          ]}
          buttons={[
            { text: "Learn More", href: "team" }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Signature Dishes"
          description="Discover our most beloved Italian specialties, crafted with passion and authentic ingredients"
          tag="Chef's Selection"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              name: "Pasta Carbonara",
              price: "$24",
              imageSrc: "https://images.pexels.com/photos/5710181/pexels-photo-5710181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Margherita Pizza",
              price: "$22",
              imageSrc: "https://images.pexels.com/photos/34380267/pexels-photo-34380267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Mushroom Risotto",
              price: "$26",
              imageSrc: "https://images.pexels.com/photos/11190139/pexels-photo-11190139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Classic Tiramisu",
              price: "$12",
              imageSrc: "https://images.pexels.com/photos/7779361/pexels-photo-7779361.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Special Dining Packages"
          description="Choose the perfect dining experience for any occasion"
          tag="Special Offers"
          tagIcon={Gift}
          plans={[
            {
              id: "romantic",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$85",
              subtitle: "Perfect for romantic evenings",
              features: [
                "3-course dinner for two",
                "Complimentary wine bottle",
                "Candlelit table setting",
                "Dessert on the house"
              ],
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "about" }
              ]
            },
            {
              id: "family",
              badge: "Great Value",
              badgeIcon: Users,
              price: "$120",
              subtitle: "Ideal for family gatherings",
              features: [
                "4-course family meal (4 people)",
                "Kids menu included",
                "Shared appetizer platter",
                "Family-style portions"
              ],
              buttons: [
                { text: "Reserve", href: "contact" },
                { text: "View Menu", href: "product" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Hear from our valued customers about their dining experiences"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Food Critic",
              company: "Culinary Times",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9826293/pexels-photo-9826293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              quote: "The most authentic Italian experience outside of Italy. Every dish tells a story of tradition and passion."
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Regular Customer",
              company: "Local Foodie",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1674113/pexels-photo-1674113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              quote: "I've been coming here for years and the quality never disappoints. It feels like dining with family."
            },
            {
              id: "3",
              name: "Sofia Chen",
              role: "Event Planner",
              company: "Elegant Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              quote: "Perfect venue for special occasions. The atmosphere and service create magical moments for our clients."
            },
            {
              id: "4",
              name: "Antonio Rossi",
              role: "Business Executive",
              company: "Corporate Dining",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9566219/pexels-photo-9566219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              quote: "Excellent choice for business dinners. The elegant ambiance and exceptional cuisine impress every time."
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Culinary Team"
          description="The passionate chefs behind our authentic Italian cuisine"
          tag="Our Chefs"
          tagIcon={ChefHat}
          members={[
            {
              id: "1",
              name: "Chef Marco Benedetti",
              role: "Head Chef",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              bio: "With over 20 years of experience in traditional Italian cooking, Marco brings authentic flavors from his hometown in Tuscany."
            },
            {
              id: "2",
              name: "Chef Anna Vitale",
              role: "Pasta Specialist",
              imageSrc: "https://images.pexels.com/photos/3771814/pexels-photo-3771814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              bio: "Anna specializes in handmade pasta and learned her craft from her grandmother in the hills of Emilia-Romagna."
            },
            {
              id: "3",
              name: "Chef Giuseppe Romano",
              role: "Pizza Master",
              imageSrc: "https://images.pexels.com/photos/3771814/pexels-photo-3771814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              bio: "Giuseppe is a certified Neapolitan pizza maker who trained in Naples and brings authentic wood-fired pizza techniques."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Book your dining experience at Bella Vista and let us create unforgettable memories for you"
          imageSrc="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          buttonText="Make Reservation"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Reservation Date", required: true },
            { name: "guests", type: "number", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary requirements...",
            rows: 4,
            required: false
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bella Vista"
          columns={[
            {
              items: [
                { label: "Menu", href: "product" },
                { label: "Reservations", href: "contact" },
                { label: "Private Events", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Our Story", href: "about" },
                { label: "Our Chefs", href: "team" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}