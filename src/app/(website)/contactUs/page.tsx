"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
          <MessageSquare className="w-3.5 h-3.5" /> Support & Inquiries
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Get in Touch with Table Fresh
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Have a question about a local farm, produce delivery, or becoming a vendor? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-150 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
        {/* Left Column: Contact info */}
        <div className="md:col-span-5 bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-900 text-white p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            <div>
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-sm text-emerald-100/90 mt-1">
                Fill out the form and our farm coordinator team will respond within 4 business hours.
              </p>
            </div>

            <div className="space-y-4 text-sm text-emerald-100">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Direct Phone Support</p>
                  <a href="tel:+18880000000" className="hover:underline">
                    +1 (888) 000-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email Address</p>
                  <a href="mailto:support@tablefresh.com" className="hover:underline">
                    support@tablefresh.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Main Depot & Headquarters</p>
                  <p>123 Organic Way, Farmville, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Harvest & Dispatch Hours</p>
                  <p>Mon - Sat: 6:00 AM – 7:00 PM PST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10 border-t border-emerald-600/50 mt-6">
            <p className="text-xs text-emerald-200">
              Fast, friendly help. Your support empowers local organic agriculture.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="md:col-span-7 p-6 sm:p-10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Message Received!</h3>
              <p className="text-sm text-gray-600 max-w-md">
                Thank you for contacting Table Fresh. One of our farm community coordinators will get back to you shortly.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6"
              >
                Send Another Note
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="focus-visible:ring-emerald-500 rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="focus-visible:ring-emerald-500 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="focus-visible:ring-emerald-500 rounded-xl"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Your Message *</Label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Ask a question about produce, farm visits, or seller inquiries..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full rounded-xl border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-2.5 rounded-full shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;