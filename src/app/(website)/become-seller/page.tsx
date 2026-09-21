"use client";

import React, { useState } from "react";
import HeroSection from "@/components/common/HeroSection";
import { DollarSign, Truck, Users, CheckCircle2, Store, Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/store";
import { login } from "@/redux/features/auth/authSlice";

const BecomeSellerPage = () => {
  const dispatch = useAppDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    farmName: "",
    ownerName: "",
    email: "",
    phone: "",
    category: "Organic Vegetables",
    acres: "Backyard Garden (<1 Acre)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Auto log in as seller for demo convenience
    dispatch(
      login({
        user: {
          id: "seller-" + Date.now(),
          name: formData.ownerName || "Farm Vendor",
          email: formData.email,
          role: "seller",
          farmName: formData.farmName,
          avatar: "/assets/head.png",
        },
      })
    );
  };

  return (
    <div className="space-y-12 md:space-y-20 pb-16">
      <HeroSection
        heading="Sell Your Harvest on Table Fresh"
        paragraph="Whether you tend a lush backyard vegetable garden or manage a multi-acre organic farm, connect directly with local buyers eager for clean produce."
        image="/assets/findFresh1.png"
      />

      {/* Value Pillars */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-2">
            <Store className="w-3.5 h-3.5" /> Producer Economics
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Why Sell Directly on Table Fresh?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            We bypass middlemen, grocery wholesalers, and high fees so you keep 95% of your sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Keep 95% of Revenue</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Industrial grocery chains take 80% margins. With Table Fresh, local buyers pay fair prices and you pocket almost all of it.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Sprout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Sell Excess Garden Surplus</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Have 20 extra pounds of zucchini or fruit trees dropping harvest? List them in seconds instead of letting good nutrition spoil.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Flexible Local Dispatch</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Choose doorstep pickup by customers, drop-off at a neighborhood community hub, or our zero-emission courier network.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-150 shadow-xl p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Seller Application Approved!</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                Welcome to Table Fresh! Your farm profile for <strong>{formData.farmName}</strong> has been created, and your account is now activated as a verified Seller.
              </p>
              <div className="pt-2">
                <Button
                  onClick={() => (window.location.href = "/farm/1")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-2.5"
                >
                  View Sample Farm Storefront <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-bold text-gray-900">Apply to Become a Producer</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Tell us about your garden or farm to begin listing harvest for local neighbors.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="farm-name">Farm / Garden Name *</Label>
                  <Input
                    id="farm-name"
                    placeholder="e.g. Sunny Brook Organics"
                    value={formData.farmName}
                    onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                    required
                    className="focus-visible:ring-emerald-500 rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="owner-name">Owner / Grower Name *</Label>
                  <Input
                    id="owner-name"
                    placeholder="e.g. Robert Smith"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    required
                    className="focus-visible:ring-emerald-500 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="seller-email">Email Address *</Label>
                  <Input
                    id="seller-email"
                    type="email"
                    placeholder="robert@sunnybrook.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="focus-visible:ring-emerald-500 rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="seller-phone">Phone Number *</Label>
                  <Input
                    id="seller-phone"
                    placeholder="(555) 345-6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="focus-visible:ring-emerald-500 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Primary Produce Category</Label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Organic Vegetables">Organic Vegetables</option>
                    <option value="Heirloom Fruits & Berries">Heirloom Fruits & Berries</option>
                    <option value="Raw Honey & Apiary">Raw Honey & Apiary</option>
                    <option value="Pasture Eggs & Dairy">Pasture Eggs & Dairy</option>
                    <option value="Artisan Breads & Flour">Artisan Breads & Flour</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label>Growing Scale</Label>
                  <select
                    value={formData.acres}
                    onChange={(e) => setFormData({ ...formData, acres: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Backyard Garden (<1 Acre)">Backyard Garden (&lt;1 Acre)</option>
                    <option value="Homestead (1 - 5 Acres)">Homestead (1 - 5 Acres)</option>
                    <option value="Small Commercial Farm (5 - 20 Acres)">Small Commercial Farm (5 - 20 Acres)</option>
                    <option value="Large Organic Farm (20+ Acres)">Large Organic Farm (20+ Acres)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3 text-xs text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p>
                  By applying, you certify that all produce listed on Table Fresh is grown using non-synthetic methods, free of chemical pesticide sprays, and non-GMO seeds.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg transition-all text-base"
              >
                Submit Producer Application
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default BecomeSellerPage;

